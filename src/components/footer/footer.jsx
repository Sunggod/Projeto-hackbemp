import React from 'react';
import { TERipple } from "tw-elements-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import {faStore}  from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
    return (
        <footer className="text-center text-white bg-blue-900">
            <div className="container p-6 mx-auto">
                <div className="">
                    <span className="flex items-center justify-center gap-2 w-full">
                    <FontAwesomeIcon color="white" icon={faStore} style={{ fontSize: '20px' }} />
                        <span className="mr-4">Registre seu Comercio</span>
                        <TERipple rippleColor="light">
                            <Link to="/Registro">
                                <button
                                    type="button"
                                    className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                                    Registre-se
                                </button>
                            </Link>
                        </TERipple>
                    </span>
                </div>
            </div>
            <div
                className="p-4 text-center bg-black bg-opacity-20">
                © 2023 Copyright:
                <a className="text-white" href="https://tw-elements.com/"
                > Bairro Emprededor</a>
            </div>
        </footer>
    );
}