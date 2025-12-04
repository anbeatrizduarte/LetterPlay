import React from "react";
import Typography from './TypographyUI';

function CardUI({ infosGame, className = "" }) {
    if (!infosGame) return null;

    return (
        <div className={`h-100 w-72 ${className}`}>
            <div id="capaJogo" className="bg-cover h-[420px] rounded-xl" style={{ backgroundImage: `url(${infosGame.cover_url || ""})` }}></div>

            <div id="tituloJogo" className="pt-2">
                <Typography as="span" variant="default">{infosGame.name || "Sem nome"}</Typography>
            </div>

            <div className="flex gap-12">
                <div id="generosJogo" className="pt-6">
                    <Typography as="span" variant="muted">{infosGame.genres && infosGame.genres.length > 0 ? infosGame.genres.join(", ") : "Sem gênero"}</Typography>
                </div>

                <div id="avaliacaoJogo" className="bg-primary h-8 w-20 rounded-lg mt-6 flex relative -right-12">
                    <img src="../src/assets/Star.png" alt="" className="h-5 m-1 pl-1 mt-1.5" />
                    <Typography as="span" variant="default" className="text-md text-[#C8AEFF]  ">{infosGame.rating || "- "}</Typography>
                </div>

            </div>
        </div>
    )
}

export default CardUI;