import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  title: string;
  aspectRatio?: "video" | "square" | "wide" | "tall";
  className?: string;
}

const ImagePlaceholder = ({ title, aspectRatio = "video", className = "" }: ImagePlaceholderProps) => {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    tall: "aspect-[3/4]"
  };

  return (
    <div 
      className={`relative w-full ${aspectClasses[aspectRatio]} bg-muted/50 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <div className="p-3 bg-muted rounded-full">
        <ImageIcon className="w-8 h-8 text-muted-foreground" />
      </div>
      <div className="text-center px-4">
        <p className="text-sm font-medium text-muted-foreground">Image Placeholder</p>
        <p className="text-xs text-muted-foreground/70 mt-1">{title}</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
