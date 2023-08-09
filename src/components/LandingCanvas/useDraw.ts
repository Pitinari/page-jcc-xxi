import { useCallback } from "react";

export const useDraw = (): {
    drawTape: (context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => void;
} => {
    const drawTape = useCallback((context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
        const boxWidth = canvasWidth / 8;
        const boxHeight = boxWidth;
        const boxInnerWidth = boxWidth * 18 / 20;
        const boxInnerHeight = boxHeight * 18 / 20;
        context.fillStyle = "#fff";
        context.fillRect(0, canvasHeight / 2 - boxHeight / 2, canvasWidth, boxHeight)
        context.save();

        context.fillStyle = "#000";
        for (let i = 0; i <= 8; i++) {
            context.roundRect(
                i * boxWidth - boxInnerWidth / 2,
                canvasHeight / 2 - boxInnerHeight / 2,
                boxInnerWidth,
                boxInnerHeight,
                5
            );
            context.fill();
            context.save();
        }
        return;
    }, [])

    return { drawTape }
}