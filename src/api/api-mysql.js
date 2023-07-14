import {API_URL} from '../consts'
export const getPets = async () => {
    const response = await fetch(`${API_URL}/pets`);
    const data = await response.json();
    return data;
}