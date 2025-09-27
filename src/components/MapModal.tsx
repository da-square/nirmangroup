"use client";
import { useState } from "react";
import Image from "next/image";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  const [zoom, setZoom] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-6">
      <div className="relative bg-white rounded-xl shadow-xl lg:w-[60%] md:w-[60%] h-[90%] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-800 text-white p-1 w-10 rounded-2xl hover:bg-gray-600 z-10"
        >
          ✕
        </button>

        {/* Zoomable & Draggable Map */}
        <div className="flex-1 overflow-hidden">
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={5}
            centerOnInit={true}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Zoom Controls */}
                <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                  <button
                    onClick={() => zoomIn()}
                    className="px-3 py-2 bg-yellow-400 rounded-lg font-bold text-black hover:bg-yellow-500 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => zoomOut()}
                    className="px-3 py-2 bg-yellow-400 rounded-lg font-bold text-black hover:bg-yellow-500 transition"
                  >
                    −
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className="px-3 py-2 bg-gray-300 rounded-lg font-bold text-black hover:bg-gray-400 transition"
                  >
                    Reset
                  </button>
                </div>

                {/* Map Image */}
                <TransformComponent>
                  <Image
                    src="/images/map/city-map.jpg"
                    alt="City Map"
                    width={2000}
                    height={1500}
                    className="object-contain max-h-[80vh] mx-auto"
                    priority
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}
