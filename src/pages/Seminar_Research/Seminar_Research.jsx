import React from 'react'
import './Seminar_Research.style.css'
import TextContainer from '../../components/TextContainer/TextContainer.jsx'
import { SeminarData } from '../../constants/SeminarData'
import { ResearchData } from '../../constants/ResearchData'

const Seminar_Research = () => {
    return (
        <div className="seminarParent">
            <TextContainer
                heading="Seminars & Workshops"
                description={
                    <>
                        {
                            SeminarData.map((seminar, index) => (
                                <TextContainer
                                    key={index}
                                    heading={seminar.heading}
                                    description={seminar.description}
                                />
                            ))
                        }
                    </>
                }
            />
            <TextContainer
                heading={ResearchData[0].heading}
                description={ResearchData[0].description}
            />
        </div>
    )
}

export default Seminar_Research