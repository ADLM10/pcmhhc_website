import React from 'react'
import AboutUs from '../AboutUs'
import MembersTextContainer from '../../../components/MembersTextContainer/MembersTextContainer'

const VisionMission = () => {
    return (
        <AboutUs child={
            <>
                <MembersTextContainer
                    heading="Vision"
                    description={
                        <p>
                            Our Vision, to empower our students to grow as individuals with strong open judicial minds with a national perspective, preparing them to make a mark in the international challenge.<br />
                            To provide good quality education, equipping students with knowledge and skill in their stream, inculcate values, identify hidden talents, provide opportunities for students to realize their full potential and thus shape them into future Homoeopaths and above all good human being.
                        </p>
                    }
                />
                <MembersTextContainer
                    heading="Mission"
                    description={
                        <p>
                            The mission of the home’s and colleges therefore is to provide a learning environment and give chance to the students as the learners.<br />
                            To Strive for quality education in keeping with the motto of the College , “ Excellence in Education “ and prepare young minds for imbibing  knowledge , skill and sensitivity.
                        </p>
                    }
                />
            </>
        }
        />

    )
}

export default VisionMission