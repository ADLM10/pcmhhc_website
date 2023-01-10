import React from 'react'
import PageNav from '../../components/PageNav/PageNav'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import HeroContainer from '../../components/HeroContainer/HeroContainer'
import TextContainer from '../../components/TextContainer/TextContainer.jsx'
import { HospitalNavLinks } from './HospitalNavLinks'

const Hospital = () => {
  return (
    <SectionContainer 
      children={
        <>
          <PageNav navHeading="Hospital" navLinks={HospitalNavLinks}
            bgColor="#FFFFFF" textColor="#411010"
            containerColor="#A2ECFC"
          />
          <HeroContainer
            bgColor="#A2ECFC">
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
    //   bgColor="#000000"
    />
  )
}

export default Hospital