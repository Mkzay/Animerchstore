import Image from "next/image";

export default function ThumbnailGallery({
  images,
  selectedImage,
  onSelect,
}: {
  images: string[];
  selectedImage: string;
  onSelect: (img: string) => void;
}) {
  return (
    <div className="flex gap-2 mt-4">
      {images.map((img, idx) => (
        <div
          key={idx}
          onClick={() => onSelect(img)}
          className={`w-20 h-20 relative border rounded-md overflow-hidden cursor-pointer transition ${
            selectedImage === img ? "ring-2 ring-blue-600" : ""
          }`}
        >
          <Image
            src={img}
            alt={`thumb-${idx}`}
            fill
            className="object-contain bg-white"
          />
        </div>
      ))}
    </div>
  );
}
