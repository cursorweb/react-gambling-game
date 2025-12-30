import { Link } from "react-router";
import { ChipManager } from "../components/ChipManager";
import { useChips } from "../state/chips";
import { useEffect, useRef } from "react";

export function Plinko() {
    const chipsManager = useChips();
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
    });

    return (<>
        <h1>Plinko</h1>
        <canvas ref={canvasRef} width={100} height={100}></canvas>
        <ChipManager {...chipsManager} />
        <Link to="/">Back</Link>
    </>);
}