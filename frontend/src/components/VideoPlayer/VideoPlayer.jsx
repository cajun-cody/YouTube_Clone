


//Component to display video that will be played in VideoPage
const VideoPlayer = ({ videoId , video }) => {
  const source = `https://www.youtube.com/embed/${videoId}`;
  return (<>
      <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={source}
        frameborder="0"
      ></iframe>
    </div>
    <div>
      <h3>{video?.snippet.title}</h3>
    </div>

  </>

  );
};

export default VideoPlayer;
