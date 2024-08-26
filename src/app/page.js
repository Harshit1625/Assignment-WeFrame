import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="lg:px-60 px-10 md:px-60 py-10">
        <Header />
        <div className="flex justify-between mt-4">
          <div className="flex justify-between p-2">
            {/* Bluten */}
            <div className="flex gap-5 justify-center items-center">
              <Image
                alt="pointIcon"
                src="./pointIcon.svg"
                height={30}
                width={30}
              />
              <h1 className="lg:text-[2vw] md:text-[2vw] text-[20px] font-semibold">
                Blüten
              </h1>
            </div>
          </div>

          {/*  */}
          <div className="flex gap-6 justify-center items-center">
            <div className="bg-gray-100 p-3 px-6 lg:w-[20vw] rounded-full flex">
              <input
                className="bg-gray-100 w-[18vw] placeholder:text-teal-400"
                placeholder="Suchen"
              />
              <Image
                alt="searchIcon"
                src="./searchIcon.svg"
                height={15}
                width={15}
              />
            </div>

            <div className="bg-teal-100 p-2 gap-2 px-3 lg:flex md:flex hidden justify-center items-center">
              <h1 className="text-bold">Sortieren nach</h1>
              <Image
                alt="downArrow"
                src="./downArrow.svg"
                height={12}
                width={12}
              />
            </div>

            <div className="bg-teal-100 p-2 gap-2 px-3 lg:flex md:flex hidden justify-center items-center">
              <h1 className="text-bold">Verfügbarkeit</h1>
              <Image
                alt="dragButton"
                src="./dragButton.svg"
                height={15}
                width={15}
              />
            </div>

            <div className="bg-teal-200 p-2 gap-2 px-2 lg:flex md:flex hidden justify-center items-center">
              <Image alt="list" src="./list.svg" height={15} width={15} />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row mt-[50px] gap-10 justify-evenly">
          <Sidebar />
          <Cards />
        </div>
      </main>
      <Footer />
    </>
  );
}
