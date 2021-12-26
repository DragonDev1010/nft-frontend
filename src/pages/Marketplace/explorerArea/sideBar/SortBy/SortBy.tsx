function SortBy() {
    return(
        <div className="filter__group">
            <label htmlFor="sort" className="filter__label">Sort by:</label>

            <div className="filter__select-wrap">
                <select name="sort" id="sort" className="filter__select">
                    <option value="0">Relevance</option>
                    <option value="1">Newest</option>
                    <option value="2">Oldest</option>
                </select>
            </div>
        </div>
    )
}

export default SortBy