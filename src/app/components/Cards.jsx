import React, { Suspense } from "react";

import Image from "next/image";
const Card = React.lazy(() => import("./Card"));

const Cards = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mb-[70px]">
        <div className="grid gap-7 md:grid-cols-1 lg:grid-cols-3 grid-cols-1">
          {/* {countArr.map((item, idx) => (
            <Card key={idx} />
          ))} */}
          <Suspense fallback={<p>Loading...</p>}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Suspense>
        </div>
        <div className="flex justify-end">
          <div className="flex gap-9 text-[17px]">
            <Image
              className="rotate-180"
              src="./arrow.svg"
              alt="arrow "
              height={12}
              width={12}
            />
            <h1 className="font-bold">1</h1>
            <h1 className="font-bold">2</h1>
            <h1 className="font-bold">3</h1>
            <h1 className="font-bold">...</h1>
            <h1 className="font-bold">12</h1>
            <Image alt="arrow" src="./arrow.svg" height={12} width={12} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
