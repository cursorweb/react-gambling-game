import { useContext } from "react";
import { ProfileManagerContext } from "../state/profileContext";
import { useChips } from "../state/chips";

export default function Roulette() {
    const { profile } = useContext(ProfileManagerContext);
    const { chips, placeChips, distChips } = useChips();

    return (
        <>
            <h1>Game Roulette</h1>

            <p>Balance: {profile.balance}</p>
            <p>Chips: {chips}</p>

            <button onClick={() => placeChips(10)}>Place a chip</button>
            <button onClick={() => placeChips(-10)}>Unplace a chip</button>

            <button onClick={() => Math.random() < 0.5 ? distChips(chips) : distChips(-chips)}>Bet</button>


            <button>Spin the Wheel</button>
        </>
    );
}