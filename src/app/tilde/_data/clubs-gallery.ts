import { createGallerySelection } from "../_lib/create-gallery-selection";
import { prependGalleryFeature } from "../_lib/prepend-gallery-feature";
import { storyPhotos } from "./stories";

export const clubsGalleryPhotos = {
    activity: {
        photo: storyPhotos.clubActivity,
        aspectRatio: 16 / 9,
        className: "bg-[#d5ded4]",
        revealDelay: 80,
        desktopRotation: "0deg",
        desktop: { x: 394, y: 0, width: 320 },
    },
    detail: {
        photo: storyPhotos.clubDetail,
        aspectRatio: 3 / 4,
        className: "bg-[#e4e6de]",
        revealDelay: 80,
        desktopRotation: "-1.1deg",
        desktop: { x: 152, y: 52, width: 226 },
    },
    reading: {
        photo: storyPhotos.clubReading,
        aspectRatio: 3 / 4,
        className: "bg-[#dfd5c7]",
        revealDelay: 160,
        desktopRotation: ".8deg",
        desktop: { x: 398, y: 200, width: 268 },
    },
    making: {
        photo: storyPhotos.clubMaking,
        aspectRatio: 16 / 9,
        className: "bg-[#d2d6cc]",
        revealDelay: 120,
        desktopRotation: "-.7deg",
        desktop: { x: 130, y: 373, width: 252 },
    },
    outdoor: {
        photo: storyPhotos.clubOutdoor,
        aspectRatio: 16 / 9,
        className: "bg-[#c6d0c2]",
        revealDelay: 200,
        desktopRotation: ".5deg",
    },
};

const frames = Object.values(clubsGalleryPhotos);
const desktopFrames = frames.filter((frame) => "desktop" in frame);

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
    phone: prependGalleryFeature(
        createGallerySelection(
            frames,
            [
                { slots: [21], offset: 0 },
                { slots: [24], offset: 80 },
            ],
            26,
        ),
        clubsGalleryPhotos.activity,
        26,
    ),
    compact: prependGalleryFeature(
        createGallerySelection(
            frames,
            [
                { slots: [21], offset: 0 },
                { slots: [23, 24], offset: 80 },
            ],
            26,
        ),
        clubsGalleryPhotos.activity,
        26,
    ),
    tablet: createGallerySelection(
        frames,
        [
            { slots: [21, 23], offset: 0 },
            { slots: [20, 24], offset: 110 },
        ],
        22,
    ),
};
