import React from 'react'
import './AboutUs.style.css'
import PageNav from '../../components/PageNav/PageNav'
import { AboutNavLinks } from './AboutNavLinks'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import HeroContainer from '../../components/HeroContainer/HeroContainer'
import TextContainer from '../../components/TextContainer/TextContainer.jsx'

const AboutUs = () => {
  return (
    <SectionContainer
      children={
        <>
          <PageNav navHeading="About Us" navLinks={AboutNavLinks}
            bgColor="#C7A2A2" textColor="#411010"
            containerColor="#5A4B4B"
          />
          <HeroContainer
            bgColor="#C7A2A2">
            <TextContainer
              heading="MEMBERS OF BOARD OF TRUST"
              description="1. Prof. Dr. Ranjit Chakrabarty - Chairman
                       2. Mr. Arup Chandra - Secretary
                       3. Mr. Pracheta Mazumdar - Member
                       4. Prof. (Dr.) Bidhu Bhushan Jana - Member
                       5. Dr. Manindra Kumar Biswas - Member
                       6. Prof (Dr.) Nidan Betal - Invitee Member
                       7. Prof (Dr.) Labanya Bikas Mondal - Invitee Member"
            />
            <TextContainer
              heading="MEMBERS OF BOARD OF TRUST"
              description="1. Prof. Dr. Ranjit Chakrabarty - Chairman
                       2. Mr. Arup Chandra - Secretary
                       3. Mr. Pracheta Mazumdar - Member
                       4. Prof. (Dr.) Bidhu Bhushan Jana - Member
                       5. Dr. Manindra Kumar Biswas - Member
                       6. Prof (Dr.) Nidan Betal - Invitee Member
                       7. Prof (Dr.) Labanya Bikas Mondal - Invitee Member"
            />
            <TextContainer
              heading="MEMBERS OF BOARD OF TRUST"
              description="1. Prof. Dr. Ranjit Chakrabarty - Chairman
                       2. Mr. Arup Chandra - Secretary
                       3. Mr. Pracheta Mazumdar - Member
                       4. Prof. (Dr.) Bidhu Bhushan Jana - Member
                       5. Dr. Manindra Kumar Biswas - Member
                       6. Prof (Dr.) Nidan Betal - Invitee Member
                       7. Prof (Dr.) Labanya Bikas Mondal - Invitee Member"
            />
            <TextContainer
              heading="MEMBERS OF BOARD OF TRUST"
              description="1. Prof. Dr. Ranjit Chakrabarty - Chairman
                       2. Mr. Arup Chandra - Secretary
                       3. Mr. Pracheta Mazumdar - Member
                       4. Prof. (Dr.) Bidhu Bhushan Jana - Member
                       5. Dr. Manindra Kumar Biswas - Member
                       6. Prof (Dr.) Nidan Betal - Invitee Member
                       7. Prof (Dr.) Labanya Bikas Mondal - Invitee Member"
            />
            <TextContainer
              heading="MEMBERS OF BOARD OF TRUST"
              description="1. Prof. Dr. Ranjit Chakrabarty - Chairman
                       2. Mr. Arup Chandra - Secretary
                       3. Mr. Pracheta Mazumdar - Member
                       4. Prof. (Dr.) Bidhu Bhushan Jana - Member
                       5. Dr. Manindra Kumar Biswas - Member
                       6. Prof (Dr.) Nidan Betal - Invitee Member
                       7. Prof (Dr.) Labanya Bikas Mondal - Invitee Member"
            />
          </HeroContainer>
        </>
      }
    />
  )
}

export default AboutUs