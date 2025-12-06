import { HeaderUI, TypographyUI, CardUI } from "../Scripts/ui";
import logo from '/src/assets/logo.png';
import { Link } from "react-router-dom";
import logoGoogle from '/src/assets/logoGoogle.png';
import logoSteam from '/src/assets/logoSteam.png';

export function Register() {

    return (

        <div className="w-auto h-auto">

            <div className="flex">

                <div id="sideLeft" className="bg-gradient-to-r from-[#573798] to-[#1a0c36] h-screen w-1/2 rounded-r-2xl shadow-2xl shadow-black"></div>

                <div id="sideRight" className=" w-1/2 h-full text-center mt-16">
                    <TypographyUI as="span" variant="titulo" className="text-center text-5xl">Registre-se</TypographyUI>

                    <div className="w-full flex flex-col items-center mt-24">

                        <div className="grid gap-12 w-full max-w-xl text-left">

                            <div className="grid">
                                <label className="mb-1 font-medium text-text-secondary">Nome do Perfil:</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-black"
                                    placeholder="Digite seu nome"
                                />
                            </div>

                            <div className="grid">
                                <label className="mb-1 font-medium text-text-secondary">Nome de usuario (@):</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-black"
                                    placeholder="Digite seu nome de usuario"
                                />
                            </div>

                            <div className="grid">
                                <label className="mb-1 font-medium text-text-secondary">Senha:</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-black"
                                    placeholder="Digite sua senha"
                                />
                            </div>

                            <div className="grid">
                                <label className="mb-1 font-medium text-text-secondary">Confirme sua senha:</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-black"
                                    placeholder="Confirme sua senha"
                                />
                            </div>

                        </div>

                    </div>


                    <div className="flex flex-col items-center">

                        <button className="mt-12 h-16 w-48 rounded-2xl bg-gradient-to-r from-violet-800 to-purple-900 transition delay-75 duration-300 ease-in-out shadow-shadowEffect
        hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                            <Link to="/jogos">
                                <TypographyUI as="span" variant="default" className="text-xl">Registrar</TypographyUI>
                            </Link>
                        </button>

                        <div id="loginIcones" className="flex gap-8 h-16 w-48 mt-10 justify-around">
                            <button className="h-12 w-16 bg-primary flex items-center justify-center rounded-lg transition duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.45)]">
                                <img src={logoGoogle} alt="" className="h-6" />
                            </button>

                            <button className="h-12 w-16 bg-primary flex items-center justify-center rounded-lg transition duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.45)]">
                                <img src={logoSteam} alt="" className="h-6" />
                            </button>
                        </div>

                    </div>

                </div>




            </div>
        </div>
    )
}