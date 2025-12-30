import { type ChipsManager } from "../state/chips";
import React, { useEffect } from "react";

const amounts = [1, 5, 10, 20, 50];

export function ChipManager({ chips, placeChips, balance }: ChipsManager) {
    useEffect(() => {
        return () => {
            // return all the chips when the user leaves
            placeChips(-chips);
        };
    }, []);

    return (
        <>
            <div>Balance: {balance}</div>
            <div>Chips: {chips}</div>
            {amounts.map((amt, i) => (<React.Fragment key={i}>
                <button onClick={() => placeChips(amt)} disabled={balance < amt}>+ {amt}</button>
                <button onClick={() => placeChips(-amt)} disabled={chips < amt}>- {amt}</button>
            </React.Fragment>
            ))}
            <button onClick={() => placeChips(balance)}>+ All in</button>
            <button onClick={() => placeChips(-chips)}>Cash out</button>
        </>
    );
}