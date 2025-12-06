import React, { useState } from "react";
import { CardUI, TypographyUI, Popup } from "../ui";
import { Link } from "react-router-dom";
import bttAdd from "/src/assets/bttAdicionar.png";

function ShowLists() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [listName, setListName] = useState("");
    const [listDescription, setListDescription] = useState("");
    const [lists, setLists] = useState([]);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const saveList = () => {
        if (!listName.trim()) return;

        const newList = {
            name: listName,
            description: listDescription,
            games: []
        };

        setLists([...lists, newList]);

        setListName("");
        setListDescription("");

        closePopup();
    };

    return (
        <div>

            <div id="sectionCards" className="flex flex-wrap gap-16 p-10 m-24">

                <div
                    onClick={openPopup}
                    className="h-96 w-72 bg-black/60 rounded-xl hover:bg-primary/50 cursor-pointer flex flex-col items-center justify-center text-center gap-4"
                >
                    <TypographyUI as="span" variant="default">Criar nova lista</TypographyUI>
                    <img src={bttAdd} alt="" className="h-12 opacity-70" />
                </div>

                {lists.map((list, index) => (
                    <Link
                        to="/aboutlist"
                        state={list}
                        key={index}
                        className="h-96 w-72 bg-black/40 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/40"
                    >
                        <TypographyUI as="span" variant="default" className="text-2xl">
                            {list.name}
                        </TypographyUI>
                    </Link>
                ))}

            </div>


            <Popup
                isOpen={isPopupOpen}
                onPopUpClick={closePopup}
                className="bg-background h-1/2 w-auto"
            >

                <button
                    onClick={closePopup}
                    className="absolute top-3 right-3 rounded-lg text-white p-2 hover:bg-black/60"
                >
                    ✕
                </button>

                <div className="grid gap-12 w-full max-w-xl text-left mt-12">

                    <div className="grid">
                        <label className="mb-4 font-medium text-text-secondary">Nome da lista:</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg px-3 py-2 w-64 text-black"
                            placeholder="Enter the list name"
                            value={listName}
                            onChange={(e) => setListName(e.target.value)}
                        />
                    </div>

                    <div className="grid">
                        <label className="mb-4 font-medium text-text-secondary">Descricao:</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg px-3 py-2 w-64 text-black"
                            placeholder="Enter the description"
                            value={listDescription}
                            onChange={(e) => setListDescription(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={saveList}
                        className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/50"
                    >
                        Salvar
                    </button>

                </div>

            </Popup>

        </div>
    );
}

export default ShowLists;
