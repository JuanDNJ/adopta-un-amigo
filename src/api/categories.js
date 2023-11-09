import { API_URL } from '../consts'
export const selectCatetory = async (catetory) => {
    const response = await fetch(`${API_URL}/pets/category/${catetory}`)
    const data = await response.json()
    return data
}

// get categories

export const getCategories = async () => {
    const response = await fetch(`${API_URL}/pets/categories`, {
        method: 'GET'
    })
    const data = await response.json()
    return data
}