import React, { useState } from 'react';
import celphoto from "../../assets/imgphone.png";
import emprededor from "../../assets/emprededor.png";
import empresario from "../../assets/empresario.png";
import acompanhe from "../../assets/acompanhe.png";
import comercios from "../../assets/comercios.png";
import { Link } from 'react-router-dom';

import './Section.css';
import bairroemprededor from "../../assets/bairro-emprededor.jpg"
import emprededor1 from "../../assets/emprededor1.jpeg"
import emprededor2 from "../../assets/emprededor2.jpeg"
import emprededor3 from "../../assets/emprededor3.jpg"



import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
const slides = [{
      image: emprededor1,
      title: "Camicado",
      description: `Loja aleatorio descrição apenas de teste`,
    },
    {
      image: emprededor2,
      title: "Lojas Lebes",
      description: "O projeto Bairro Empreendedor2 é uma iniciativa da Prefeitura de Pelotas que visa fortalecer a economia local através da organização e valorização da comunidade e dos pequenos negócios",
    },
    {
      image: emprededor3,
      title: "Farmacias São João",
      description: "O projeto Bairro Empreendedor3 é uma iniciativa da Prefeitura de Pelotas que visa fortalecer a economia local através da organização e valorização da comunidade e dos pequenos negócios",
    },
  ];
 
export default function Section() {
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <>
        <section className="sectionContainer diagonalCut">
            <div className="contentRow">
                <div className="textContent">
                    <h2 className="mainHeading">Descubra e apoie os negócios do seu bairro! </h2>
                    <p className="subText">Aqui no <span className="bairro">Bairro Empreendedor</span>, damos visibilidade aos empreendimentos locais, conectando você diretamente com comerciantes e serviços da sua região.</p>
                    <button className="button">Saiba mais</button>
                </div>
                <img src={celphoto} alt="Imagem de PNGTree" className="image" />
            </div>
        </section>
        <section className="sectionContainer">
            <div className="contentRow">
            <img src={emprededor} alt="Imagem de PNGTree" className="image" />
                <div className="textContent">
                    <h2 className="mainHeading">Para Clientes!</h2>
                    <p className="subText">Explore uma variedade de serviços e produtos próximos a você, promovendo o crescimento da economia local e ajudando a construir uma comunidade mais forte.</p>
                    <button className="button">Saiba mais</button>
                </div>
            </div>
        </section>
        <section className="sectionContainer diagonalCut2">
            <div className="contentRow">
                <div className="textContent">
                    <h2 className="mainHeading">Para Emprededores!</h2>
                    <p className="subText">Cadastre seu negócios em poucos cliques e seja encontrado por novos clientes que valorizam o comércio local!</p>
                    <Link to="/Registro">
                        <button className="button">Registre-se</button>
                    </Link>
                </div>
                <img src={empresario} alt="Imagem de PNGTree" className="image" />
            </div>
        </section>
        
        <section className="container-section">
                <div>
                    <img src={acompanhe} alt="Imagem de PNGTree" className="h-200" />
                </div>
            <div className="carousel-container">
                <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                    <div className="carouselImageContainer">
                        <img src={slide.image} alt={`Slide ${index + 1}`} className="carouselImage" />
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div className="carouselText">
                    <div className='container-title'>
                        <img  src={comercios} alt=""/>
                    </div>
                <h2>{slides[activeSlide].title}</h2>
                <p>{slides[activeSlide].description}</p>
                <button className="button">Saiba mais</button>
            </div>
        </section>
        </>        
    );
}