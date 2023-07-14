const API_JUANDFE = import.meta.env.VITE_API_JUANDFE_URL

const getPets = async () => {
  try {
    const pets = await fetch(`${API_JUANDFE}/pets`)
    const petsJson = await pets.json()
    return petsJson
  } catch (error) {
    throw new Error(error)
  }
}

export { getPets }
