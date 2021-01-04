import React from "react";

const SearchResults = ({ searchResults, searchType }) => {
  return (
    <div>
      {searchResults && searchResults.length ? (
        <div>
            <p><b>{searchType}</b> : {searchResults.length} Results found</p>
          <ul>
            {searchResults.map((item) => (
              <li key={item.id}>
                {searchType === "characters" ? item.name : item.title}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p> {searchResults.length} Results found</p>
      )}
    </div>
  );
};

export default SearchResults;
