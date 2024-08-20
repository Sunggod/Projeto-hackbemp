import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";

export default function Registro() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        name: '',
        cnpj: '',
        email: '',
        address: '',
        cep: '',
        url: '',
        description: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post("http://localhost:3000/contas", formData);
            console.log("Cadastro realizado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
        }
    };

    return (
        <>
            <div className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Registre-se</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                Sobrenome
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                Nome Comércio
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="cnpj" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                CNPJ
                            </label>
                            <input
                                type="text"
                                id="cnpj"
                                value={formData.cnpj}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="mb-4 mt-4">
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                            Endereço
                        </label>
                        <input
                            type="text"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cep" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                            CEP
                        </label>
                        <input
                            type="number"
                            id="cep"
                            value={formData.cep}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="url" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                            Url da imagem do seu Comércio:
                        </label>
                        <input
                            type="text"
                            id="url"
                            value={formData.url}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                            Descrição
                        </label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </>
    );
}
