// src/components/gallery/Gallery.jsx
import React from "react";
import "./Gallery.css";


const galleryImages = [
  "https://t4.ftcdn.net/jpg/03/50/81/89/360_F_350818949_lJTfzSTDr79e9Kn55PUVZjN19ct20uGc.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEyFHvuFMAc-knprFmaQcUBLgB4bTxJwL9Q&s",
  "https://t3.ftcdn.net/jpg/05/72/91/08/360_F_572910874_gjyCeTnHtxFMIuPFcfE0djznBMgsU4Bf.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/045/491/781/small_2x/muscular-man-lifting-a-dumbbell-with-one-hand-in-a-dark-gym-free-photo.jpg",
  "https://img.freepik.com/premium-photo/having-injury-back-pain-after-exercising-gym-health-care_114016-14736.jpg",
  "https://img.freepik.com/premium-photo/man-working-out-weights-room-gym_926199-1950777.jpg",
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gym Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
