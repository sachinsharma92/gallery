import { ImageCustom } from "@/components/ui/imageCustom";

const CenterContainer = () => {
  return (
    <div className="relative">
      <button className="w-8 sm:w-11 h-8 sm:h-11 bg-white border absolute right-2 sm:right-5 top-2 sm:top-5 z-10 flex justify-center items-center">
        <ImageCustom
          src="/images/expend.svg"
          width={14}
          height={14}
          alt="bannerImg"
          className="expend-button"
        />
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
