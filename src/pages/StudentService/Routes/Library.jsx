import React from 'react'
import { LibraryData } from '../../../constants/LibraryData'
import StudentService from '../StudentService'
import PageHeading from '../../../components/PageHeading/PageHeading'
import TextContainer from '../../../components/TextContainer/TextContainer'

const Library = () => {
  return (
    <StudentService
        child={
            <>
                    <PageHeading heading="Library" />
                    {
                        LibraryData.map((item, index) => (
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

export default Library