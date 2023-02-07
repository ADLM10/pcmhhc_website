import "./NoticeBoard.style.css";
// import { Notices } from "../../constants/Notices";
import { db } from "../../firebase";
import { useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);

  const [tenders, setTenders] = useState([]);

  async function getTenders() {
    const docRef = doc(db, "website", "tender");
    const docSnap = await getDoc(docRef);
    const currentYear = new Date().getFullYear();
    if (docSnap.exists()) {
      return docSnap.data()[currentYear];
    } else {
      console.log("No such document!");
    }
  }

  async function getNotices() {
    const docRef = doc(db, "website", "notice");
    const docSnap = await getDoc(docRef);
    const currentYear = new Date().getFullYear();
    if (docSnap.exists()) {
      return docSnap.data()[currentYear];
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getNotices()
      .then((response) => {
        setNotices(response);
      })
      .catch((error) => {
        console.log(error);
      });
    getTenders().then((response) => {
      setTenders(response);
    });
  }, []);

  return (
    <div className="notice-parent">
      <div className="notice-container">
        <h1>Notices</h1>
        <ul className="notice-list">
          {notices &&
            notices.map((notice) => (
              <li key={notice.id} className="notice-item">
                <a href={notice.drive_Link} target="_blank" rel="noreferrer">
                  {notice.heading}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="notice-container">
        <h1>Tenders</h1>
        <ul className="notice-list">
          {tenders &&
            tenders.map((tender) => (
                <li key={tender.id} className="notice-item">
                  <a href={tender.drive_Link} target="_blank" rel="noreferrer">
                    {tender.heading}
                  </a>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
};

export default NoticeBoard;
