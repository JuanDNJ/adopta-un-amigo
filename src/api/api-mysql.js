import { API_URL, MAGIC_WORD } from '../consts'
import moocks from './moock.json'

import { getPet, getPets, searchPets } from './pets'
import { selectCatetory, getCategories } from './categories'
import { authLogin, newAccount } from './auth'
import { users } from './users'
import {getFrontPages} from './front-pages'
import { getBanners } from './banners'
import { getDocsPets, getDocPet } from './docs-pets'

export {
  getPet,
  getPets,
  searchPets,
  selectCatetory,
  getCategories,
  authLogin,
  newAccount,
  users,
  getFrontPages,
  getBanners,
  getDocsPets, 
  getDocPet
}