import React from 'react'
import './SectionContainer.style.css'

const SectionContainer = (props) => {
  return (
    <section
      className="sectionParent"
      style={{ backgroundColor: props.bgColor, }}>
      {props.children}
    </section>
  )
}

export default SectionContainer