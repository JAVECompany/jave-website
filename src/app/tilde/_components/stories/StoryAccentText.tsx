import type { StoryTextAccent } from "../../_types/story-copy";

type StoryAccentTextProps = {
    text: string;
    accent?: StoryTextAccent;
};

export default function StoryAccentText({ text, accent }: StoryAccentTextProps) {
    if (!accent) return text;

    const start = text.indexOf(accent.text);
    if (start === -1) return text;

    return (
        <>
            {text.slice(0, start)}
            <span className="relative inline-block">
                <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -z-10 rounded-[50%] ${accent.className}`}
                />
                {accent.text}
            </span>
            {text.slice(start + accent.text.length)}
        </>
    );
}
