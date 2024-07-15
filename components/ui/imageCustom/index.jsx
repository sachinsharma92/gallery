import Image from "next/image";

function ImageCustom({ src, height, width, alt, className }) {
  return (
    <div className={className}>
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );
}

export { ImageCustom };
