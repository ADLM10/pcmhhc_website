import React from "react";
import "./PhotoGallery.style.css";
import { PictureLink } from "./PictureLink.js";

const PhotoZoom = () => {
  return PictureLink.map((item) => (
    <div className="lightbox" id={`lightbox-${item.id}`}>
      <div className="content">
        <img src={item.src} alt={item.alt} />
        <div class="title">{item.description}</div>
        <a href={`#${item.id}`} className="close"></a>
      </div>
    </div>
  ));
};

const PhotoGallery = () => {
  return (
    <div className="photoGalleryParent">
      <div id="gallery">
        {PictureLink.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} id={item.id} />
            <a href={`#lightbox-${item.id}`}></a>
          </div>
        ))}
      </div>
      <PhotoZoom />
    </div>
  );
};

export default PhotoGallery;
