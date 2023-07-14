export const getPets = async () => {
    const response = await fetch('http://localhost:5174/pets');
    const data = await response.json();
    return data;
}