import Image from "next/image";
import React from "react";
const img = React.lazy(() => import("../../../public/image.svg"));

const ImageComponent = () => {
  return (
    <div>
      <Image alt="slider" src={img} height={200} width={300} />
    </div>
  );
};

export default ImageComponent;
