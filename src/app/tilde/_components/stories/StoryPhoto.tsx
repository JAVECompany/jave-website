import Image from "next/image";
import type { StoryPhotoAsset } from "../../_data/stories";

type StoryPhotoProps = {
    photo: StoryPhotoAsset;
    className: string;
    sizes: string;
};

export default function StoryPhoto({ photo, className, sizes }: StoryPhotoProps) {
    return (
        <div className={`relative w-full overflow-hidden rounded-sm ${className}`}>
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
