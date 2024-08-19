import React from "react";
import celphoto from "../../assets/imagem-cel.png";

export default function Section() {
    return (
        <section className="flex flex-col justify-center items-center bg-white rounded-xl shadow-md">
            <div className="text-center pt-16">
                <h1 className="text-4xl">Bairro Empreendedor <br /> Fortalecendo o Comércio Local</h1>
            </div>
            <div className="flex justify-center items-center gap-20 mt-10">
                <div className="flex justify-center items-center">
                    <img src={celphoto} alt="Imagem de PNGTree" className="w-1/3"/>
                </div>
                <div className="flex justify-center items-center text-xl space-x-2 max-w-lg">
                    <p>Descubra e apoie os negócios do seu bairro!<p/>
                    Aqui no Bairro Empreendedor, damos visibilidade aos empreendimentos locais conectando você diretamente com comerciantes e serviços da sua região.</p>
                </div>
            </div>
        </section>
    );
}
