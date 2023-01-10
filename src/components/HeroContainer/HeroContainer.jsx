import React from 'react'
import './HeroContainer.style.css'

const HeroContainer = (props) => {
  return (
    <div class="heroContainer" style={{backgroundColor:props.bgColor}}>
      {props.children}
    </div>
  )
}

export default HeroContainer