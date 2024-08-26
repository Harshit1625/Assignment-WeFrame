import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col gap-20 w-full">
        {/* Header */}
        <div className="flex justify-between w-full">
          {/* Searchbar */}
          <div className="bg-teal-100 p-4 px-6 lg:w-[20vw] md:w-[20vw] rounded-full flex">
            <input
              className="bg-teal-100 w-[18vw] placeholder:text-teal-400"
              placeholder="Suchen"
            />
            <Image
              alt="searchIcon"
              src="./searchIcon.svg"
              height={15}
              width={15}
            />
          </div>

          {/* Center */}
          <div className="lg:flex hidden gap-9 ">
            <div className="flex justify-center items-center gap-2">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={10}
                width={10}
              />
              <h1 className="font-bold">Rezept einlösen</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={10}
                width={10}
              />
              <h1>Live Bestand</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={10}
                width={10}
              />
              <h1>Videosprechstunde</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={10}
                width={10}
              />
              <h1>FAQs</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={10}
                width={10}
              />
              <h1>Kontakt</h1>
            </div>
          </div>

          {/* Ending */}
          <div className="flex justify-center items-center gap-5">
            <Image alt="cart" src="./cart.svg" height={40} width={40} />
            <div className="bg-lime-200 pl-3 pr-3 rounded-tl-3xl rounded-br-3xl">
              <h1 className="p-2 text-lime-600">Anmelden</h1>
            </div>
          </div>
        </div>

        {/* below Heading */}
        <div className="flex justify-between px-10">
          {/*  */}
          <div className="flex gap-3">
            <div className="flex justify-center items-center gap-3">
              <h1 className="text-teal-300">Home</h1>
              <Image alt="arrow" src="./arrow.svg" height={12} width={12} />
            </div>
            <div className="flex justify-center items-center gap-3">
              <h1 className="text-teal-300">Livebestand</h1>
              <Image alt="arrow" src="./arrow.svg" height={12} width={12} />
            </div>
            <div className="flex justify-center items-center gap-3">
              <h1 className="font-semibold">Cannabis Blüten</h1>
            </div>
          </div>

          {/*  */}
          <div className="lg:flex md:flex hidden flex-col gap-2">
            <h1>GKV mit Kostenübernahme?</h1>
            <div className="border-teal-200 border-2 flex rounded-tl-3xl justify-center items-center rounded-br-3xl">
              <h1 className="p-2 ">Preisoptionen</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
