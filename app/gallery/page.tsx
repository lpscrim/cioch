import { client } from "@/sanity/lib/client";
import GalleryClient from "@/components/gallery/GalleryClient";
import type { GalleryImage } from "@/components/gallery/GalleryClient";

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

export default async function GalleryPage() {
  const images: GalleryImage[] = await client.fetch(galleryQuery);

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
      <GalleryClient images={images} />
    </div>
  );
}
