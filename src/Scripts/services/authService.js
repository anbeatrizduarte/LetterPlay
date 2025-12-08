import api from './api';

export const loginUser = async (username, password) => {
    const dadosLogin = new FormData();
    dadosLogin.append('username', username);
    dadosLogin.apénd('password', password);

    try {
        const response = await api.post ('/auth/token/', dadosLogin);
        if (response.data.access_token) {
            localStorage.setItem('@LetterPLay:token', response.data.access_token);
        }
        return response.data;
    }catch (error){
        console.error("Erro no Login", error);
        throw error;
    }
};