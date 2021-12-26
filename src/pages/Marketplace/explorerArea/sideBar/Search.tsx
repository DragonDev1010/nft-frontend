import * as FaIcons from 'react-icons/fa'
function Search() {
    return(
        <div className="filter__group filter__search">
            <label className="filter__label">Search:</label>
            <input type="text" className="filter__input" placeholder="Keyword"/>
            <button type="submit"><FaIcons.FaSearch/></button>
        </div>
    )
}

export default Search