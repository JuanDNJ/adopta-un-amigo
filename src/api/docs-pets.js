import { API_URL } from '../consts'

export const getDocsPets = async () => {
    try {
        const response = await fetch(new Request(`${API_URL}/pets/documents`), {
            method: 'GET'
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw new TypeError(error.message)
    }
}
export const getDocPet = async (id) => {
    try {
        const response = await fetch(new Request(`${API_URL}/pets/documents/${id}`), {
            method: 'GET'
        })
        const data = await response.json()
        return data
    } catch (error) {
        throw new TypeError(error.message)
    }
}