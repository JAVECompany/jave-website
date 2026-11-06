import Image from "next/image";
import type { StoryPhotoAsset } from "../../_data/stories";

type StoryPhotoProps = {
    photo: StoryPhotoAsset;
    className: string;
    sizes: string;
    framed?: boolean;
};

export default function StoryPhoto({ photo, className, sizes, framed = false }: StoryPhotoProps) {
    return (
        <div
            data-photo-slot={photo.slotNumber}
            data-image-protected={photo.src ? "" : undefined}
            className={`relative w-full overflow-hidden ${framed ? "rounded-[12px] sm:rounded-[20px]" : "rounded-sm"} ${framed && !photo.src ? "border-[3px] border-[#fffdf8] shadow-[0_3px_16px_#34402b0d] ring-1 ring-[#59644d]/10 sm:border-[4px]" : ""} ${className}`}
        >
            {photo.src ? (
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    draggable={false}
                    fill
                    sizes={sizes}
                    className="object-cover"
                    style={{ objectPosition: photo.objectPosition }}
                />
            ) : (
                <span aria-hidden="true" className="absolute inset-0" />
            )}
            {!photo.src && (
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[clamp(1.125rem,2.4vw,2.25rem)] font-medium text-[#53614f] tabular-nums">
                    <span className="sr-only">사진 </span>
                    {photo.slotNumber}
                </span>
            )}
        </div>
    );
}
