import { createGallerySelection } from "../_lib/create-gallery-selection";
import { storyPhotos } from "./stories";

export const clubsGalleryPhotos = {
    activity: {
        photo: storyPhotos.clubActivity,
        aspectRatio: 16 / 9,
        className: "bg-[#d5ded4]",
        revealDelay: 80,
    },
    detail: {
        photo: storyPhotos.clubDetail,
        aspectRatio: 3 / 4,
        className: "bg-[#e4e6de]",
        revealDelay: 80,
    },
    reading: {
        photo: storyPhotos.clubReading,
        aspectRatio: 3 / 4,
        className: "bg-[#dfd5c7]",
        revealDelay: 160,
    },
    making: {
        photo: storyPhotos.clubMaking,
        aspectRatio: 16 / 9,
        className: "bg-[#d2d6cc]",
        revealDelay: 120,
    },
    outdoor: {
        photo: storyPhotos.clubOutdoor,
        aspectRatio: 3 / 4,
        className: "bg-[#c6d0c2]",
        revealDelay: 200,
    },
};

const frames = Object.values(clubsGalleryPhotos);

export const clubsGalleryLayouts = {
    phone: createGallerySelection(
        frames,
        [
            { slots: [21, 20], offset: 0 },
            { slots: [24], offset: 80 },
        ],
        26,
    ),
    compact: createGallerySelection(
        frames,
        [
            { slots: [21, 20], offset: 0 },
            { slots: [23, 24], offset: 80 },
        ],
        26,
    ),
    tablet: createGallerySelection(
        frames,
        [
            { slots: [21, 20], offset: 0 },
            { slots: [23, 24], offset: 80 },
        ],
        26,
    ),
};
