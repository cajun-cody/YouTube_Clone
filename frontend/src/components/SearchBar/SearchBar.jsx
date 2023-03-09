import React, {useState, useEffect} from "react";
import './SearchBar.css';


//Component to allow a user to search for a video
//The 3 parameters are needed to be referenced later in the return
const SearchBar = ({getVideos, search, setSearch}) => {

    function handlesubmit(event){
        event.preventDefault();
        getVideos();
    }

    /* useEffect(() => getVideos(), [search]) */

    return ( 
        <form className="search-container" onSubmit={handlesubmit}>
            <input className='search-input'type='search' onChange={(event) => setSearch(event.target.value)} value={search}/>
            <button type='submit' className="search-btn">Search</button>
        </form>
     );
}
 
export default SearchBar;