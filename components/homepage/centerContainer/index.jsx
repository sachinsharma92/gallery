import { ImageCustom } from "@/components/ui/imageCustom";
import { IoIosExpand, IoMdClose } from "react-icons/io";

const CenterContainer = ({ clickHandler, isFullScreen }) => {
  return (
    <div className="relative">
      <button
        className="w-8 sm:w-11 h-8 sm:h-11 bg-white border absolute right-2 sm:right-5 top-2 sm:top-5 z-10 flex justify-center items-center"
        onClick={clickHandler}
      >
        {!isFullScreen ? <IoIosExpand size={20} /> : <IoMdClose size={20} />}
      </button>

      <ImageCustom
        src="/images/3d-bg.jpg"
        width={2560}
        height={1068}
        alt="bannerImg"
        className="center-image"
      />
    </div>
  );
};

export default CenterContainer;
