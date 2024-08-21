import React, { useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";

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

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const validateForm = () => {
        const { firstName, lastName, email, address, cep, url } = formData;
        if (!firstName || !lastName || !email || !address || !cep || !url) {
            return "Por favor, preencha todos os campos obrigatórios.";
        }
        if (!/^\d{5}-\d{3}$/.test(cep)) {
            return "CEP deve estar no formato 12345-678.";
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setSuccess(null);
            return;
        }

        try {
            await axios.post("http://localhost:3000/contas", formData);
            setSuccess("Cadastro realizado com sucesso!");
            console.log(formData)
            console.log(setFormData)
            setError(null);
            setFormData({
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
        } catch (error) {
            setError("Erro ao cadastrar: " + error.message);
            setSuccess(null);
        }
    };

    return (
        <>
            <div className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Registre-se</h2>
                
                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}
                
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
                            type="text"
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
