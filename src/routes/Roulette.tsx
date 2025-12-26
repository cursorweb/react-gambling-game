import { useContext } from "react";
import { ProfileManagerContext } from "../profile/profileContext";

export default function Roulette() {
    const { profile } = useContext(ProfileManagerContext);

    return (
        <>
            <h1>Game Roulette</h1>

            <p>Balance: {profile.balance}</p>
            <button>Spin the Wheel</button>
        </>
    );
}