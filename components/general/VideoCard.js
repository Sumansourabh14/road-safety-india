const VideoCard = ({ id, body, url }) => {
  return (
    <div key={id} className="flex flex-col gap-4">
      {!!url && (
        <video width="320" height="240" preload="none">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <p>{body}</p>
    </div>
  );
};

export default VideoCard;
