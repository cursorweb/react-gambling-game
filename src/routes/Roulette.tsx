import { useContext } from "react";
import { ProfileManagerContext } from "../state/profileContext";
import { useChips } from "../state/chips";
import { ChipManager } from "../components/ChipManager";
import { Link } from "react-router";

export default function Roulette() {
    const { profile } = useContext(ProfileManagerContext);
    const chipsManager = useChips();
    const { chips, awardChips } = chipsManager;

    return (
        <>
            <h1>Game Roulette</h1>

            <p>Balance: {profile.balance}</p>
            <p>Chips: {chips}</p>

            <ChipManager {...chipsManager} />

            <button onClick={() => Math.random() < 0.5 ? awardChips(chips) : awardChips(-chips)}>Bet</button>

            <button>Spin the Wheel</button>
            <Link to="/">Back</Link>
        </>
    );
}