"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ImageViewer from "@/components/gallery/ImageViewer";

import img7Path from "@/public/pic.jpg"
import img8Path from "@/public/picb.jpg"
import img9Path from "@/public/picc.jpg"
import img10Path from "@/public/picd.jpg"


export default function IndexPage(){
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(img7Path);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

const images: { src: StaticImageData; alt: string }[] = [

    { src: img7Path, alt: "Image 7" },
    { src: img8Path, alt: "Image 8" },
    { src: img9Path, alt: "Image 9" },
    { src: img10Path, alt: "Image 10" },
  ];

  const handleOnClicked = (src: StaticImageData, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex].src);
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex].src);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="min-h-screen flex flex-col ">
         <h2 className="text-3xl font-bold text-secondary sm:text-4xl text-center mt-6 mb-6">
         Gallery
         </h2>
      {selectedImage && (
        <ImageViewer
          selectedImage={selectedImage}
          onNext={handleNextImage}
          onPrev={handlePreviousImage}
        />
      )}
      <div className="flex flex-row flex-wrap gap-3 justify-center px-2 md:px-0">
        {images.map((image, index) => (
          <Image
            key={index}
            {...image}
            alt="Scenic images of Skye"
            className="border-1 border-solid border-secondary  w-40 cursor-pointer hover:border-accent transition-colors rounded-md"
            onClick={() => handleOnClicked(image.src, index)}
          />
        ))}
      </div>
    </div>
  );
};