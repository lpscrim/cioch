"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ImageViewer from "@/components/gallery/ImageViewer";
import img1Path from "@/public/carbost.jpeg";
import img2Path from "@/public/Storr.jpg";
import img3Path from "@/public/brittle.jpg";
import img4Path from "@/public/lagan.jpg";
import img5Path from "@/public/quirang1.jpg";
import img6Path from "@/public/quirang2.jpg";


export default function IndexPage(){
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(img1Path);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

const images: { src: StaticImageData; alt: string }[] = [
    { src: img1Path, alt: "Image 1" },
    { src: img2Path, alt: "Image 2" },
    { src: img3Path, alt: "Image 3" },
    { src: img4Path, alt: "Image 4" },
    { src: img5Path, alt: "Image 5" },
    { src: img6Path, alt: "Image 6" },
    { src: img1Path, alt: "Image 1" },
    { src: img2Path, alt: "Image 2" },
    { src: img3Path, alt: "Image 3" },
    { src: img4Path, alt: "Image 4" },
    { src: img5Path, alt: "Image 5" },
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
    <div className="min-h-screen flex flex-col">
      {selectedImage && (
        <ImageViewer
          selectedImage={selectedImage}
          onNext={handleNextImage}
          onPrev={handlePreviousImage}
        />
      )}
      <div className="flex flex-row flex-wrap gap-3 justify-center px-3 md:px-0">
        {images.map((image, index) => (
          <Image
            key={index}
            {...image}
            alt="Scenic images of Skye"
            className="border-4 border-solid border-blue-900  w-40 cursor-pointer hover:border-blue-500"
            onClick={() => handleOnClicked(image.src, index)}
          />
        ))}
      </div>
    </div>
  );
};