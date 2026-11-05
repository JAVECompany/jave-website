import { createGalleryColumns } from "./create-gallery-columns";

type GalleryFrame = {
    photo: { slotNumber: number };
    aspectRatio: number;
};

type GallerySelectionColumn = {
    slots: readonly number[];
    offset: number;
};

export function createGallerySelection(
    frames: readonly GalleryFrame[],
    columns: readonly GallerySelectionColumn[],
    gap: number,
) {
    const selectedFrames = columns.flatMap(({ slots }) =>
        slots.map((slotNumber) => {
            const frame = frames.find((item) => item.photo.slotNumber === slotNumber);
            if (!frame) throw new Error(`Unknown gallery photo slot: ${slotNumber}`);
            return frame;
        }),
    );
    const layout = createGalleryColumns(
        selectedFrames,
        columns.map(({ slots, offset }) => ({ count: slots.length, offset })),
        gap,
    );

    return {
        canvas: layout.canvas,
        frames: new Map(
            layout.frames.map((position, index) => [
                selectedFrames[index].photo.slotNumber,
                position,
            ]),
        ),
    };
}
