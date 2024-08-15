import React from 'react';

interface PhotoGridProps {
  photos: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="grid sm:grid-cols-3 gap-4 mt-4 grid-cols-1 text-center">
      {photos.map((photo, index) => (
        <div key={index} className="flex justify-center items-center">
          <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-32 object-cover rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
