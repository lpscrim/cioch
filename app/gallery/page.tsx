"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageViewer from "@/components/gallery/ImageViewer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}
interface GalleryImage {
  _id: string;
  title: string;
  heading: string;
  description: string;
  image: SanityImage;
  alt: string;
  order: number;
  featured: boolean;
}

const galleryQuery = `
  *[_type == "gallery"] | order(order asc) {
    _id,
    title,
    heading,
    description,
    image,
    alt,
    order,
    featured
  }
`;

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const galleryImages = await client.fetch(galleryQuery);
        setImages(galleryImages);
        if (galleryImages.length > 0) {
          setSelectedImage(galleryImages[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleOnClicked = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  if (loading) {
    return (
      <div className="min-h-[100vh] flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-secondary"></div>
        <p className="mt-4 text-secondary">Loading gallery...</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="min-h-[100vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-secondary sm:text-4xl text-center mt-6 mb-6">
          Gallery
        </h2>
        <p className="text-text-secondary">No images found in gallery.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh] flex flex-col">
      <h2 className="text-3xl font-bold text-secondary sm:text-4xl text-center mt-6 mb-8">
        Gallery
      </h2>
      {selectedImage && (
        <ImageViewer
          selectedImage={urlFor(selectedImage.image).width(1600).height(900).url()}
          onNext={handleNextImage}
          onPrev={handlePreviousImage}
          heading={selectedImage.heading}
          blog={selectedImage.description}
        />
      )}
      
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
    </div>
  );
}
