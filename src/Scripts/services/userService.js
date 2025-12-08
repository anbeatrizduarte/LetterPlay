import api from "./api";

export const registerUser = async (userData) => {
    try {
        const response = await api.post('/users/', userData);
        return response.data;
    }catch (error) {
        console.error("Erroa na requisicao de registro", error);
        throw error;
    }
};