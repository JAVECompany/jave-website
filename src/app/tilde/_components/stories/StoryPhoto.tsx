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
            className={`relative w-full overflow-hidden ${framed ? "rounded-[12px] border-[3px] border-[#fffdf8] shadow-[0_3px_16px_#34402b0d] ring-1 ring-[#59644d]/10 sm:rounded-[20px] sm:border-[4px]" : "rounded-sm"} ${className}`}
        >
            {photo.src ? (
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={sizes}
                    className="object-cover"
                />
            ) : (
                <span aria-hidden="true" className="absolute inset-0" />
            )}
        </div>
    );
}
