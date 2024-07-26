import { ImageCustom } from "@/components/ui/imageCustom";

const CenterContainer = ({ selectedData }) => {
  function checkFileType(fileName) {
    const imageExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".tiff",
      ".svg",
      ".webp",
    ];
    const videoExtensions = [
      ".mp4",
      ".mov",
      ".wmv",
      ".flv",
      ".avi",
      ".mkv",
      ".webm",
      ".mpeg",
    ];
    const extension = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
    if (imageExtensions.includes(extension)) {
      return "image";
    } else if (videoExtensions.includes(extension)) {
      return "video";
    } else {
      return "unknown";
    }
  }

  const getMediaElement = (asset) => {
    const fileType = checkFileType(asset.name);
    switch (fileType) {
      case "image":
        return (
          <ImageCustom
            src={asset.file.url}
            width={2560}
            height={1068}
            alt="bannerImg"
            className="center-image"
          />
        );
      case "video":
        return (
          <video playsInline loop muted autoPlay width="100%">
            <source src={asset.file.url} />
          </video>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-full center-section">
      <div className="swiper-center-slider">
        {selectedData &&
          selectedData.Asset &&
          selectedData.Asset.map((asset) => {
            if (asset.type == "file") {
              return (
                <div key={asset} className="slide-item">
                  {getMediaElement(asset)}
                </div>
              );
            } else {
              return (
                <div key={asset} className="slide-item">
                  <iframe
                    width="100%"
                    height="100%"
                    src={asset.external.url}
                    frameborder="0"
                    className="responsive-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              );
            }
          })}
        {/* <div className="slide-item">
          <video playsInline loop muted autoPlay width="100%">
            <source src="/images/naruto.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="slide-item">
          <ImageCustom
            src="/images/3d-bg.jpg"
            width={2560}
            height={1068}
            alt="bannerImg"
            className="center-image"
          />
        </div>
        <div className="slide-item">
          <ImageCustom
            src="/images/3d-bg1.jpg"
            width={2560}
            height={1068}
            alt="bannerImg"
            className="center-image"
          />
        </div> */}
      </div>
    </section>
  );
};

export default CenterContainer;
