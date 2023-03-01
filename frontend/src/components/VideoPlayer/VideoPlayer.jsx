


//Component to display video that will be played in VideoPage
const VideoPlayer = ({ video }) => {
  const source = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
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
  );
};

export default VideoPlayer;
