import React from "react";
import PhotoGallery from "./PhotoGallery";

// Example images from Unsplash (randomized)
const images = [
  { src: "https://source.unsplash.com/random/800x800?sig=1", caption: "Random Image 1" },
  { src: "https://source.unsplash.com/random/800x800?sig=2", caption: "Random Image 2" },
  { src: "https://source.unsplash.com/random/800x800?sig=3", caption: "Random Image 3" },
  { src: "https://source.unsplash.com/random/800x800?sig=4", caption: "Random Image 4" },
  { src: "https://source.unsplash.com/random/800x800?sig=5", caption: "Random Image 5" },
  { src: "https://source.unsplash.com/random/800x800?sig=6", caption: "Random Image 6" },
];

export default function DemoPhotoGallery() {
  return (
    <div style={{ padding: "2rem", background: "#f0f2f5" }}>
      <h2>Demo: Photo Gallery with Random Pictures</h2>
      <h4>1 Photo</h4>
      <PhotoGallery photos={images.slice(0, 1)} />
      <h4>2 Photos</h4>
      <PhotoGallery photos={images.slice(0, 2)} />
      <h4>3 Photos</h4>
      <PhotoGallery photos={images.slice(0, 3)} />
      <h4>4 Photos</h4>
      <PhotoGallery photos={images.slice(0, 4)} />
      <h4>6 Photos (with +N overlay)</h4>
      <PhotoGallery photos={images} />
    </div>
  );
}
