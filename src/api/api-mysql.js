import {API_URL} from '../consts'
export const getPets = async () => {
    const response = await fetch(`${API_URL}/pets`);
    const data = await response.json();
    return data;
}
export const searchPets = async (search) => {
    const response = await fetch(`${API_URL}/pets/${search}`);
    const data = await response.json();
    return data;
}

export const selectCatetory = async (catetory) => {
    const response = await fetch(`${API_URL}/pets/category/${catetory}`);
    const data = await response.json();
    return data;
}

// get categories

export const getCategories = async () => {
    const response = await fetch(`${API_URL}/categories`);
    const data = await response.json();
    return data;
}
export const useAuthLogin = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });
    const data = await response.json();
    return data;
}

export const newAccount = async (user) => {
    const {user_handler, email, password} = user;
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_handler, email, password})
    });
    const data = await response.json();
    return data;
}