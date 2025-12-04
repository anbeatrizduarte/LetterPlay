import React, { useState } from "react";
import { CardUI, TypographyUI } from "../ui";
import { gamesData } from "../api/igdbfake";
import { Link } from "react-router-dom";


function FilterByGenre() {
    const [selectedGenre, setSelectedGenre] = useState("Todos");

    const genres = ["Todos", "Acao", "Aventura", "RPG", "Terror"];

    const filteredGames =
        selectedGenre === "Todos" ? gamesData : gamesData.filter((game) => Array.isArray(game.genres) && game.genres.includes(selectedGenre));

    return (
        <div className="w-full min-h-[150vh]">

            <div className="flex gap-4 mb-24 mt-12 ml-64">
                {genres.map((genres) => (
                    <button key={genres} className={`px-6 py-2 rounded-xl border-2 ${selectedGenre === genres ? "bg-primary border-primary text-white" : " border-white text-white"} hover:bg-primary hover:border-primary hover:text-white`}
                        onClick={() => setSelectedGenre(genres)}>{genres}</button>
                ))}
            </div>

            {filteredGames.length > 0 ? (
                <div className="ml-32 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 justify-around"> {filteredGames.map((game) => (
                    <Link
                        key={game.id}
                        to="/aboutGame"
                        state={{ infosGame: game }}
                    >
                        <CardUI infosGame={game} />
                    </Link>

                ))}
                </div>
            ) : (
                <TypographyUI as="span" variant="muted" className="mt-64 ml-64">
                    Nenhum jogo encontrado para o gênero "{selectedGenre}".
                </TypographyUI>
            )}
        </div>
    )
}

export default FilterByGenre;
