import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

interface ImageViewerProps {
  selectedImage: StaticImageData;
  onNext: () => void;
  onPrev: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  selectedImage,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="relative flex items-center ">
        <Image
          src={selectedImage}
          alt={'Image of Isle of Skye'}
          className="py-2 rounded-md"
        />

        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 text-text py-14 px-4 md:py-28 md:px-5 text-3xl md:text-5xl z-100"
          onClick={onPrev}
        >
          <ArrowLeftIcon className="w-10 h-10 text-text hover:text-secondary transition-colors cursor-pointer"  />
          
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 text-text py-14 px-4 md:py-28 md:px-5 text-3xl md:text-5xl"
          onClick={onNext}
        >
          <ArrowRightIcon className="w-10 h-10 text-text hover:text-secondary transition-colors cursor-pointer"  />
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;