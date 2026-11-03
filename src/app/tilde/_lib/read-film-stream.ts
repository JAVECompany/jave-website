/** The final independently decodable movie fragment is the six-second repeat. */
function endingFragment(movie: ArrayBuffer) {
    const boxes = new DataView(movie);
    let endingStart = 0;
    let fragmentCount = 0;
    let endOfMedia = movie.byteLength;
    for (let offset = 0; offset < movie.byteLength;) {
        const size = boxes.getUint32(offset);
        if (size < 8 || offset + size > movie.byteLength) throw new Error("Incomplete MP4 box");
        const type = boxes.getUint32(offset + 4);
        if (type === 0x6d6f6f66) {
            // moof
            endingStart = offset;
            fragmentCount++;
        }
        if (type === 0x6d667261) endOfMedia = offset; // mfra index
        offset += size;
    }
    if (fragmentCount < 2) throw new Error("Missing ending fragment");
    return movie.slice(endingStart, endOfMedia);
}

/** Start decoding while the film downloads. Retain only the ending after the first pass. */
export async function* readFilmStream(
    response: Response,
): AsyncGenerator<Uint8Array<ArrayBuffer>, ArrayBuffer> {
    if (!response.body) {
        const movie = await response.arrayBuffer();
        yield new Uint8Array(movie);
        return endingFragment(movie);
    }
    const reader = response.body.getReader();
    const chunks: Uint8Array<ArrayBuffer>[] = [];
    try {
        while (true) {
            const next = await reader.read();
            if (next.done) break;
            chunks.push(next.value);
            yield next.value;
        }
        return endingFragment(await new Blob(chunks).arrayBuffer());
    } finally {
        reader.releaseLock();
    }
}
