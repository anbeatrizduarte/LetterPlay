import React from "react";
import { CardUI } from "../ui";
import { gamesData } from "../api/igdbfake";

function GameList() {
    return (
        <div className="grid grid-cols-4 gap-6 p-4">
            {gamesData.map(game => (
                <CardUI key={game.id} infosGame={game}></CardUI>
            ))}
        </div>

    )
}