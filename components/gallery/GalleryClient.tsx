"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/gallery/ImageViewer";
import { urlFor } from "@/sanity/lib/image";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface GalleryImage {
  _id: string;
  title: string;
  heading: string;
  description: string;
  image: SanityImage;
  alt: string;
  order: number;
  featured: boolean;
}

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage>(images[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOnClicked = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <>
      <ImageViewer
        selectedImage={urlFor(selectedImage.image).width(1600).height(900).url()}
        onNext={handleNextImage}
        onPrev={handlePreviousImage}
        heading={selectedImage.heading}
        blog={selectedImage.description}
      />

      <div className="flex flex-row flex-wrap gap-3 justify-center px-2 md:px-0">
        {images.map((image, index) => (
          <Image
            key={image._id}
            src={urlFor(image.image).width(400).height(300).url()}
            alt={image.alt}
            width={200}
            height={150}
            className="border-1 border-solid border-secondary w-40 cursor-pointer hover:border-accent transition-colors rounded-md object-cover"
            onClick={() => handleOnClicked(image, index)}
          />
        ))}
      </div>
    </>
  );
}
