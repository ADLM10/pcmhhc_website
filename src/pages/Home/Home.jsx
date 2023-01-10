import React from 'react'
import './Home.style.css'
import {details} from './index.js'
import principalImage from '../../assets/princiImage.jpg'

const Home = () => {
  return (
    <section className="homeParent">
        <div className="textContainer">
          <h1>
            FROM THE PRINCIPAL’S DESK
          </h1>
          <p>
            {details.description}
          </p>
        </div>
        <div className="imageContainer">
          <img className="princiImage" src={principalImage} alt="princiImage" />
        </div>
    </section>
  )
}

export default Home