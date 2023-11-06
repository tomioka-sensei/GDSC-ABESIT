import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { gcsj_data } from "@/Data/gcsj";
import StatisticsSimple from "@/components/Statictics";

const index = () => {
  return (
    <div className="flex flex-col h-fit">
      <Navbar />
      <div>
        <section className="pb-6">
          <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h1 class="max-w-2xl mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-4xl">
              Review of{" "}
              <span class="text-blue-500">Google Cloud Study Jams</span>
            </h1>

            <p class="max-w-4xl mt-6 text-center text-gray-500">
              This year&apos;s Study jams were a blast! And as we come to its end, we&apos;d like to thank everyone who participated in it and made it a success.   
            </p>
          </div>
        </section>
      </div>
      <div className="flex-grow text-black h-fit">
      <h1 class="max-w-2xl text-center mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-4xl">
              Look at the {" "}
              <span class="text-blue-500">Staticstics</span>!
            </h1>
        <StatisticsSimple />
        <div className="md:mx-10">
          <div className="flex justify-end">
            <input
              className="border border-black rounded-xl p-2 text-sm text-black"
              type="text"
              placeholder="Search"
            />
          </div>

          <div className="m-5">
            <div className="bg-slate-400 rounded-xl">
              <div className="flex justify-around font-bold p-3">
                <div className="w-full text-center">S. No.</div>

                <div className="w-full text-center">Name</div>

                <div className="w-full text-center">Email Id</div>

                <div className="w-full text-center">Certificate Link</div>

                <div className="w-full text-center">More Details</div>
              </div>
            </div>

            <div className="bg-slate-200 mt-5 rounded-xl p-3">
              {gcsj_data &&
                gcsj_data.map((data, id) => {
                  return (
                    <div
                      key={id}
                      className="flex justify-around bg-white p-1 my-2 text-sm rounded-lg"
                    >
                      <div className="w-full text-center">{data.id}</div>

                      <div className="w-full text-center">{data.name}</div>

                      <div className="w-full text-center">{data.email}</div>

                      <div className="w-full text-center text-blue-500 hover:text-blue-400 hover:cursor-pointer">
                        Comming Soon
                      </div>

                      <div className="w-full flex justify-center hover:cursor-pointer text-base">
                        <IoIosArrowDropdown />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
