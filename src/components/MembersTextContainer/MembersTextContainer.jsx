import React from 'react'
import './MembersTextContainer.style.css'

const MembersTextContainer = (props) => {
  return (
    <div className="members-text-Container">
        <h1 className="members-containerHeading">{props.heading}</h1>
        <p className="members-containerDescription">{props.description}</p>
    </div>
  )
}

export default MembersTextContainer