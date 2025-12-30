import { useState } from "react";
import { Link } from "react-router";

function generateBoard(mines = 3) {
    const array: { value: boolean, revealed: boolean }[][] = [...new Array(5)].map(() =>
        [...new Array(5)].map(() =>
            ({ value: false, revealed: false })
        )
    );

    let y = Math.floor(Math.random() * 5);
    let x = Math.floor(Math.random() * 5);

    for (let i = 0; i < mines; i++) {
        while (array[y][x].value == true) {
            y = Math.floor(Math.random() * 5);
            x = Math.floor(Math.random() * 5);
        }
        array[y][x].value = true;
    }

    return array;
}

export function Mines() {
    const [board, setBoard] = useState(generateBoard());
    return (
        <>
            <h1>Mines</h1>
            {board.map((row, y) =>
                <div key={y}>
                    {row.map(({ revealed, value }, x) =>
                        <button
                            key={x}
                            onClick={() => setBoard(c => {
                                const next = [...c];
                                next[y] = [...next[y]];
                                next[y][x] = { ...next[y][x], revealed: true };
                                return next;
                            })}
                        >
                            {revealed ? (value ? 'x' : '+') : '.'}
                        </button>
                    )}
                </div>
            )}
            <button onClick={() => setBoard(generateBoard())}>Regenerate</button>
            <Link to="/">Back</Link>
        </>
    );
}