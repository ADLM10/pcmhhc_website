import React from 'react'
import './Academics.style.css'
import PageNav from '../../components/PageNav/PageNav'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import HeroContainer from '../../components/HeroContainer/HeroContainer'
import { AcademicsNavLinks } from './AcademicsNavLinks'

const Academics = (props) => {
  return (
    <SectionContainer 
      children={
        <>
          <PageNav navHeading="Academics" navLinks={AcademicsNavLinks}
            bgColor="#FFFFFF" textColor="#411010"
            containerColor="#A2ECFC"
            pagePath="academics"
          />
          <HeroContainer
            bgColor="#A2ECFC"
            children={props.child}
            />
        </>
      }
      // bgColor="#000000"
    />
  )
}

export default Academics