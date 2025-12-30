import { Link } from "react-router";
import { ChipManager } from "../components/ChipManager";
import { useChips } from "../state/chips";

export function Plinko() {
    const chipsManager = useChips();

    return (<>
        <h1>Diddy Plinko</h1>
        <canvas></canvas>
        <ChipManager {...chipsManager} />
        <Link to="/">Back</Link>
    </>);
}