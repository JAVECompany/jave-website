import type { createGallerySelection } from "./create-gallery-selection";

type GalleryLayout = ReturnType<typeof createGallerySelection>;
type GalleryFeature = {
    photo: { slotNumber: number };
    aspectRatio: number;
};

export function prependGalleryFeature(
    layout: GalleryLayout,
    feature: GalleryFeature,
    gap: number,
): GalleryLayout {
    const featureHeight = layout.canvas.width / feature.aspectRatio;
    const offset = featureHeight + gap;
    const frames = new Map(
        [...layout.frames].map(([slotNumber, position]) => [
            slotNumber,
            { ...position, y: position.y + offset },
        ]),
    );

    frames.set(feature.photo.slotNumber, {
        x: 0,
        y: 0,
        width: layout.canvas.width,
        height: featureHeight,
    });

    return {
        canvas: { width: layout.canvas.width, height: layout.canvas.height + offset },
        frames,
    };
}
