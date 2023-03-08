import React, {useState, useEffect} from "react";


//Component to allow a user to search for a video
//The 3 parameters are needed to be referenced later in the return
const SearchBar = ({getVideos, search, setSearch}) => {

    function handlesubmit(event){
        event.preventDefault();
        getVideos();
    }

    /* useEffect(() => getVideos(), [search]) */

    return ( 
        <form onSubmit={handlesubmit}>
            <input type='search' onChange={(event) => setSearch(event.target.value)} value={search}/>
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;