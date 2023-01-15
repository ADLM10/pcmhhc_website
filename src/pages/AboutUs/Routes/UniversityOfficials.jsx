import React from 'react'
import AboutUs from '../AboutUs'
import { UniversityOfficialsMembers } from '../../../constants/UniversityOfficialsMembers'

const UniversityOfficials = () => {
  return (
    <AboutUs child={
        <div className="card-container">
          {UniversityOfficialsMembers.map((member, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <h3>{member.Name}</h3>
                <h4>{member.Designation}</h4>
                <p>
                  {member.Fax_Phn}
                </p>
                <a href={`mailto:${member.email}`}>
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
    } />

  )
}

export default UniversityOfficials