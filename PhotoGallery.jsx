import React, { useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import './PhotoGallery.css';

const PhotoGallery = ({ photos }) => {
  const maxDisplayPhotos = 5;
  const extraPhotosCount = photos.length > maxDisplayPhotos ? photos.length - maxDisplayPhotos + 1 : 0;
  const lightGalleryRef = useRef(null);
  const [currentPageImages, setCurrentPageImages] = useState([]);
  const photoCount = Math.min(photos.length, maxDisplayPhotos);

  useEffect(() => {
    const images = photos.map((photo) => ({
      src: photo.src,
      thumb: photo.src,
      subHtml: photo.alt || photo.caption || '',
    }));
    setCurrentPageImages(images);
  }, [photos]);

  useEffect(() => {
    if (lightGalleryRef.current) {
      lightGalleryRef.current.refresh();
    }
  }, [currentPageImages]);

  if (!photos || photos.length === 0) {
    return null;
  }

  const openGallery = (index) => {
    if (lightGalleryRef.current) {
      lightGalleryRef.current.openGallery(index);
    }
  };

  const renderGallery = () => {
    if (photoCount === 1) {
      return (
        <div className="gallery-grid-single">
          <div className="gallery-item" onClick={() => openGallery(0)}>
            <img
              src={photos[0].src}
              alt={photos[0].alt || `Gallery image 1`}
              className="gallery-image"
            />
            {photos[0].caption && <span className="caption">{photos[0].caption}</span>}
          </div>
        </div>
      );
    }

    if (photoCount === 2) {
      return (
        <div className="gallery-grid">
          {photos.slice(0, 2).map((photo, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openGallery(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt || `Gallery image ${index + 1}`}
                className="gallery-image"
              />
              {photo.caption && <span className="caption">{photo.caption}</span>}
            </div>
          ))}
        </div>
      );
    }

    if (photoCount === 3) {
      return (
        <div className="gallery-grid-three-photos">
          <div className="gallery-top-row">
            {photos.slice(0, 2).map((photo, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openGallery(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt || `Gallery image ${index + 1}`}
                  className="gallery-image"
                />
                {photo.caption && <span className="caption">{photo.caption}</span>}
              </div>
            ))}
          </div>
          <div className="gallery-bottom-row">
            <div
              className="gallery-item"
              onClick={() => openGallery(2)}
            >
              <img
                src={photos[2].src}
                alt={photos[2].alt || `Gallery image 3`}
                className="gallery-image"
              />
              {photos[2].caption && <span className="caption">{photos[2].caption}</span>}
            </div>
          </div>
        </div>
      );
    }

    // Additional gallery layouts for larger photo counts can be added here
  };

  return (
    <div className="gallery-container">
      <LightGallery
        onInit={(ref) => (lightGalleryRef.current = ref)}
        speed={500}
        plugins={[lgZoom, lgThumbnail]}
        dynamic
        dynamicEl={currentPageImages}
      >
        {renderGallery()}
      </LightGallery>
    </div>
  );
};

export default PhotoGallery;
