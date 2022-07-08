import React, { useState } from "react";


function Searchbox() {
  const [searchText, setSearchText] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
          </label>
          <button color="primary" onClick={() => {

          }}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbox;
