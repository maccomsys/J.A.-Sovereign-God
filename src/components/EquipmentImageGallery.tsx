import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface EquipmentImageGalleryProps {
  images: string[];
  equipmentName: string;
  className?: string;
  aspectRatio?: string;
}

export const EquipmentImageGallery: React.FC<EquipmentImageGalleryProps> = ({
  images,
  equipmentName,
  className = '',
  aspectRatio = 'aspect-[16/10]',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const hasMultiple = images.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentUrl = images[currentIndex] || images[0];
  const isFailed = imageError[currentIndex];

  return (
    <div className={`relative flex flex-col bg-neutral-100 rounded-lg overflow-hidden group ${className}`}>
      {/* Main Image Viewport */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-neutral-900 flex items-center justify-center`}>
        {isFailed ? (
          <div className="flex flex-col items-center justify-center p-6 text-neutral-400 text-center">
            <ImageIcon className="w-8 h-8 mb-2 opacity-50 text-neutral-400" />
            <span className="text-xs font-medium">Image preview temporarily unavailable</span>
            <span className="text-[11px] text-neutral-500 mt-1">{equipmentName}</span>
          </div>
        ) : (
          <img
            src={currentUrl}
            alt={`${equipmentName} - View ${currentIndex + 1} of ${images.length}`}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
            onError={() => {
              setImageError((prev) => ({ ...prev, [currentIndex]: true }));
            }}
          />
        )}

        {/* Multiple Images Navigation Controls */}
        {hasMultiple && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous equipment image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#FF662C] text-white p-1.5 rounded-full backdrop-blur-xs transition-colors opacity-90 hover:opacity-100 cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next equipment image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#FF662C] text-white p-1.5 rounded-full backdrop-blur-xs transition-colors opacity-90 hover:opacity-100 cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Image counter indicator badge */}
            <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border border-white/20">
              {currentIndex + 1} / {images.length} Photos
            </div>
          </>
        )}
      </div>

      {/* Thumbnails row if multiple images */}
      {hasMultiple && (
        <div className="flex items-center gap-1.5 p-2 bg-neutral-900/90 border-t border-neutral-800 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={`${img}-${idx}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`relative shrink-0 w-12 h-9 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-[#FF662C] scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              title={`View image ${idx + 1}`}
            >
              <img
                src={img}
                alt={`${equipmentName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
