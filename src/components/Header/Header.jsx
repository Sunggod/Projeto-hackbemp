import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCity, faStore, faHome, faIdCard}  from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  return (
    <nav className="bg-indigo-400	k border-gray-200 dark:bg-gray-900 shadow-xl">
      <div className="max-w-screen-xl flex flex-row items-center mx-auto p-4 justify-between gap-4">
        <div className="flex flex-row gap-4">
        <div className="flex items-center text-center gap-2 pr-40">
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '20px' }} />
          <Link className="no-underline text-center pt-1.5 font-medium	"to="/">Pagina Inicial</Link>
        </div>
        </div>
        <div className="flex flex-row items-center gap-4 pl-40">
            <FontAwesomeIcon icon={faStore} style={{ fontSize: '20px' }} />
            <h1 className="font-medium	">Procure Comercios</h1>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '20px' }} />
          <input 
            type="text" 
            placeholder="Pesquisar..." 
            className="px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white" 
          />
        </div>
        <div className="flex flex-row gap-2 items-center text-center">
            <FontAwesomeIcon icon={faIdCard} style={{ fontSize: '20px' }} />
            <Link className="no-underline text-center  font-medium text-white border p-2 rounded-lg"to="/">Cadastro-Comercio</Link>
        </div>
      </div>
    </nav>
  );
}
