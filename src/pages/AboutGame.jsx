import React, { useState } from "react";
import { CardUI, TypographyUI, HeaderUI, Popup } from "../Scripts/ui/index";
import { gamesData } from "../Scripts/api/igdbfake";
import { useLocation } from "react-router-dom";
import iconStar from '/src/assets/Star.png';
import iconFavorite from '../assets/iconFavorite.svg';

export function AboutGame() {

    const { state } = useLocation();
    const infosGame = state?.infosGame;

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const abrirPopup = (img) => {
        setSelectedImage(img);
        setIsPopUpOpen(true);
    };

    const fecharPopup = () => {
        setIsPopUpOpen(false);
        setSelectedImage(null);
    };

    const [isFavorite, setIsFavorite] = useState(false);


    if (!infosGame) {
        return (
            <div className="text-white text-2xl p-12">
                Jogo não encontrado. Volte para a página inicial.
            </div>
        );
    }

    return (
        <div className="w-auto h-auto relative">
            <HeaderUI />

            <div className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center z-0 bg-black"
                style={{ backgroundImage: `url(${infosGame.cover_gif})` }}
            ></div>

            <div className="flex justify-around gap-36">
                <div className="grid gap-2 relative z-10  h-auto w-96 mt-28 rounded-xl">

                    <div id="coverGame" className="bg-cover h-[450px] rounded-lg" style={{ backgroundImage: `url(${infosGame.cover_url})` }}></div>

                    <div id="picturesGame" className="flex justify-around gap-3 mt-4">
                        {infosGame.screenshots?.slice(0, 4).map((shot, i) => (
                            <img key={i} src={shot} alt={`screenshot ${i}`} className="w-16 h-12 rounded-sm object-cover cursor-pointer" onClick={() => abrirPopup(shot)} />
                        ))}
                    </div>

                    <div id="infosAdc" className="h-44 w-64 grid gap-0 mt-6">
                        <div className="flex">
                            <TypographyUI as="span" variant="default" className="text-xl">Lançamento: </TypographyUI>
                        </div>

                        <div className="flex">
                            <TypographyUI as="span" variant="default" className="text-xl">Disponível em: </TypographyUI>
                        </div>

                        <div className="flex">
                            <TypographyUI as="span" variant="default" className="text-xl">Desenvolvido por: </TypographyUI>
                        </div>

                        <div className="flex">
                            <TypographyUI as="span" variant="default" className="text-xl">Publicado por: </TypographyUI>
                        </div>

                    </div>
                </div>

                <div className="grid h-auto w-auto mt-64 relative z-10">
                    <div className="grid">
                        <div className="w-[500px]">
                            <TypographyUI as="span" variant="titulo" className="text-5xl">{infosGame.name}</TypographyUI>
                        </div>

                        <TypographyUI as="span" variant="muted" className="-mt-8 !text-2xl">{infosGame.genres && infosGame.genres.length > 0 ? infosGame.genres.join(", ") : "Sem gênero"}</TypographyUI>
                    </div>

                    <div className="w-[500px]">
                        <TypographyUI as="span" variant="default" className="text-lg">{infosGame.summary}</TypographyUI>
                    </div>

                    <div className=" h-32 w-64 left-80 relative">
                        <div className="flex">
                            <div id="avaliacaoJogo" className="bg-primary h-8 w-20 rounded-lg mt-6 flex relative -right-12 cursor-pointer">
                                <img src={iconStar} alt="" className="h-5 m-1 pl-1 mt-1.5" />
                                <TypographyUI as="span" variant="default" className="text-md !text-secondary ml-1 ">{infosGame.rating || "- "}</TypographyUI>
                            </div>

                            <div id="divIconFavorite" className="relative left-16 cursor-pointer mt-6">
                                <button
                                >
                                    <svg
                                        onClick={() => setIsFavorite(!isFavorite)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="h-8 w-8 cursor-pointer"
                                    >
                                        <path
                                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                            fill={isFavorite ? "currentColor" : "none"}
                                            stroke="white"
                                            strokeWidth="2"
                                            className={isFavorite ? "text-primary stroke-primary" : "text-white "}
                                        />
                                    </svg>


                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>





            <Popup
                isOpen={isPopUpOpen}
                onPopUpClick={fecharPopup}
                className="fixed inset-0 z-[9999] flex items-center justify-center"
            >
                <div className="relative h-auto w-auto rounded-xl shadow-2xl">

                    <button
                        onClick={fecharPopup}
                        className="absolute top-3 right-3 bg-primary rounded-lg text-white p-2 hover:bg-black/60"
                    >
                        ✕
                    </button>

                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Imagem ampliada"
                            className="h-[60vh] w-auto rounded-lg object-contain"
                        />
                    )}
                </div>
            </Popup>



        </div >


    );
}
