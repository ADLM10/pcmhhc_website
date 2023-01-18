import React from 'react'
import PageHeading from "../../../components/PageHeading/PageHeading";
import TextContainer from '../../../components/TextContainer/TextContainer';
import Hospital from "../Hospital";

const HospitalDetailsComponent = (props) => {
  return (
    <Hospital
        child={
            <>
                <PageHeading heading={props.Heading} />
                {
                    props.detailsList.map((item, index) => (
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

export default HospitalDetailsComponent