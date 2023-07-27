import { getPets, searchPets, selectCatetory } from '../../../api/api-mysql'

const Select = () => {
  const hanfdlerChangeSelect = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'all') {
      getPets()
        .then((data) => searchPets(data))
        .catch((error) => console.log(error))
    } else {
      selectCatetory(e.target.value)
        .then((data) => searchPets(data))
        .catch((error) => console.log(error))
    }
  }
  return (
    <select name="category" id="category" onChange={hanfdlerChangeSelect}>
        <option value="all">All</option>
        <option value="dogs">Dog</option>
        <option value="cats">Cat</option>
        <option value="birds">Bird</option>
        <option value="rodents">Rodents</option>
        <option value="fish">Fish</option>
        <option value="reptiles">Reptiles</option>
    </select>
  )
}
export default Select
