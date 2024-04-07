import "./filter.scss"

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Kigali Memorial site</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Memorial Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Standard Tour</option>
            <option value="rent">Premium Tour</option>

          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Location</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Kigali</option>
            <option value="house">Northern Province</option>
            <option value="condo">Southern Province</option>
            <option value="land">Western Province</option>
            <option value="land">Eastern Province</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter