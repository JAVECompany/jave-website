import { storyPhotos } from "./stories";

export const todayGalleryGroups = [
    {
        className: "contents lg:col-span-3 lg:col-start-4 lg:row-start-1 lg:block lg:min-w-0",
        frames: [
            {
                photo: storyPhotos.todayDetail,
                aspectRatio: 16 / 9,
                className: "rounded-[10px]! bg-[#d7cabb] sm:rounded-[14px]!",
                desktopClassName: "lg:w-full",
                desktopSize: "17vw",
                revealDelay: 0,
            },
        ],
    },
    {
        className:
            "contents lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:grid lg:min-w-0 lg:gap-4",
        frames: [
            {
                photo: storyPhotos.todayWalk,
                aspectRatio: 16 / 9,
                className: "bg-[#d8dfd2]",
                desktopClassName: "lg:w-full",
                desktopSize: "23vw",
                revealDelay: 80,
            },
            {
                photo: storyPhotos.todayCoffee,
                aspectRatio: 16 / 9,
                className: "bg-[#e4dace]",
                desktopClassName: "lg:w-[82%] lg:justify-self-end",
                desktopSize: "19vw",
                revealDelay: 140,
            },
        ],
    },
    {
        className: "contents lg:col-span-4 lg:col-start-5 lg:row-start-2 lg:block lg:min-w-0",
        frames: [
            {
                photo: storyPhotos.todayGroup,
                aspectRatio: 3 / 4,
                className: "bg-[#e2d9cb]",
                desktopClassName: "lg:w-full",
                desktopSize: "23vw",
                revealDelay: 40,
            },
        ],
    },
    {
        className:
            "contents lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:mt-[12%] lg:grid lg:min-w-0 lg:gap-4",
        frames: [
            {
                photo: storyPhotos.todaySunset,
                aspectRatio: 16 / 9,
                className: "bg-[#d5d6c9]",
                desktopClassName: "lg:w-[94%]",
                desktopSize: "22vw",
                revealDelay: 120,
            },
            {
                photo: storyPhotos.todayLaugh,
                aspectRatio: 3 / 4,
                className: "bg-[#e2ded2]",
                desktopClassName: "lg:w-[64%]",
                desktopSize: "15vw",
                revealDelay: 200,
            },
        ],
    },
];

export const todayGalleryFrames = todayGalleryGroups.flatMap(({ frames }) => frames);

export const todayGallerySelections = {
    phone: [
        { slots: [17, 15], offset: 0 },
        { slots: [19], offset: 100 },
    ],
    compact: [
        { slots: [17, 15], offset: 0 },
        { slots: [18, 19], offset: 120 },
    ],
    tablet: [
        { slots: [17, 15], offset: 0 },
        { slots: [18, 19, 16], offset: 120 },
    ],
};
