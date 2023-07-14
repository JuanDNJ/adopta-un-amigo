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