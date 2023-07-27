export const MAGIC_WORD = 'token'
export const API_URL = import.meta.env.VITE_API_MYSQL
export const USER_TOKEN = window.localStorage.getItem(MAGIC_WORD) || ''
