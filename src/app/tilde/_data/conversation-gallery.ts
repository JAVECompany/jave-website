import { storyPhotos } from "./stories";

// A full-width gallery with a free area below the right-hand frames for the story copy.
export const conversationGalleryCanvas = { width: 1354, height: 2152 / 3 };

export const conversationGalleryFrames = [
    {
        photo: storyPhotos.conversationWalk,
        x: 0,
        y: 110,
        width: 185,
        className: "aspect-[3/4] bg-[#e5dccd]",
    },
    {
        photo: storyPhotos.conversationLittleMoment,
        x: 195,
        y: 27,
        width: 170,
        className: "aspect-video bg-[#dedbcf]",
    },
    {
        photo: storyPhotos.conversation,
        x: 195,
        y: 132,
        width: 218,
        className: "aspect-video bg-[#dce3d5]",
    },
    {
        photo: storyPhotos.conversationBakery,
        x: 195,
        y: 264,
        width: 218,
        className: "aspect-[3/4] bg-[#e3dacd]",
    },
    {
        photo: storyPhotos.conversationEveryday,
        x: 423,
        y: 132,
        width: 175,
        className: "aspect-[3/4] bg-[#e6e4d8]",
    },
    {
        photo: storyPhotos.conversationFountain,
        x: 423,
        y: 375,
        width: 175,
        className: "aspect-video bg-[#d4dfdc]",
    },
    {
        photo: storyPhotos.conversationLaugh,
        x: 423,
        y: 484,
        width: 175,
        className: "aspect-[3/4] bg-[#e2d8cd]",
    },
    {
        photo: storyPhotos.conversationWindow,
        x: 0,
        y: 367,
        width: 185,
        className: "aspect-video bg-[#d4dbd3]",
    },
    {
        photo: storyPhotos.conversationCoffee,
        x: 608,
        y: 110,
        width: 242,
        className: "aspect-video bg-[#dcd7ce]",
    },
    {
        photo: storyPhotos.conversationMoment,
        x: 860,
        y: 110,
        width: 218,
        className: "aspect-video bg-[#e5dfd6]",
    },
    {
        photo: storyPhotos.conversationNewMemory,
        x: 1088,
        y: 110,
        width: 260,
        className: "aspect-video bg-[#d9dfd5]",
    },
    {
        photo: storyPhotos.conversationSmile,
        x: 608,
        y: 256,
        width: 175,
        className: "aspect-[3/4] bg-[#d6ded6]",
    },
    {
        photo: storyPhotos.conversationEvening,
        x: 793,
        y: 256,
        width: 210,
        className: "aspect-video bg-[#d9d9cf]",
    },
];
