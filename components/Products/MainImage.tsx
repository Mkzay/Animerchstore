import Image from "next/image";

export default function MainImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden border bg-gray-50">
      <Image src={src} alt={alt} fill loading="lazy" />
    </div>
  );
}
