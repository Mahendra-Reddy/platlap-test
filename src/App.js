import React, { useState } from "react";
import Axios from "axios";
import { getParamsBySearchType } from "./utilities/utilities";
import "./App.css";
import SearchBox from "./components/search/searchbox";
import SearchResults from "./components/search/searchResults";

const App = () => {
  const [name, setName] = useState("");
  const [previousSearch, setPreviousSearch] = useState([]);
   const [searchType, setSearchType] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleClick = async () => {
    try {
      const result = await Axios({
        url: `http://gateway.marvel.com/v1/public/${searchType}`,
        method: "GET",
        params: getParamsBySearchType(searchType, name),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(({ data }) => data.data);
      setSearchResults(result.results);
      setPreviousSearch((prevSearch) => {
        if (prevSearch.length >= 5) {
          let newValues = [...prevSearch, name];
          newValues.splice(0, 1);
          return newValues;
        }
        return [...prevSearch, name];
      });
    } catch (e) {
      console.log(e, "Something went wrong in app.js, 33...");
    }
  };

  return (
    <div className="App">
      <select
        name="searchType"
        value={searchType}
        onChange={(e) => {
          setSearchType(e.target.value);
          setSearchResults([]);
          setName("");
        }}
      >
        <option value="">Select category</option>
        <option value="comics">comics</option>
        <option value="series">series</option>
        <option value="characters">characters</option>
      </select>
      <SearchBox name={name} previousSearch={previousSearch} changeName={(e)=>setName(e)}/>
      <button onClick={handleClick}>search</button>
      <SearchResults searchResults={searchResults} searchType={searchType}/>
    </div>
  );
};

export default App;
