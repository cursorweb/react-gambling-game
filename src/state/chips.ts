import { useContext, useState } from "react";
import { ProfileManagerContext } from "./profileContext";

export interface ChipsManager {
    placeChips(amt: number): void;
    awardChips(amt: number): void;
    chips: number;
    balance: number;
}

export function useChips(): ChipsManager {
    const { profile: { balance }, changeBalance } = useContext(ProfileManagerContext);
    const [chips, setChips] = useState(0);

    function placeChips(amt: number) {
        setChips(c => c + amt);
        changeBalance(-amt);
    }

    function awardChips(amt: number) {
        setChips(c => c + amt);
    }

    return {
        balance, chips, placeChips, awardChips
    };
}