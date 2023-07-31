import { API_URL } from '../consts'
export const authLogin = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    const data = await response.json()
    return data
}

export const newAccount = async (user) => {
    const { user_handler, email, password } = user
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_handler, email, password })
    })
    const data = await response.json()
    return data
}