import React from 'react'
import MembersTextContainer from '../../../components/MembersTextContainer/MembersTextContainer'
import { LocalManagingCommitteeMembers } from '../../../constants/LocalManagingCommitteeMembers'
import AboutUs from '../AboutUs'

const LocalManagingCommittee = () => {
  return (
    <AboutUs child={
    <MembersTextContainer
            heading="MEMBERS OF LOCAL MANAGING COMMITTEE"
            description = {<>
            {
              LocalManagingCommitteeMembers.map((member, index) => (
                (member.id <=3) ?
                <span style={{marginTop:"20px"}}>{member.id} . {member.description}</span>:
                <p style={{display:"flex",flexDirection:"column"}}>
                    <span style={{marginTop:"20px"}}>{member.id} . {member.description}</span>
                    {
                        member.members.map((element, index) => (
                            <span style={{marginTop:"20px",marginLeft:"50px"}} >{element.id}.{element.name}</span>
                        ))
                    }
                </p>
              )
                )
            }
            </>}
            />
    }/>
  )
}

export default LocalManagingCommittee