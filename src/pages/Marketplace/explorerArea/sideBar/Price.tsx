function Price() {
    return(
        <div className="filter__group">
            <label className="filter__label">Price Range (ETH):</label>
            <div className="row">
            <div className="col-6">
                <input type="text" className="filter__input" placeholder="Min"/>
            </div>
            <div className="col-6">
                <input type="text" className="filter__input" placeholder="Max"/>
            </div>
            </div>
        </div>
    )
}

export default Price