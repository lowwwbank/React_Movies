import React, {useState} from "react";

function Search ({find}) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const handleRadio = async (e) => {
    setCategory(e.target.value)
    find(search,e.target.value)
  }

  const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        find(search, category);
      }
  }
  return (
    <div className="search">
      <div className="row">
          <div className="col s12">
              <div className="input-field">
                  <input
                      placeholder="Find movie "
                      type="search"
                      className="validate"
                      value={search}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                  />
              </div>
          </div>
      </div>
      <form action="filter" className="filter">
        <label>
          <input className="with-gap" value="" name="type" type="radio" checked={category === ''} onChange={handleRadio}/>
          <span>All</span>
        </label>
        <label>
          <input className="with-gap" value="movie" name="type" type="radio" checked={category === 'movie'} onChange={handleRadio}/>
          <span>Movies only</span>
        </label>
        <label>
          <input className="with-gap" value="series" name="type" type="radio" checked={category === 'series'} onChange={handleRadio}/>
          <span>Series only</span>
        </label>
      </form>
    </div>
  );
}

export default Search;