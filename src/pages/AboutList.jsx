import { useLocation } from "react-router-dom";
import { useState } from "react";
import { HeaderUI, TypographyUI, Popup } from "../Scripts/ui";
import { gamesData } from "../Scripts/api/igdbfake";
import CardUI from "../Scripts/ui/CardUI";

export default function AboutList() {

    const { state } = useLocation();
    const [listInfo, setListInfo] = useState({
        ...state,
        games: state.games || []
    });

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const addGameToList = (game) => {
        const formattedGame = {
            id: game.id,
            name: game.name,
            genres: game.genres,
            rating: game.rating,
            cover_url: game.cover_url  // ✅ corrigido!
        };

        setListInfo({
            ...listInfo,
            games: [...listInfo.games, formattedGame]
        });

        closePopup();
    };

    return (
        <div className="p-10">
            <HeaderUI />



            <div>
                <TypographyUI
                    as="span"
                    variant="titulo"
                    className="block ml-64 mt-24 text-4xl"
                >
                    {listInfo.name}
                </TypographyUI>
            </div>

            <div className="m-12 ml-32">
                <TypographyUI as="span" variant="muted">
                    {listInfo.description || "Nenhuma descricao adicionada"}
                </TypographyUI>
            </div>

            <div className="grid grid-cols-4 gap-10 mt-10 ml-32">

                {listInfo.games.length === 0 && (
                    <TypographyUI variant="muted">
                        Nenhum jogo adicionado.
                    </TypographyUI>
                )}

                {listInfo.games.map((game) => (
                    <CardUI key={game.id} infosGame={game} />
                ))}
            </div>

            <div className="fixed top-[95%] -translate-y-1/2 right-10 z-50">
                <button
                    onClick={openPopup}
                    className="px-5 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/60 transition-all"
                >
                    + Add Game
                </button>
            </div>




            <Popup
                isOpen={isPopupOpen}
                onPopUpClick={closePopup}
                className="bg-background p-6 w-auto min-w-[500px] max-h-[600px] overflow-y-auto"
            >
                <button
                    onClick={closePopup}
                    className="absolute top-3 right-3 text-white p-2 rounded-lg hover:bg-black/60"
                >
                    ✕
                </button>

                <TypographyUI variant="titulo" className="text-2xl mb-6">
                    Select a Game
                </TypographyUI>

                <div id="divBarraPesquisa" className="mt-12">
                    <input
                        className="rounded-full w-96 h-10 px-4 bg-gray-300 mt-2"
                        placeholder="Procure jogos"
                    />
                </div>

                <div className="grid gap-6 mt-24">
                    {gamesData.map((game) => (
                        <button
                            key={game.id}
                            onClick={() => addGameToList(game)}
                            className="bg-primary hover:bg-primary/40 p-4 rounded-lg text-center"
                        >

                            <TypographyUI as="span" variant="default" className="text-sm">{game.name}</TypographyUI>
                        </button>
                    ))}
                </div>
            </Popup>



        </div>
    );
}
