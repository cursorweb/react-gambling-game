import { useContext, useState } from "react";
import { ProfileManagerContext } from "./profileContext";

export function useChips() {
    const { changeBalance } = useContext(ProfileManagerContext);
    const [chips, setChips] = useState(0);

    function placeChips(amt: number) {
        setChips(chips + amt);
        changeBalance(-amt);
    }

    function claimChips(amt: number) {
        setChips(chips - amt);
        changeBalance(+amt);
    }

    function distChips(amt: number) {
        setChips(chips + amt);
    }

    return {
        chips, placeChips, claimChips, distChips
    };
}