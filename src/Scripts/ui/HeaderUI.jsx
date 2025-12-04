import React from "react";
import Typography from "./TypographyUI"
import { Link } from "react-router-dom";

function HeaderUI() {
    return (
        <header className=" h-28 rounded-b-xl mx-48 pt-8 flex justify-around">
            <Link to={"/"}>
                <div id="divLogo" className="flex gap-4">
                    <img src="../src/assets/logo.png" className="h-12"></img>
                    <Typography as="span" className="pt-2" variant="default">LetterPlay</Typography>
                </div>
            </Link>


            <div id="divBarraPesquisa">
                <input className="rounded-full w-96 h-10 px-4 bg-gray-300 mt-2" placeholder="Procure jogos"></input>
            </div>

            <div id="divLinkAbas" className="flex h-4 gap-12 mt-2">
                <Link to={"/jogos"} >
                    <Typography variant="default" className="text-lg">Jogos</Typography>
                </Link>
                <Link to={"/lists"}>
                    <Typography variant="default" className="text-lg">Listas</Typography>
                </Link>
                <Link to={"/noticias"}>
                    <Typography variant="default" className="text-lg">Noticias</Typography>
                </Link>
                <div id="divOptPerfil">
                    <img src="../src/assets/GenericAvatar.png" alt="" className="h-12 -mt-2 cursor-pointer" />
                </div>
            </div>



        </header>

    );
}

export default HeaderUI;
