import { storyPhotos } from "./stories";

// Keep the portrait above the wide running scene and golf below the tennis photo.
export const todayGalleryFrames = [
    {
        photo: storyPhotos.todayDetail,
        aspectRatio: 16 / 9,
        className: "bg-[#d7cabb]",
        desktop: { x: 492, y: 48, width: 310 },
        revealDelay: 0,
    },
    {
        photo: storyPhotos.todayWalk,
        aspectRatio: 16 / 9,
        className: "bg-[#d8dfd2]",
        desktop: { x: 0, y: 138, width: 470 },
        revealDelay: 80,
    },
    {
        photo: storyPhotos.todayGroup,
        aspectRatio: 3 / 4,
        className: "bg-[#e2d9cb]",
        desktop: { x: 824, y: 0, width: 176 },
        revealDelay: 160,
    },
    {
        photo: storyPhotos.todaySunset,
        aspectRatio: 16 / 9,
        className: "bg-[#d5d6c9]",
        desktop: { x: 492, y: 256, width: 478 },
        revealDelay: 220,
    },
    {
        photo: storyPhotos.todayLaugh,
        aspectRatio: 3 / 4,
        className: "bg-[#e2ded2]",
        desktop: { x: 75, y: 426, width: 342 },
        revealDelay: 100,
    },
];

// Cycling sits below the copy on desktop and stays hidden in narrow layouts.
export const todayCyclingPhoto = storyPhotos.todayCoffee;

export const todayGalleryCanvas = {
    width: 1000,
    height: Math.max(
        ...todayGalleryFrames.map(
            ({ desktop, aspectRatio }) => desktop.y + desktop.width / aspectRatio,
        ),
    ),
};

export const todayGallerySelections = {
    phone: [
        { slots: [15, 17], offset: 0 },
        { slots: [19], offset: 100 },
    ],
    compact: [
        { slots: [15, 17], offset: 0 },
        { slots: [18, 19], offset: 120 },
    ],
    tablet: [
        { slots: [15, 17], offset: 0 },
        { slots: [18, 19], offset: 120 },
    ],
};
