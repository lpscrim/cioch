import React from "react";
import Image from "next/image";

interface ImageViewerProps {
  selectedImage: string;
  onNext: () => void;
  onPrev: () => void;
  heading: string;
  blog: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  selectedImage,
  heading,
  blog,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 mb-8 px-4">
      <div className="xl:w-3/4 relative">
        <div className="relative aspect-video">
          <Image
            src={selectedImage}
            alt={heading}
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={onPrev}
            className="cursor-pointer px-4 py-2 bg-secondary text-text rounded hover:bg-accent transition-colors"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="cursor-pointer px-4 py-2 bg-secondary text-text rounded hover:bg-accent transition-colors"
          >
            Next
          </button>
        </div>
      </div>

      <div className="xl:w-1/4 bg-background/20 rounded-lg p-6">
        <h3 className="text-xl font-bold text-secondary mb-4">{heading}</h3>
        <p className="text-text-secondary leading-relaxed">{blog}</p>
      </div>
    </div>
  );
};

export default ImageViewer;
