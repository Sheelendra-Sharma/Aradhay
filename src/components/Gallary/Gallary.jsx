import React, { useState } from "react";
import './gallary.css'
import khmp from '../../assets/Serials/1.png';
import iwm from '../../assets/Serials/2.png';
import cp from '../../assets/Serials/3.png';
import Si from '../../assets/Serials/4.png'; 
import pma from '../../assets/Serials/5.png'; 
import rr from '../../assets/Serials/6.png'; 
import bs from '../../assets/Serials/7.png'; 
import st from '../../assets/Serials/8.png'; 
import tnmk from '../../assets/Serials/9.png'; 

const galleryData = [
  {
    id: 1,
    title: "Kyal Haal Mr. Panchaal",
    mainImage: khmp,
    character: "Boy",
    relatedImages: [
      "/images/bb1.jpg",
      "/images/bb2.jpg",
      "/images/bb3.jpg"
    ]
  },
  {
    id: 2,
    title: "India Wali Maa",
    mainImage: iwm,
    character: "Chai Wala",
    relatedImages: [
      "/images/st1.jpg",
      "/images/st2.jpg",
      "/images/st3.jpg"
    ]
  },
  {
    id: 7,
    title: "Bindiya Sarkar",
    mainImage: bs,
    character: "Stone Boy",
    relatedImages: [
      "/images/st1.jpg",
      "/images/st2.jpg",
      "/images/st3.jpg"
    ]
  },
  {
    id: 8,
    title: "Sirf Tum",
    mainImage: st,
    character: "Chhotu Chai Bala",
    relatedImages: [
      "/images/st1.jpg",
      "/images/st2.jpg",
      "/images/st3.jpg"
    ]
  },
  {
    id: 3,
    title: "Crime Patrol",
    mainImage: cp,
    character: "Lead Negative",
    relatedImages: [
      "/images/st1.jpg",
      "/images/st2.jpg",
      "/images/st3.jpg"
    ]
  },
  {
    id: 4,
    title: "Savdhan India",
    mainImage: Si,
    character: "Lead Character",
    relatedImages: [
      "/images/st1.jpg",
      "/images/st2.jpg",
      "/images/st3.jpg"
    ]
  },
  {
    id: 5,
    title: "Pocket Mein Aasman",
    mainImage: pma,
    character: "Ward Boy",
    relatedImages: [
      "/images/st1.jpg",
      "/images/st2.jpg",
      "/images/st3.jpg"
    ]
  },
  {
    id: 6,
    title: "Rab Rakha",
    mainImage: rr,
    character: "Delivery Boy",
    relatedImages: [
      "/images/st1.jpg",
      "/images/st2.jpg",
      "/images/st3.jpg"
    ]
  },
  {
    id: 9,
    title: "Tose Naina Mila ke",
    mainImage: tnmk,
    character: "Transgender",
    relatedImages: [
      "/images/st1.jpg",
      "/images/st2.jpg",
      "/images/st3.jpg"
    ]
  },
  // Add more serials as needed
];

export default function Gallery() {
  const [selectedSerial, setSelectedSerial] = useState(null);

  return (
    <div className="serial-gallery-container">
      <h1 className="serial-gallery-title">Experience</h1>
      <div className="serial-gallery-grid">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="serial-gallery-grid-item"
            onClick={() => setSelectedSerial(item)}
          >
            <img src={item.mainImage} alt={item.title} className="serial-gallery-image" />
            <p className="serial-gallery-caption">{item.title}</p>
            <p className="serial-gallery-caption2">({item.character})</p>
          </div>
        ))}
      </div>

      {selectedSerial && (
        <div className="serial-gallery-popup" onClick={() => setSelectedSerial(null)}>
          <div className="serial-gallery-popup-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="serial-gallery-popup-title">{selectedSerial.title}</h2>
            <div className="serial-gallery-related-images">
              {selectedSerial.relatedImages.map((img, index) => (
                <img key={index} src={img} alt={`Related ${index}`} className="serial-gallery-related-image" />
              ))}
            </div>
            <button className="serial-gallery-close-button" onClick={() => setSelectedSerial(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}