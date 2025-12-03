import { HeaderUI, TypographyUI, CardUI } from "../Scripts/ui";

export function Home() {
    return (
        <>
            <div className="bg-[url('../src/assets/backgroundHome.png')] bg-cover bg-center h-screen">
                <HeaderUI />

                <div id="divMain" className="flex flex-col col-span-2 m-48 gap-12">
                    <div className="flex gap-12">
                        <img src="../src/assets/logo.png" alt="" className="h-36" />
                        <TypographyUI as="span" className="text-7xl pt-8" variant="default">LetterPlay</TypographyUI>
                    </div>
                    <TypographyUI as="span" variant="default">Lorem ipsum dolor sit amet,
                        consectetur <br></br>adipiscing elit, sed do eiusmod tempor <br></br>incididunt </TypographyUI>

                </div>
            </div>

        </>
    );
}
