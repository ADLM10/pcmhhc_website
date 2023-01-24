import React from 'react'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import './NoticeBoard.style.css'
import {Notices} from '../../constants/Notices'


const NoticeBoard = () => {
  return (
    <div className="notice-parent">
      <div className="notice-container">
      <h1>
        Notices
      </h1>
        <ul className="notice-list">
        {
          Notices.map((notice) =>
          notice.type === "Notice" ? (
            <li className="notice-item">
              <a href={notice.driveLink} target="_blank" rel="noreferrer">
              {notice.heading}
              </a>
            </li>
          ) : null
          )
        }
        </ul>
      </div>
      <div className="notice-container">
      <h1>
        Tenders
      </h1>
        <ul className="notice-list">
        {
          Notices.map((tender) =>
          tender.type === "Tender" ? (
            <li className="notice-item">
              <a href={tender.drive} target="_blank" rel="noreferrer">
              {tender.heading}
              </a>
            </li>
          ) : null
          )
        }
        </ul>
      </div>
    </div>
  )
}

export default NoticeBoard