import React from "react";

function Gallery({ images }) {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="images">
        {images.map((image, index) => {
          return <img src={image} alt="" key={index} />;
        })}
      </div>
    </div>
  );
}

export default Gallery;
