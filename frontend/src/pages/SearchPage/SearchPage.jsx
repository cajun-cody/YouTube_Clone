import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import React, {useState} from "react";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";



//Page to display searchbar and searched videos 
const SearchPage = ({}) => {
    //1st const to show 6 videos on searchpage before searching
    //2nd const to set state for videos after search
    const [videos, setVideos] = useState([])
    const [search, setSearch] = useState([])

    async function getVideos() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&type=video&key=AIzaSyDK84QLK5efmAEb9qPKEjNS5Tvy4KVFRek&maxResults=5&part=snippet`);
        setVideos(response.data.results);
        console.log(response);
    }


    return ( 
        <div>
            <SearchBar videos={videos} getVideos={getVideos} setSearch={setSearch}/>
            <VideoDisplay videos={videos}/>
        </div>
     );
}
 
export default SearchPage;