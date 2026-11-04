import { storyPhotos } from "./stories";

// The reference wall's relative positions are preserved; only its panoramic frame is split.
export const conversationGalleryCanvas = { width: 293, height: 394 / 3 };

export const conversationGalleryFrames = [
    {
        photo: storyPhotos.conversationWalk,
        x: 0,
        y: 22,
        width: 55,
        className: "aspect-[3/4] bg-[#e5dccd]",
    },
    {
        photo: storyPhotos.conversationLittleMoment,
        x: 60,
        y: 0,
        width: 38,
        className: "aspect-video bg-[#dedbcf]",
    },
    {
        photo: storyPhotos.conversation,
        x: 60,
        y: 31,
        width: 71,
        className: "aspect-video bg-[#dce3d5]",
    },
    {
        photo: storyPhotos.conversationEveryday,
        x: 137,
        y: 31,
        width: 30,
        className: "aspect-[3/4] bg-[#e6e4d8]",
    },
    {
        photo: storyPhotos.conversationCoffee,
        x: 174,
        y: 34,
        width: 56,
        className: "aspect-video bg-[#dcd7ce]",
    },
    {
        photo: storyPhotos.conversationMoment,
        x: 237,
        y: 35,
        width: 56,
        className: "aspect-video bg-[#e5dfd6]",
    },
    {
        photo: storyPhotos.conversationBakery,
        x: 60,
        y: 77,
        width: 65,
        className: "aspect-video bg-[#e3dacd]",
    },
    {
        photo: storyPhotos.conversationFountain,
        x: 132,
        y: 77,
        width: 35,
        className: "aspect-video bg-[#d4dfdc]",
    },
    {
        photo: storyPhotos.conversationLaugh,
        x: 132,
        y: 103,
        width: 35,
        className: "aspect-video bg-[#e2d8cd]",
    },
    {
        photo: storyPhotos.conversationSmile,
        x: 174,
        y: 74,
        width: 43,
        className: "aspect-[3/4] bg-[#d6ded6]",
    },
    {
        photo: storyPhotos.conversationWindow,
        x: 224,
        y: 76,
        width: 29,
        className: "aspect-[3/4] bg-[#d4dbd3]",
    },
    {
        photo: storyPhotos.conversationEvening,
        x: 260,
        y: 76,
        width: 29,
        className: "aspect-[3/4] bg-[#d9d9cf]",
    },
];
