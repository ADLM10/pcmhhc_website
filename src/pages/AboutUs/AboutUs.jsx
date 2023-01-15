import React from 'react'
import './AboutUs.style.css'
import PageNav from '../../components/PageNav/PageNav'
import { AboutNavLinks } from './AboutNavLinks'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import HeroContainer from '../../components/HeroContainer/HeroContainer'

const AboutUs = (props) => {
  return (
    <SectionContainer
      children={
        <>
          <PageNav navHeading="About Us" navLinks={AboutNavLinks}
            pagePath="about-us"
            bgColor="#C7A2A2" textColor="#411010"
            containerColor="#5A4B4B"
          />
          <HeroContainer
            bgColor="#C7A2A2"
            children={
              props.child
            }
          />
        </>
      }
    />
  )
}

export default AboutUs