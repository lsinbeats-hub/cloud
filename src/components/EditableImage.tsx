import React, { useRef } from "react";
import { useSiteImages, SiteImages } from "../context/ImageContext.tsx";
import { Camera, RefreshCw } from "lucide-react";

interface EditableImageProps {
  imageKey: keyof SiteImages;
  alt: string;
  className?: string;
  containerClassName?: string;
  label?: string;
  loading?: "lazy" | "eager";
  style?: React.CSSProperties;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  imageKey,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "relative w-full h-full group",
  label = "Trocar",
  loading = "lazy",
  style,
}) => {
  const { images, updateImage, setIsManagerOpen, setTargetKeyForEdit } = useSiteImages();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentSrc = images[imageKey];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          updateImage(imageKey, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const openManager = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setTargetKeyForEdit(imageKey);
    setIsManagerOpen(true);
  };

  return (
    <div className={`relative ${containerClassName}`}>
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        loading={loading}
        style={style}
      />

      {/* Hidden File Input for quick local replacement */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Sleek Floating Overlay Button on Hover/Focus */}
      <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 flex items-center gap-1.5 pointer-events-auto">
        <button
          type="button"
          onClick={openManager}
          title="Alterar imagem ou escolher tema"
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/85 hover:bg-blue-600 text-white text-[11px] font-bold rounded-lg backdrop-blur-md border border-white/20 shadow-xl transition-all duration-150 hover:scale-105 active:scale-95"
          aria-label={`Alterar imagem: ${alt}`}
        >
          <Camera className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
          <span className="hidden sm:inline font-mono">{label}</span>
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          title="Fazer upload direto do seu dispositivo"
          className="p-1.5 bg-black/85 hover:bg-emerald-600 text-white rounded-lg backdrop-blur-md border border-white/20 shadow-xl transition-all duration-150 hover:scale-105 active:scale-95"
          aria-label="Upload de imagem local"
        >
          <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
        </button>
      </div>
    </div>
  );
};
