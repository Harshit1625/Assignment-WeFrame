import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-[40px] lg:flex md:flex hidden gap-[5vw] bg-teal-700 px-[10vw]">
        <div className="flex flex-col gap-3">
          <h1 className="text-white">AGB</h1>
          <h1 className="text-white">Impressum</h1>
          <h1 className="text-white">Datenschutz</h1>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <div className="flex justify-center items-center gap-2 w-full">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={10}
                width={10}
              />
              <h1 className="font-semibold text-white">Rezept einlösen</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={10}
                width={10}
              />
              <h1 className="font-semibold text-white">Videosprechstunde</h1>
            </div>
          </div>

          {/*  */}
          <div className="flex gap-6">
            <div className="flex justify-center items-center gap-2">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={10}
                width={10}
              />
              <h1 className="font-semibold text-white">Videosprechstunde</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={10}
                width={10}
              />
              <h1 className="font-semibold text-white">FAQs</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={10}
                width={10}
              />
              <h1 className="font-semibold text-white">Kontakt</h1>
            </div>
          </div>

          {/*  */}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white opacity-70">Standort</h1>
          <h1 className="text-white font-semibold ">
            Bergstraße 49 - 5769469 Weinheim(3 Glocken Quartier)
          </h1>
        </div>

        <div className="flex flex-col gap-4 w-1/4">
          <h1 className="text-white opacity-70">Phone</h1>
          <h1 className="text-white font-semibold ">0223 545 5250</h1>
        </div>

        <div className="flex flex-col gap-4  w-1/4">
          <h1 className="text-white opacity-70">Öffnungszeiten</h1>

          <h1 className="text-white opacity-70">Mo-Fr</h1>
          <h1 className="text-white font-semibold ">9:00 - 18:00 Uhr</h1>

          <h1 className="text-white opacity-70">Sa</h1>
          <h1 className="text-white font-semibold ">9:00 - 14:00 Uhr</h1>
        </div>
      </div>

      {/* footer for mobiles */}
      <div className="py-[40px] gap-[5vw] lg:hidden md:hidden bg-teal-700 px-[10vw] grid grid-cols-2">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-white">AGB</h1>
            <h1 className="text-white">Impressum</h1>
            <h1 className="text-white">Datenschutz</h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white opacity-70">Standort</h1>
            <h1 className="text-white font-semibold ">
              Bergstraße 49 - 5769469 Weinheim(3 Glocken Quartier)
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-white opacity-70">Phone</h1>
            <h1 className="text-white font-semibold ">0223 545 5250</h1>
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-white opacity-70">Öffnungszeiten</h1>

            <h1 className="text-white opacity-70">Mo-Fr</h1>
            <h1 className="text-white font-semibold ">9:00 - 18:00 Uhr</h1>

            <h1 className="text-white opacity-70">Sa</h1>
            <h1 className="text-white font-semibold ">9:00 - 14:00 Uhr</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
