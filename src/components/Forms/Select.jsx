import { useEffect } from 'react'
import { getPets, searchPets, selectCatetory, getCategories } from '../../../api/api-mysql'

const Select = () => {

  const [categories, setCategories] = useState([])

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
  useEffect(() => {
    getCategories()
    .then((data) => {
      console.log(data)
      setCategories(data)
    })
    .catch((error) => console.log(error))
  }, [categories])

  return (
    <select name="category" id="category" onChange={hanfdlerChangeSelect}>
   
        {categories.map((category) => () => <option value={category.name}>{category.name}</option>) }
        <option value="all">All</option>
        <option value="all">Hey</option>
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
