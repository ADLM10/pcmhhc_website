import React from "react";
import "./PhotoGallery.style.css";
import PictureModal from "../../components/DataModal/PictureModal";
import { getPhotoGallery } from "../../constants/PhotoGallery";
import { useEffect } from "react";

const PhotoGallery = () => {
  const [showModal, setShowModal] = React.useState(false); // for modal
  const modalData = React.useRef(""); // for modalData

  const [gallery, setGallery] = React.useState(null);

  useEffect(() => {
    getPhotoGallery()
      .then((response) => {
        setGallery(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (gallery === null || gallery === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="photo-gallery-parent">
      {gallery &&
        gallery.map((link, index) => (
          <>
            <div className="card" key={index}>
              <div
                className="card-image"
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = 0.5;
                  e.currentTarget.style.cursor = "pointer";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = 1;
                }}
                onClick={() => {
                  setShowModal((prev) => !prev);
                  modalData.current = link;
                }}
              >
                <img src={link} alt="pic" />
              </div>
            </div>
            {showModal && (
              <PictureModal
                onClose={() => setShowModal((prev) => !prev)}
                src={modalData.current}
              />
            )}
          </>
        ))}
    </div>
  );
};

export default PhotoGallery;
