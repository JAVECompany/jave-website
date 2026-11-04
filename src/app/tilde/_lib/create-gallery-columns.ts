type GalleryColumn = {
    count: number;
    offset: number;
};

export function createGalleryColumns(
    frames: readonly { aspectRatio: number }[],
    columns: readonly GalleryColumn[],
    gap: number,
) {
    if (columns.reduce((total, column) => total + column.count, 0) !== frames.length) {
        throw new Error("Gallery column counts must include every frame.");
    }

    const canvasWidth = 1000;
    const columnWidth = (canvasWidth - gap * (columns.length - 1)) / columns.length;
    let frameIndex = 0;
    let canvasHeight = 0;

    const positions = columns.flatMap(({ count, offset }, columnIndex) => {
        let top = offset;

        return Array.from({ length: count }, () => {
            const height = columnWidth / frames[frameIndex].aspectRatio;
            const position = {
                x: columnIndex * (columnWidth + gap),
                y: top,
                width: columnWidth,
                height,
            };

            frameIndex += 1;
            top += height + gap;
            canvasHeight = Math.max(canvasHeight, top - gap);

            return position;
        });
    });

    return {
        canvas: { width: canvasWidth, height: canvasHeight },
        frames: positions,
    };
}
