"use client";

import { useEffect } from "react";

export default function ImageInteractionGuard() {
    useEffect(() => {
        function preventImageInteraction(event: Event) {
            if (event.target instanceof Element && event.target.closest("img, picture, svg")) {
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
