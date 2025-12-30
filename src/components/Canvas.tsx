import { useEffect, useRef } from "react";

export function Canvas({ draw }: { draw: (ctx: CanvasRenderingContext2D) => void }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        const size = 250;

        canvas.style.width = size + "px";
        canvas.style.height = size + "px";

        const scale = 8;
        canvas.width = size * scale;
        canvas.height = size * scale;

        ctx.scale(scale, scale);

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 50, 50);

        function drawLoop() {
            draw(ctx);
            requestAnimationFrame(drawLoop);
        }

        requestAnimationFrame(drawLoop);
    });

    return (
        <canvas ref={canvasRef} width={100} height={100} />);
}