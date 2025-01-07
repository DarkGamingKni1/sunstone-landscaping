import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="mt-4 text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default SectionHeader;