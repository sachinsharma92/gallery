
const Video = ({ src, autoPlay = true, ...props }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <span className="relative w-full h-full">
        <video
          playsInline
          autoPlay={autoPlay}
          loop
          muted
          width="100%"
          key={src}
          {...props}
        >
          <source src={src} type="video/mp4" />
        </video>
      </span>
    </div>
  );
};

export default Video;
