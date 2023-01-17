import React from 'react'
import AboutUs from '../AboutUs'
import PageHeading from '../../../components/PageHeading/PageHeading'
import { AdministrativeStaffMembers } from '../../../constants/AdministrativeStaffMembers'
import '../AboutUs.style.css'

const AdministrativeStaff = () => {
    return (
        <AboutUs child={
            <>
                <PageHeading heading="Administrative Staff" />
                <div className="a-box-container">{
                    AdministrativeStaffMembers.map((member, index) => (
                        <div className="a-box">
                            <div className="img-container">
                                <div className="img-inner">
                                    <div className="inner-skew">
                                        <div className="circle-image-container">
                                            <div className="circle-image-container-inner">
                                                <img src={member.picture} alt="avatar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-container" style={{ height: "270px" }}>
                                <h3>{member.name}</h3>
                                <h4>{member.position}</h4>
                                <div>
                                    <p>{member.education}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </>
        } />
    )
}

export default AdministrativeStaff
