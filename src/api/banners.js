import { API_URL } from "../consts";

export const getBanners = async () => {
    try {
        const banners = await fetch(`${API_URL}/pets/banners`);
        const record = await banners.json();
        return record;
    } catch (err) {
        throw new Error(err.message);
    }
}