import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import React, {useState} from "react";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";



//Page to display searchbar and searched videos 
const SearchPage = ({}) => {
    //1st const to show 5 hard coded videos on searchpage before searching. 
    //2nd const to set state for videos after search
    const [videos, setVideos] = useState([
        {
            "kind": "youtube#searchResult",
            "etag": "JNpAvxsZ-5m2rXG1fFsnaEtBTds",
            "id": {
                "kind": "youtube#video",
                "videoId": "nORg_aXMsmA"
            },
            "snippet": {
                "publishedAt": "2019-09-12T14:30:03Z",
                "channelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
                "title": "Cajun Food | Basics with Babish (feat. Isaac Toups)",
                "description": "This week on Basics I'm joined by chef Isaac Toups to show you how to make some amazing Cajun dishes: jambalaya, gumbo, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/nORg_aXMsmA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/nORg_aXMsmA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/nORg_aXMsmA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Babish Culinary Universe",
                "liveBroadcastContent": "none",
                "publishTime": "2019-09-12T14:30:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "_BPXrQgK7v9EjFgSyXAwZpvx-mI",
            "id": {
                "kind": "youtube#video",
                "videoId": "fCArZHXCzmI"
            },
            "snippet": {
                "publishedAt": "2019-04-10T14:00:08Z",
                "channelId": "UCajXeitgFL-rb5-gXI-aG8Q",
                "title": "This Cajun Restaurant Has a Year-Long Waiting List",
                "description": "In an unassuming building in Galliano, Louisiana, Alzina Toups makes some of the best food you'll ever eat. But while her ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/fCArZHXCzmI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/fCArZHXCzmI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/fCArZHXCzmI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Great Big Story",
                "liveBroadcastContent": "none",
                "publishTime": "2019-04-10T14:00:08Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "FXl4AixJuAZnzwpZNzyNzjsPJnk",
            "id": {
                "kind": "youtube#video",
                "videoId": "94VaS-riPjw"
            },
            "snippet": {
                "publishedAt": "2018-02-23T15:00:00Z",
                "channelId": "UCtYty94mQ6on0Q2oqD2erhg",
                "title": "The Difference Between Creole and Cajun Food | Southern Living",
                "description": "These Louisiana cuisines are two of a kind. Want to see more Southern Living videos? Subscribe to our channel!",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/94VaS-riPjw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/94VaS-riPjw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/94VaS-riPjw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Southern Living",
                "liveBroadcastContent": "none",
                "publishTime": "2018-02-23T15:00:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "CmDoinsXrt51tPB7QAAvmftb7-U",
            "id": {
                "kind": "youtube#video",
                "videoId": "9ytqP64AVkk"
            },
            "snippet": {
                "publishedAt": "2018-12-20T14:00:03Z",
                "channelId": "UCaLfMkkHhSA_LaCta0BzyhQ",
                "title": "How To Make Cajun Jambalaya with Isaac Toups",
                "description": "Isaac Toups is back and this time he's showing you another Cajun classic—jambalaya. This dish is a southern staple, perfect for ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/9ytqP64AVkk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/9ytqP64AVkk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/9ytqP64AVkk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Munchies",
                "liveBroadcastContent": "none",
                "publishTime": "2018-12-20T14:00:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "lywZB5thfcMSWjwIcsv-cbl2wFg",
            "id": {
                "kind": "youtube#video",
                "videoId": "n0oH6yWdhiM"
            },
            "snippet": {
                "publishedAt": "2019-06-16T12:32:06Z",
                "channelId": "UCcAd5Np7fO8SeejB1FVKcYw",
                "title": "Boiling 10,000 Crawfish!!! Epic Louisiana Crawfish Throw Down in Cajun Country!!",
                "description": "WEIRDEST Country I've Traveled to! » https://youtu.be/oc-hVwKzyf0 SUPPORT OUR MISSION » http://bit.ly/BestEverPatreon ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/n0oH6yWdhiM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/n0oH6yWdhiM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/n0oH6yWdhiM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Best Ever Food Review Show",
                "liveBroadcastContent": "none",
                "publishTime": "2019-06-16T12:32:06Z"
            }
        }
    ]);
    const [search, setSearch] = useState([])

    async function getVideos() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&type=video&key=AIzaSyDK84QLK5efmAEb9qPKEjNS5Tvy4KVFRek&maxResults=5&part=snippet`);
        setVideos(response.data.items);
        console.log(response);
    }


    return ( 
        <div>
            <SearchBar videos={videos} getVideos={getVideos} setSearch={setSearch}/>
            <VideoDisplay videos={videos} setVideos={videos}/>
        </div>
     );
}
 
export default SearchPage;