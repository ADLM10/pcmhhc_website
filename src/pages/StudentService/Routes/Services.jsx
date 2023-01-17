import React from 'react'
import PageHeading from '../../../components/PageHeading/PageHeading'
import TextContainer from '../../../components/TextContainer/TextContainer'
import StudentService from '../StudentService'


const Services = (props) => {
  return (
    <StudentService
      child={
        <>
          <PageHeading heading={props.Heading} />
          {
            props.servicesList.map((item, index) => (
              <TextContainer
                key={index}
                heading={item.heading}
                description={item.description}
              />
            ))
          }
        </>
      }
    />
  )
}

export default Services