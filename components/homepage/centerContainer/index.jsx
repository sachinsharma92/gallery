import { ImageCustom } from "@/components/ui/imageCustom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

const CenterContainer = () => {
  return (
    <div className="relative min-h-full">
      <div className="swiper-center-slider">
        <div className="slide-item">
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
        </div>
      </div>
    </div>
  );
};

export default CenterContainer;
