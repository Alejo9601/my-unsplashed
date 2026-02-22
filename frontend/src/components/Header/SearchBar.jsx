import { useState } from "react";
import useImages from "../../hooks/useImages";

const SearchBar = () => {
   const { searchByName } = useImages();
   const [query, setQuery] = useState("");

   const handleOnChange = (ev) => {
      const { value } = ev.target;
      setQuery(value);
      searchByName(value);
   };

   const handleClearSearch = () => {
      setQuery("");
      searchByName("");
   };

   return (
      <form
         autoComplete="off"
         className="header__searchbar"
         onSubmit={(ev) => ev.preventDefault()}
      >
         <div className="header__searchbar__icon"></div>
         <input
            autoComplete="false"
            onChange={handleOnChange}
            value={query}
            type="search"
            name="search"
            placeholder="Search by name"
         />
         {query ? (
            <button
               type="button"
               className="header__searchbar__clear"
               onClick={handleClearSearch}
               aria-label="Clear search"
            >
               x
            </button>
         ) : null}
      </form>
   );
};

export default SearchBar;
