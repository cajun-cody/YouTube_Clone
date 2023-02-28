import React, {useState, useEffect} from "react";


//Component to allow a user to search for a video
const SearchBar = ({getVideos, search, setSearch}) => {

    function handlesubmit(event){
        event.preventDefault();
        getVideos();
    }


    return ( 
        <form onSubmit={handlesubmit}>
            <input type='search' onChange={(event) => setSearch(event.target.value)} value={search}/>
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;