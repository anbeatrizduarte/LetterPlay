import React from "react";
import { TypographyUI, CardUI } from "../ui";
import { gamesData } from "../api/igdbfake";
import { Link } from "react-router-dom";

function Ranking() {
    const sortedGames = [...gamesData]
        .filter(game => game.rating)
        .sort((a, b) => b.rating - a.rating);

    const top3Games = sortedGames.slice(0, 3);

    return (
        <div id="divRanking" className="h-auto w-128">
            <TypographyUI as="span" variant="titulo" className="block ml-64 mt-20 text-4xl">
                Ranking Semanal
            </TypographyUI>

            <div id="cardJogosRanking" className="mx-64 pt-12 grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 justify-around">
                {top3Games.map((game, index) => (
                    <div key={game.id} className="relative flex flex-col items-center">

                        <Link
                            key={game.id}
                            to="/aboutGame"
                            state={{ infosGame: game }}
                        >
                            <CardUI infosGame={game} className="-ml-10" /> </Link>
                        <div className={`h-10 w-10 absolute right-32 z-10 rounded-md flex items-center justify-center ${index === 0
                            ? "bg-yellow-400"
                            : index === 1
                                ? "bg-gray-400"
                                : "bg-orange-500"
                            }`}>
                            <TypographyUI as="span" variant="titulo" className="text-white text-2xl">
                                {index + 1}
                            </TypographyUI>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Ranking;
