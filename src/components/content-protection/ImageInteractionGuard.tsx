"use client";

import { useEffect } from "react";

export default function ImageInteractionGuard() {
    useEffect(() => {
        function preventImageInteraction(event: Event) {
            if (!(event.target instanceof Element)) {
                return;
            }

            const imageSurface = event.target.closest("img, picture, svg, [data-image-protected]");
            const imageLink = event.target.closest("a")?.querySelector("img, picture");

            if (imageSurface || imageLink) {
                event.preventDefault();
            }
        }

        document.addEventListener("contextmenu", preventImageInteraction, true);
        document.addEventListener("dragstart", preventImageInteraction, true);

        return () => {
            document.removeEventListener("contextmenu", preventImageInteraction, true);
            document.removeEventListener("dragstart", preventImageInteraction, true);
        };
    }, []);

    return null;
}
