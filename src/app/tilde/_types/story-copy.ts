export type StoryTextAccent = {
    target: "eyebrow" | "title" | "description";
    text: string;
    className: string;
};

export type StoryCopyContent = {
    eyebrow: string;
    title: string;
    description: string;
    accent?: StoryTextAccent;
};
