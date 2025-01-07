import React from 'react';
import GalleryCard from './GalleryCard';
import { galleryImages } from '../../data/gallery';

const GalleryGrid = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {galleryImages.map((image, index) => (
          <GalleryCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;