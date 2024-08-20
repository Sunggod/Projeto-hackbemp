import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCity, faStore, faHome, faIdCard}  from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo.png";
export default function Header() {
  return (
    <nav style={{backgroundColor:"#0d3b66"}} className="flex items-center p-4">
      <div className="flex flex-row items-center justify-center gap-32 pl-20">
        <img src={logo} alt="Imagem de PNGTree" className="w-24" />
        <Link className="no-underline text-center text-white font-medium flex items-center gap-2  transform transition-transform duration-300 hover:scale-110" to="/">
          <FontAwesomeIcon icon={faHome} color="white" style={{ fontSize: '20px' }} />
          Página Inicial
        </Link>
        <Link to="/Registro" className="no-underline text-center text-white font-medium flex items-center gap-2 transform transition-transform duration-300 hover:scale-110">
          <FontAwesomeIcon icon={faIdCard} color="white" style={{ fontSize: '20px' }} />
          Cadastro-Comercio
        </Link>
      </div>

      <div className="flex flex-grow justify-end items-center gap-4 ">
      <h1 className="font-medium text-white flex items-center gap-2  transform transition-transform duration-300 hover:scale-110">
        <FontAwesomeIcon color="white" icon={faStore} style={{ fontSize: '20px' }} />
        Procure Comercios
      </h1>
        <FontAwesomeIcon color="white" icon={faMagnifyingGlass} style={{ fontSize: '20px' }} />
        <input 
          type="text" 
          placeholder="Pesquisar..." 
          className="px-4 py-2 border rounded-lg bg-white text-black"
        />
      </div>
    </nav>
  );
}
