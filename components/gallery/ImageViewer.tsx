import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

interface ImageViewerProps {
  selectedImage: StaticImageData;
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
    <div className="flex flex-col  justify-center items-start min-h-[80vh]">
      <div className="relative flex  items-center pb-4">
        <div className="rounded-md overflow-hidden"> 
          <Image
            src={selectedImage}
            alt={'Image of Isle of Skye'}
            className=""
          />
        </div>

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
      <div className="text-text-secondary justify-center pt-4">
              <h2 className="font-semibold text-xl text-center">{heading}</h2>
              <p>{blog}</p>
        </div>
    </div>
  );
};

export default ImageViewer;