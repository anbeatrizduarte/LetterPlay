import React from "react";
import { HeaderUI, TypographyUI, CardUI } from '../Scripts/ui';

export function LibraryGames() {
    return (
        <div className="w-full">
            <HeaderUI />

            <div id="menuGenero" className="mt-12 ml-64 m-24">

                <button className="border-2 border-white px-6 py-2 rounded-xl mx-2 cursor-pointer">Acao</button>
                <button className="border-2 border-white px-6 py-2 rounded-xl mx-2 cursor-pointer">Acao</button>
                <button className="border-2 border-white px-6 py-2 rounded-xl mx-2 cursor-pointer">Acao</button>

            </div>

            <div className="h-auto w-128">
                <div id="cardJogos" className="ml-28 grid grid-cols-4 gap-16">
                    <CardUI />
                    <CardUI />
                    <CardUI />
                    <CardUI />
                    <CardUI />
                </div>
            </div>

        </div>
    )
}