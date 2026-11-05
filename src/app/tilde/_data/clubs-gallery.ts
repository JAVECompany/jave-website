import { storyPhotos } from "./stories";

export const clubsGalleryPhotos = {
    activity: {
        photo: storyPhotos.clubActivity,
        aspectRatio: 16 / 9,
        className: "bg-[#d5ded4]",
        revealDelay: 180,
        desktopRotation: "-.6deg",
        desktop: { x: 364, y: 438, width: 350 },
        narrow: { x: 0, y: 60, width: 470 },
    },
    detail: {
        photo: storyPhotos.clubDetail,
        aspectRatio: 3 / 4,
        className: "bg-[#e4e6de]",
        revealDelay: 80,
        desktopRotation: "-1.1deg",
        desktop: { x: 144, y: 68, width: 218 },
        narrow: { x: 0, y: 354, width: 470 },
    },
    reading: {
        photo: storyPhotos.clubReading,
        aspectRatio: 1122 / 1402,
        className: "bg-[#dfd5c7]",
        revealDelay: 0,
        desktopRotation: ".4deg",
        desktop: { x: 380, y: 0, width: 334 },
        narrow: { x: 522, y: 0, width: 454 },
    },
    making: {
        photo: storyPhotos.clubMaking,
        aspectRatio: 16 / 9,
        className: "bg-[#d2d6cc]",
        revealDelay: 120,
        desktopRotation: "-.7deg",
        desktop: { x: 100, y: 382, width: 236 },
    },
    outdoor: {
        photo: storyPhotos.clubOutdoor,
        aspectRatio: 16 / 9,
        className: "bg-[#c6d0c2]",
        revealDelay: 200,
        desktopRotation: ".5deg",
        narrow: { x: 522, y: 597, width: 454 },
    },
};

const frames = Object.values(clubsGalleryPhotos);
const desktopFrames = frames.filter((frame) => "desktop" in frame);
const narrowFrames = frames.filter((frame) => "narrow" in frame);
const narrowLayout = {
    canvas: {
        width: 1000,
        height: Math.max(
            ...narrowFrames.map(({ narrow, aspectRatio }) => narrow.y + narrow.width / aspectRatio),
        ),
    },
    frames: new Map(
        narrowFrames.map(({ photo, narrow, aspectRatio }) => [
            photo.slotNumber,
            { ...narrow, height: narrow.width / aspectRatio },
        ]),
    ),
};

export const clubsGalleryLayouts = {
    desktop: {
        canvas: {
            width: 714,
            height: Math.max(
                ...desktopFrames.map(
                    ({ desktop, aspectRatio }) => desktop.y + desktop.width / aspectRatio,
                ),
            ),
        },
        frames: new Map(
            desktopFrames.map(({ photo, desktop, aspectRatio }) => [
                photo.slotNumber,
                { ...desktop, height: desktop.width / aspectRatio },
            ]),
        ),
    },
    phone: narrowLayout,
    compact: narrowLayout,
    tablet: narrowLayout,
};
