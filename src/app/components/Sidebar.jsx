"use client";

import Image from "next/image";
import React, { Suspense, useState } from "react";

const Slider = React.lazy(() => import("./SliderComponent.jsx"));

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      {/* for lg */}
      <div className=" p-1 gap-7 px-3 lg:flex lg:flex-col md:flex-col md:flex hidden items-center">
        {/*  */}

        <div className="bg-teal-100 px-3">
          <h1 className="font-bold text-[20px] px-20">Filter</h1>
        </div>

        {/*  */}
        <div className="flex border-b-2 pb-2 flex-col items-center justify-center">
          <h1 className="font-semibold text-[20px]">Preis</h1>
          <Suspense>
            <Slider />
          </Suspense>
        </div>

        {/*  */}
        <div className="flex flex-col w-full py-4 border-b-2 gap-2">
          <div className="flex justify-evenly gap-6">
            <h1 className="font-semibold text-[15px]">Hersteller</h1>
            <Image
              alt="downArrow"
              src="./downArrow.svg"
              height={10}
              width={10}
            />
          </div>

          {/* checkboxes */}
          <div className="flex flex-col gap-3">
            <div className="flex mr-[2.5vw] gap-2">
              <input type="checkbox" id="scales" name="scales" />
              <label className="font-semibold" htmlFor="scales">
                Scales
              </label>
            </div>

            <div className="flex mr-[2.5vw] gap-2">
              <input type="checkbox" id="scales" name="scales" />
              <label className="font-semibold" htmlFor="scales">
                Aurora
              </label>
            </div>

            <div className="flex mr-[2.5vw] gap-2">
              <input type="checkbox" id="scales" name="scales" checked />
              <label className="font-semibold" htmlFor="scales">
                Avaay
              </label>
            </div>

            <div className="flex mr-[2.5vw] gap-2">
              <input type="checkbox" id="scales" name="scales" checked />
              <label className="font-semibold" htmlFor="scales">
                Bedrocan
              </label>
            </div>

            <div className="flex mr-[2.5vw] gap-2">
              <input type="checkbox" id="scales" name="scales" />
              <label className="font-semibold" htmlFor="scales">
                Cannamedical
              </label>
            </div>

            <div className="border-teal-200 border-2 flex rounded-tl-3xl justify-center items-center rounded-br-3xl">
              <h1 className="p-1 font-semibold">mehr anzeigen</h1>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex border-b-2 pb-2 py-3 flex-col items-center justify-center">
          <h1 className="font-semibold text-[20px]">THC Gehalt</h1>
          <Suspense>
            <Slider />
          </Suspense>
        </div>

        {/*  */}
        <div className="flex border-b-2 pb-2 py-3 flex-col items-center justify-center">
          <h1 className="font-semibold text-[20px]">CBD Gehalt</h1>
          <Suspense>
            <Slider />
          </Suspense>
        </div>

        {/*  */}
        <div className="flex flex-col py-4 border-b-2 w-full items-center justify-center gap-2">
          <h1 className="font-semibold text-[15px]">Genetik</h1>
          <div className="flex gap-2 w-full justify-center text-[13px]">
            <div className="bg-teal-200 px-3 font-semibold rounded-sm">
              <h1>Indica</h1>
            </div>
            <div className="bg-teal-100 px-3">
              <h1>Sativa</h1>
            </div>
            <div className="bg-teal-100 px-3">
              <h1>Hybrid</h1>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col w-full border-b-2 py-4 items-center justify-center gap-2">
          <h1 className="font-semibold text-[15px]">Bestrahltung</h1>
          <div className="flex gap-2 w-full justify-center text-[13px]">
            <div className="bg-teal-200 px-3 font-semibold rounded-sm">
              <h1>bestrahit</h1>
            </div>
            <div className="bg-teal-100 px-3">
              <h1>nicht bestrahit</h1>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col w-full py-4 border-b-2 gap-2">
          <div className="flex justify-evenly gap-6">
            <h1 className="font-semibold text-[15px]">Terpene</h1>
            <Image
              alt="downArrow"
              src="./downArrow.svg"
              height={10}
              width={10}
            />
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------- */}

      <div
        onClick={() => setOpen(!open)}
        className="lg:hidden md:hidden flex p-2 rounded-lg bg-teal-300"
      >
        <h1 className="text-[15px] font-bold px-3">Open Filters</h1>
      </div>

      {/* for mobiles */}
      {open && (
        <div className="gap-7 px-3 lg:hidden bg-teal-200 p-3 rounded-lg flex-col md:hidden absolute flex z-20 items-center">
          {/*  */}

          <div onClick={() => setOpen(!open)} className="bg-teal-100 px-3">
            <h1 className="font-bold text-[20px] px-20">Close</h1>
          </div>

          {/*  */}
          <div className="flex border-b-2 pb-2 flex-col items-center justify-center">
            <h1 className="font-semibold text-[20px]">Preis</h1>
            <Image alt="slider" src="./slider.svg" height={10} width={180} />
          </div>

          {/*  */}
          <div className="flex flex-col w-full py-4 border-b-2 gap-2">
            <div className="flex justify-evenly gap-6">
              <h1 className="font-semibold text-[15px]">Hersteller</h1>
              <Image
                alt="downArrow"
                src="./downArrow.svg"
                height={10}
                width={10}
              />
            </div>

            {/* checkboxes */}
            <div className="flex flex-col gap-3">
              <div className="flex mr-[2.5vw] gap-2">
                <input type="checkbox" id="scales" name="scales" />
                <label className="font-semibold" htmlFor="scales">
                  Scales
                </label>
              </div>

              <div className="flex mr-[2.5vw] gap-2">
                <input type="checkbox" id="scales" name="scales" />
                <label className="font-semibold" htmlFor="scales">
                  Aurora
                </label>
              </div>

              <div className="flex mr-[2.5vw] gap-2">
                <input type="checkbox" id="scales" name="scales" checked />
                <label className="font-semibold" htmlFor="scales">
                  Avaay
                </label>
              </div>

              <div className="flex mr-[2.5vw] gap-2">
                <input type="checkbox" id="scales" name="scales" checked />
                <label className="font-semibold" htmlFor="scales">
                  Bedrocan
                </label>
              </div>

              <div className="flex mr-[2.5vw] gap-2">
                <input type="checkbox" id="scales" name="scales" />
                <label className="font-semibold" htmlFor="scales">
                  Cannamedical
                </label>
              </div>

              <div className="border-teal-200 border-2 flex rounded-tl-3xl justify-center items-center rounded-br-3xl">
                <h1 className="p-1 font-semibold">mehr anzeigen</h1>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex border-b-2 pb-2 py-3 flex-col items-center justify-center">
            <h1 className="font-semibold text-[20px]">THC Gehalt</h1>
            <Image alt="slider" src="./slider.svg" height={10} width={180} />
          </div>

          {/*  */}
          <div className="flex border-b-2 pb-2 py-3 flex-col items-center justify-center">
            <h1 className="font-semibold text-[20px]">CBD Gehalt</h1>
            <Image alt="slider" src="./slider.svg" height={10} width={180} />
          </div>

          {/*  */}
          <div className="flex flex-col py-4 border-b-2 w-full items-center justify-center gap-2">
            <h1 className="font-semibold text-[15px]">Genetik</h1>
            <div className="flex gap-2 w-full justify-center text-[13px]">
              <div className="bg-teal-200 px-3 font-semibold rounded-sm">
                <h1>Indica</h1>
              </div>
              <div className="bg-teal-100 px-3">
                <h1>Sativa</h1>
              </div>
              <div className="bg-teal-100 px-3">
                <h1>Hybrid</h1>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col w-full border-b-2 py-4 items-center justify-center gap-2">
            <h1 className="font-semibold text-[15px]">Bestrahltung</h1>
            <div className="flex gap-2 w-full justify-center text-[13px]">
              <div className="bg-teal-200 px-3 font-semibold rounded-sm">
                <h1>bestrahit</h1>
              </div>
              <div className="bg-teal-100 px-3">
                <h1>nicht bestrahit</h1>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col w-full py-4 border-b-2 gap-2">
            <div className="flex justify-evenly gap-6">
              <h1 className="font-semibold text-[15px]">Terpene</h1>
              <Image
                alt="downArrow"
                src="./downArrow.svg"
                height={10}
                width={10}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
