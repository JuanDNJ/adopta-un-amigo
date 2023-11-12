import { API_URL } from "../consts";

export const getVets = async () => {
    try {
        // const response = await fetch(new Request(`${API_URL}/pets/vets`), {
        //     method: 'GET'
        // })
        // // infoResponse()

        // const data = await response.json()
        // return data
        const response = await fetch('./moock.json')

        const { vets } = await response.json()
        console.log(vets)
        return vets
    } catch (error) {
        console.error(error)
        if (error.message === 'Failed to fetch') throw new TypeError(error.message) //
    }
}