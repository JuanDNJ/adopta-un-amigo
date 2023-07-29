import styles from './filter-form.module.css'
import { useEffect, useState } from 'react'
import { getCategories, getPets, searchPets, selectCatetory } from '../../../../../api/api-mysql'

const FilterPets = ({ search, selectCat }) => {

    const [categories, setCategories] = useState([])

    const handleSearch = (e) => {
        const { target } = e
        console.log(target.value)
        searchPets(target.value)
            .then((data) => {
                if (data.length > 0) {
                    search(data)
                }
            })
            .catch((error) => console.log(error))
    }

    const hanfdlerChangeSelect = (e) => {
        const { target } = e
        try {
            if (e.target.value === 'all') {
                getPets()
                    .then((data) => {
                        selectCat(data)
                    })
            } else {
                selectCatetory(target.value)
                    .then((data) => {
                        selectCat(data)
                    })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getCategories()
            .then((data) => {
                setCategories(data)
                console.log(data)
            })

    }, [])
    return (
        <form className={styles.filterForm}>
            <input onInput={handleSearch} type="search" name="search" id="search" placeholder='Search' />
            <select name="category" id="category" onChange={hanfdlerChangeSelect}>
                {categories.map((category) => <option key={category.category_id} value={category.name.toLowerCase()}>{category.name}</option>)}
            </select>
        </form>
    );
}
export default FilterPets;