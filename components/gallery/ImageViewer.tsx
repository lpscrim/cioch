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

  const handleImageClick = () => {
    window.open(selectedImage, "_blank");
  }
  return (
    <div className="flex flex-col xl:flex-row gap-6 mb-8 px-4">
      <div className="xl:w-3/4 relative">
        <button
          className="relative aspect-4/3 cursor-pointer w-full"
          onClick={handleImageClick}
          aria-label="Open full size image"
        >
          <Image
            src={selectedImage}
            alt={heading}
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </button>
        <div className="flex justify-between mt-4 xl:hidden">
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

      <div className="xl:w-1/4 bg-background/20 rounded-lg p-6 flex flex-col">
        <h3 className="text-xl font-bold text-secondary mb-4">{heading}</h3>
        <p className="text-text-secondary leading-relaxed flex-1">{blog}</p>
        <div className=" justify-between mt-auto pt-4 hidden xl:flex">
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
    </div>
  );
};

export default ImageViewer;
