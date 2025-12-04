import React from "react";
import { HeaderUI, CardUI, TypographyUI, GameRanking, FilterByGenre } from '../Scripts/ui';
import { gamesData } from '../Scripts/api/igdbfake';

export function LibraryGames() {
    return (
        <div className="w-full min-h-[150vh]">
            <HeaderUI />

            <GameRanking />

            <div id="divBiblioteca">
                <TypographyUI as="span" variant="titulo" className="block ml-64 mt-48 text-4xl"> Biblioteca </TypographyUI>
                <FilterByGenre />
            </div>

        </div>
    )
}
