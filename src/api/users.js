import { API_URL, MAGIC_WORD } from '../consts'
export const users = {
    getProfile: async () => {
        const response = await fetch(`${API_URL}/users/user/profile`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem(MAGIC_WORD)}`
            }
        })
        if (response.status === 401) {
            return { error: 'Unauthorized' }
        }

        const data = await response.json()
        // console.log(data);
        return data
    }

}