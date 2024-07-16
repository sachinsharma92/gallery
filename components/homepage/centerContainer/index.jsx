import { ImageCustom } from "@/components/ui/imageCustom";
import { IoIosExpand, IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const CenterContainer = ({ clickHandler, isFullScreen }) => {
  return (
    <div className="relative min-h-full">
      <button
        className="w-8 sm:w-11 h-8 sm:h-11 bg-white border absolute right-2 sm:right-5 top-2 sm:top-5 z-10 flex justify-center items-center"
        onClick={clickHandler}
      >
        {!isFullScreen ? <IoIosExpand size={20} /> : <IoMdClose size={20} />}
      </button>

      <div className="swiper-center-slider">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
          }}
        >
          <SwiperSlide>
            {" "}
            <ImageCustom
              src="/images/3d-bg.jpg"
              width={2560}
              height={1068}
              alt="bannerImg"
              className="center-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ImageCustom
              src="/images/3d-bg.jpg"
              width={2560}
              height={1068}
              alt="bannerImg"
              className="center-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ImageCustom
              src="/images/3d-bg.jpg"
              width={2560}
              height={1068}
              alt="bannerImg"
              className="center-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <ImageCustom
              src="/images/3d-bg.jpg"
              width={2560}
              height={1068}
              alt="bannerImg"
              className="center-image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CenterContainer;
