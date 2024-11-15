import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebase';
import "./Dashboard.style.css"
import { collection, doc, getDoc, setDoc, updateDoc, deleteField } from 'firebase/firestore';

const Dashboard = () => {
    const [notice, setNotice] = useState({});
    const [tender, setTender] = useState({});
    const [newNoticeYear, setNewNoticeYear] = useState('');
    const [newNoticeHeading, setNewNoticeHeading] = useState('');
    const [newNoticeLink, setNewNoticeLink] = useState('');
    const [newTenderHeading, setNewTenderHeading] = useState('');
    const [newTenderLink, setNewTenderLink] = useState('');
    const [noticeToDelete, setNoticeToDelete] = useState(null);
    const [tenderToDelete, setTenderToDelete] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const noticeRef = doc(db, 'website', 'notice');
            const tenderRef = doc(db, 'website', 'tender');

            const noticeSnapshot = await getDoc(noticeRef);
            const tenderSnapshot = await getDoc(tenderRef);

            if (noticeSnapshot.exists()) {
                setNotice(noticeSnapshot.data());
            }

            if (tenderSnapshot.exists()) {
                setTender(tenderSnapshot.data());
            }
        };

        fetchData();
    }, [db]);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out successfully');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    const handleNoticeUpdate = async () => {
        const noticeRef = doc(db, 'website', 'notice');
        let newNoticeData = { ...notice };

        // Check if the current year already exists in the notice object
        const currentYear = new Date().getFullYear().toString();
        if (!newNoticeData[currentYear]) {
            newNoticeData[currentYear] = [];
        }

        newNoticeData[currentYear] = [
            ...newNoticeData[currentYear],
            { heading: newNoticeHeading, drive_Link: newNoticeLink },
        ];

        await updateDoc(noticeRef, newNoticeData);
        setNotice(newNoticeData);
        setNewNoticeYear('');
        setNewNoticeHeading('');
        setNewNoticeLink('');
    };

    const handleTenderUpdate = async () => {
        const tenderRef = doc(db, 'website', 'tender');
        const newTenderData = {
            ...tender,
            tender: [
                ...tender.tender,
                { heading: newTenderHeading, drive_Link: newTenderLink },
            ],
        };
        await updateDoc(tenderRef, newTenderData);
        setTender(newTenderData);
        setNewTenderHeading('');
        setNewTenderLink('');
    };

    const handleNoticeDelete = async () => {
        if (noticeToDelete !== null) {
            const noticeRef = doc(db, 'website', 'notice');
            const currentYear = noticeToDelete.year;
            const indexToDelete = noticeToDelete.index;

            const newNoticeData = { ...notice };
            newNoticeData[currentYear].splice(indexToDelete, 1);



            await updateDoc(noticeRef, newNoticeData);
            setNotice(newNoticeData);
            setNoticeToDelete(null);
        }
    };

    const handleTenderDelete = async () => {
        if (tenderToDelete !== null) {
            const tenderRef = doc(db, 'website', 'tender');
            const indexToDelete = tenderToDelete.index;

            const newTenderData = { ...tender };
            newTenderData.tender.splice(indexToDelete, 1);

            await updateDoc(tenderRef, newTenderData);
            setTender(newTenderData);
            setTenderToDelete(null);
        }
    };

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <button className="dashboard-button" onClick={handleSignOut}>
                    Sign Out
                </button>
            </div>

            <div className="dashboard-section">
                <h2 className="dashboard-section-title">Notice</h2>
                {Object.keys(notice).map((year) => (
                    <div key={year}>
                        <h3 className="dashboard-subsection-title">{year}</h3>
                        {notice[year].map((item, index) => (
                            <div key={index} className="dashboard-item">
                                <div className="dashboard-item-content">
                                    <p className="dashboard-item-heading">{item.heading}</p>
                                    <p className="dashboard-item-link">{item.drive_Link}</p>
                                </div>
                                <button
                                    className="dashboard-item-delete"
                                    onClick={() => setNoticeToDelete({ year, index })}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="dashboard-form">
                    <input
                        className="dashboard-input"
                        type="text"
                        placeholder="New Notice Heading"
                        value={newNoticeHeading}
                        onChange={(e) => setNewNoticeHeading(e.target.value)}
                    />
                    <input
                        className="dashboard-input"
                        type="text"
                        placeholder="New Notice Link"
                        value={newNoticeLink}
                        onChange={(e) => setNewNoticeLink(e.target.value)}
                    />
                    <button className="dashboard-button" onClick={handleNoticeUpdate}>
                        Update Notice
                    </button>
                </div>
                {noticeToDelete !== null && (
                    <div className="dashboard-delete-confirmation">
                        <p>Are you sure you want to delete this notice?</p>
                        <div className="dashboard-delete-actions">
                            <button
                                className="dashboard-button dashboard-button-destructive"
                                onClick={handleNoticeDelete}
                            >
                                Confirm Delete
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="dashboard-section">
                <h2 className="dashboard-section-title">Tender</h2>
                {tender.tender?.map((item, index) => (
                    <div key={index} className="dashboard-item">
                        <div className="dashboard-item-content">
                            <p className="dashboard-item-heading">{item.heading}</p>
                            <p className="dashboard-item-link">{item.drive_Link}</p>
                        </div>
                        <button
                            className="dashboard-item-delete"
                            onClick={() => setTenderToDelete({ index })}
                        >
                            Delete
                        </button>
                    </div>
                ))}
                <div className="dashboard-form">
                    <input
                        className="dashboard-input"
                        type="text"
                        placeholder="New Tender Heading"
                        value={newTenderHeading}
                        onChange={(e) => setNewTenderHeading(e.target.value)}
                    />
                    <input
                        className="dashboard-input"
                        type="text"
                        placeholder="New Tender Link"
                        value={newTenderLink}
                        onChange={(e) => setNewTenderLink(e.target.value)}
                    />
                    <button className="dashboard-button" onClick={handleTenderUpdate}>
                        Update Tender
                    </button>
                </div>
                {tenderToDelete !== null && (
                    <div className="dashboard-delete-confirmation">
                        <p>Are you sure you want to delete this tender?</p>
                        <div className="dashboard-delete-actions">
                            <button
                                className="dashboard-button dashboard-button-destructive"
                                onClick={handleTenderDelete}
                            >
                                Confirm Delete
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;