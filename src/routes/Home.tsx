import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <h1>Gambling Game</h1>
            <Link to="/roulette">Roulette</Link>
            <Link to="/plinko">Plinko</Link>
            <Link to="/mines">Mines</Link>
        </>
    );
}