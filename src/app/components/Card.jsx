
import Image from "next/image";
import React, { Suspense } from "react";
const Img = React.lazy(() => import("./ImageComponent.jsx"));
const Title = React.lazy(() => import("./Title.jsx"));

const Card = () => {
 
  return (
    <div className="flex flex-col rounded-tl-2xl rounded-br-2xl border-teal-200 border-2">
      <Image alt="imgHeader" src="./imgHeader.svg" height={200} width={250} />
      <Suspense
        fallback={<p className="text-teal-300">Loading image...</p>}
      >
       <Img />
      </Suspense>
  

      {/* body */}
      <div className="bg-teal-200 border p-4 border-teal-200 gap-2 flex flex-col">
        <div className="p-1 bg-teal-300 flex justify-center rounded-md items-center w-1/4">
          <h1 className="font-bold">Canify</h1>
        </div>

        <div className="flex gap-3">
          <div className="p-1 bg-white flex justify-center rounded-md items-center px-4">
            <h1 className="font-bold">THC 18%</h1>
          </div>
          <div className="p-1 bg-teal-300 flex justify-center rounded-md items-center px-4">
            <h1 className="font-bold">{`CBD <1%`}</h1>
          </div>

          <Image alt="bodyicon" src="./bodyicon.svg" height={20} width={20} />
        </div>

        {/*  */}
        <div className="flex flex-col gap-2 mt-4">
          <Title />
          <div className="flex justify-between">
            <h1>Kultivar</h1>
            <h1>Mango</h1>
          </div>
          <div className="flex justify-between">
            <h1>Genetik</h1>
            <h1>Hybrid</h1>
          </div>

          <div className="w-full mt-4">
            <Image
              alt="bodyBottom"
              src="./bodyBottom.svg"
              height={150}
              width={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
