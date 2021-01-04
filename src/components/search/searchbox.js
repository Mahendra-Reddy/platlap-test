import React, { useState } from "react";

const SearchBox = ({ previousSearch, name, changeName }) => {
  const [isFocus, setFocus] = useState(false);
  return (
    <div className="container">
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => changeName(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="search by name or title"
      />
      {isFocus && (
        <div className="dropdown">
          <ul>
            {previousSearch.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
