import { useState } from 'react'
import React from 'react'
import './PageNav.style.css'
import { Link } from 'react-router-dom'


const PageNav = (props) => {
    const [activeButton,SetActiveButton] = useState(0)

    return (
        <div className="pageNavParent" style={{backgroundColor:props.containerColor}}>
            <div className="navHeadingParent">
                <h1 >{props.navHeading}</h1>
            </div>
            <div className="navLinksParent">
                <ul className="navLinksList">
                    {
                        props.navLinks.map((link) => {
                            return (
                                <button key={link.id} className="pageNavButton" style={{backgroundColor:props.bgColor}}>
                                    <a className="pageNavLink" href="#" style={{color:props.textColor}}>{link.title}</a>
                                </button>
                            )
                        }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default PageNav