import React from 'react'
import './PhotoGallery.style.css'
import { PictureLink } from './PictureLink.js'

const PhotoZoom = () => {
    return (
        PictureLink.map((item) => (
            <div class="lightbox" id={`lightbox-${item.id}`}>
                <div class="content">
                <img src={item.src} alt={item.alt} />
                    <div class="title">{item.description}</div>
                    <a href="#gallery" class="close" ></a>
                </div>
            </div>
        ))
    )
}


const PhotoGallery = () => {
    return (
        <div class="photoGalleryParent">
            <div id="gallery">
                {
                    PictureLink.map((item) => (

                        <div key={item.id}><img src={item.src} alt={item.alt} />
                            <a href={`#lightbox-${item.id}`}>
                            </a>
                        </div>
                    ))}
            </div>
            <PhotoZoom />
        </div>
    )
}

export default PhotoGallery