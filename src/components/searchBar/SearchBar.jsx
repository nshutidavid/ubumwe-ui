import { useState } from "react";
import "./searchBar.scss";

const types = ["Standard Tour", "Premium Tour"];

const SearchBar = () => {
    const [query, setQuery] = useState({
        type: "Standard Tour",
        location: "",
        minPrice: 0,
        maxPrice: 0,
      });
    
      const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
      };
    
      return (
        <div className="searchBar">
          <div className="type">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => switchType(type)}
                className={query.type === type ? "active" : ""}
              >
                {type}
              </button>
            ))}
          </div>
          <form>
            <input type="text" name="location" placeholder="Memorial Location" />
            <input
              type="number"
              name="minPrice"
              min={0}
              max={10000000}
              placeholder="Min Visit Cost"
            />
            <input
              type="number"
              name="maxPrice"
              min={0}
              max={10000000}
              placeholder="Max Visit Cost"
            />
            <button>
              <img src="/search.png" alt="" />
            </button>
          </form>
        </div>
      );
}

export default SearchBar