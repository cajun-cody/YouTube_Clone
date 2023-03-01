import React, { useState } from "react";
import VideoPresenter from "../VideoPresenter/VideoPresenter";


//Component to map over searched videos
//Mapper will put each vieo item in a html list
const VideoDisplay = (props) => {

    const [videos, setVideos] = useState([
        {
            "kind": "youtube#searchResult",
            "etag": "LaQLzL24l8145BcPmSLLOITuw8k",
            "id": {
                "kind": "youtube#video",
                "videoId": "W6NZfCO5SIk"
            },
            "snippet": {
                "publishedAt": "2018-04-24T02:37:33Z",
                "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
                "title": "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
                "description": "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. Want to master JavaScript? Get my complete ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Programming with Mosh",
                "liveBroadcastContent": "none",
                "publishTime": "2018-04-24T02:37:33Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "JAvGjHMyEar_7MM-EUwkcTbCNz4",
            "id": {
                "kind": "youtube#video",
                "videoId": "lI1ae4REbFM"
            },
            "snippet": {
                "publishedAt": "2022-06-30T16:00:11Z",
                "channelId": "UCqrILQNl5Ed9Dz6CGMyvMTQ",
                "title": "JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)",
                "description": "FORK THIS REPL https://join.replit.com/cp-javascript GET THE FREE COURSE ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/lI1ae4REbFM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/lI1ae4REbFM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/lI1ae4REbFM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Clever Programmer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-06-30T16:00:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "xS0OEimDF3S0fyD0dCuvYd3LOU0",
            "id": {
                "kind": "youtube#video",
                "videoId": "DqaTKBU9TZk"
            },
            "snippet": {
                "publishedAt": "2021-04-28T23:50:07Z",
                "channelId": "UCB6dvaWu0N8uVq2yKsZ5s5g",
                "title": "BEST JavaScript Tutorial for Beginners for Getting a Job 2021 (High Quality, Project Based Course)",
                "description": "Build a full app in this JavaScript tutorial, designed to help new programmers get into the tech industry. Exercises, code ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/DqaTKBU9TZk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/DqaTKBU9TZk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/DqaTKBU9TZk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "SuperSimpleDev",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-28T23:50:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "rzBZQrS9c4KCfOzzyJZFadHt4Yg",
            "id": {
                "kind": "youtube#video",
                "videoId": "PkZNo7MFNFg"
            },
            "snippet": {
                "publishedAt": "2018-12-10T14:13:40Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "Learn JavaScript - Full Course for Beginners",
                "description": "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/PkZNo7MFNFg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/PkZNo7MFNFg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2018-12-10T14:13:40Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "h-xzJbcP3NW0wCX5ygrQEoAjtjM",
            "id": {
                "kind": "youtube#video",
                "videoId": "jS4aFq5-91M"
            },
            "snippet": {
                "publishedAt": "2021-06-21T16:42:15Z",
                "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
                "title": "JavaScript Programming - Full Course",
                "description": "Learn JavaScript from scratch by solving over a hundred different coding challenges. Go here for the interactive browser version: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/jS4aFq5-91M/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/jS4aFq5-91M/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "freeCodeCamp.org",
                "liveBroadcastContent": "none",
                "publishTime": "2021-06-21T16:42:15Z"
            }
        }
    ]);

/*   let videoDisplay = videos.map((video) => {
    return [video.snippet.title, video.snippit.description];
  });
 */
return(
    <ul>
        {videos.map( item => <li><VideoPresenter video={item}/></li>)}
    </ul>
)
};

export default VideoDisplay;

