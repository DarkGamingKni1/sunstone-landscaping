import React from 'react';
import type { GalleryImage } from '../../types';

interface GalleryCardProps {
  image: GalleryImage;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group aspect-[4/3]">
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-xl font-semibold text-center px-4">{image.title}</h3>
      </div>
    </div>
  );
};

export default GalleryCard;