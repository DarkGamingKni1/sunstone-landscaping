import React from 'react';
import GalleryGrid from './gallery/GalleryGrid';
import SectionHeader from './common/SectionHeader';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Work"
          description="Browse through our portfolio of beautiful landscapes"
        />
        <GalleryGrid />
      </div>
    </section>
  );
};

export default Gallery;