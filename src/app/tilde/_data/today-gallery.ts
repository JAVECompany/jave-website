import { storyPhotos } from "./stories";

// Give the shared moments the most space, with smaller portraits between them.
export const todayGalleryFrames = [
    {
        photo: storyPhotos.todayDetail,
        aspectRatio: 16 / 9,
        className: "bg-[#d7cabb]",
        desktop: { x: 492, y: 0, width: 310 },
        revealDelay: 0,
    },
    {
        photo: storyPhotos.todayWalk,
        aspectRatio: 16 / 9,
        className: "bg-[#d8dfd2]",
        desktop: { x: 0, y: 90, width: 470 },
        revealDelay: 80,
    },
    {
        photo: storyPhotos.todayCoffee,
        aspectRatio: 16 / 9,
        className: "bg-[#e4dace]",
        desktop: { x: 75, y: 378, width: 360 },
        revealDelay: 140,
    },
    {
        photo: storyPhotos.todayGroup,
        aspectRatio: 3 / 4,
        className: "bg-[#e2d9cb]",
        desktop: { x: 492, y: 198, width: 240 },
        revealDelay: 160,
    },
    {
        photo: storyPhotos.todaySunset,
        aspectRatio: 16 / 9,
        className: "bg-[#d5d6c9]",
        desktop: { x: 754, y: 198, width: 246 },
        revealDelay: 220,
    },
    {
        photo: storyPhotos.todayLaugh,
        aspectRatio: 3 / 4,
        className: "bg-[#e2ded2]",
        desktop: { x: 754, y: 360, width: 246 },
        revealDelay: 100,
    },
];

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
