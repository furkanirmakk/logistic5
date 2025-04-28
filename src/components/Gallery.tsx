import { useState } from "react";

const photos = [
  // Buraya fotoğraf yollarını yaz (örneğin public klasöründe `/images/photo1.jpg` gibi)
  "/assets/warehouse/depo-1.webp",
  "/assets/warehouse/depo-2.webp",
  "/assets/warehouse/depo-3.webp",
  "/assets/warehouse/depo-4.webp",
  "/assets/warehouse/depo-5.webp",
  "/assets/warehouse/depo-6.webp",
  "/assets/warehouse/depo-7.webp",
  "/assets/warehouse/depo-8.webp",
  "/assets/warehouse/depo-9.webp",
  "/assets/warehouse/depo-10.webp",
  "/assets/warehouse/depo-11.webp",
  "/assets/warehouse/depo-12.webp",
  "/assets/warehouse/depo-13.webp",
  "/assets/warehouse/depo-14.webp",
  "/assets/warehouse/depo-15.webp",
  "/assets/warehouse/depo-16.webp",
  "/assets/warehouse/depo-17.webp",
  "/assets/warehouse/depo-18.webp",
  "/assets/warehouse/depo-19.webp",
  "/assets/warehouse/depo-20.webp",
  "/assets/warehouse/depo-21.webp",
  "/assets/warehouse/depo-22.webp",
  "/assets/warehouse/depo-23.webp",
  "/assets/warehouse/depo-24.webp",
  "/assets/warehouse/depo-25.webp",
  "/assets/warehouse/depo-26.webp",
  "/assets/warehouse/depo-27.webp",
  "/assets/warehouse/depo-28.webp",
  "/assets/warehouse/depo-29.webp",
  "/assets/warehouse/depo-30.webp",
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="p-4 bg-gray-100">
      {/* Fotoğraf galerisi */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] mx-auto aspect-square overflow-hidden border-2 border-gray-800 rounded-md shadow-l cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedPhoto}
              alt="Selected"
              className="max-w-full max-h-screen rounded-md"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-md hover:bg-gray-300"
              onClick={() => setSelectedPhoto(null)}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
