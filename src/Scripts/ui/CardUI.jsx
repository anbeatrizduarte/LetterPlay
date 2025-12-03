import React from "react";
import Typography from './TypographyUI';

function CardUI() {
    return (
        <div className="h-[470px] w-80">
            <div id="capaJogo" className="bg-[url('../src/assets/ImagemJogo.png')] bg-cover h-[380px] rounded-xl">
            </div>
            <div id="tituloJogo" className="pt-2">
                <Typography as="span" variant="default">Haunting Ground</Typography>
            </div>
            <div className="flex gap-12">
                <div id="generosJogo" className="pt-6">
                    <Typography as="span" variant="muted">Suspense, Terror</Typography>
                </div>
                <div id="avaliacaoJogo" className="bg-primary h-8 w-20 rounded-lg mt-6 flex relative -right-7">
                    <img src="../src/assets/Star.png" alt="" className="h-5 m-1 pl-1 mt-1.5" />
                    <Typography as="span" variant="default" className="text-2xl text-secondary m-0.5 ">9.8</Typography>

                </div>
            </div>
        </div>
    )
}

export default CardUI;