import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { gcsj_data } from "@/Common/gcsj";
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


{/* <section class="container p-6 px-4 mx-auto">
    <div class="flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200  md:rounded-lg">
                <div class="mt-6 md:flex md:items-center md:justify-between">
        <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
          
        </div>



        <div class="relative flex items-center mt-4 md:mt-0">
            <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-700 dark:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>

            <input type="text" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-700/70 pl-11 rtl:pr-11 rtl:pl-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
        </div>
    </div>
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-700">
                                    <div class="flex items-center gap-x-3">
                                        <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:ring-offset-gray-900 "/>
                                        <button class="flex items-center gap-x-2">
                                            <span>Invoice</span>

                                            <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-700">
                                    Date
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-700">
                                    Status
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-700">
                                    Participant
                                </th>

                               

                                <th scope="col" class="relative py-3.5 px-4">
                                    <span class="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    <div class="inline-flex items-center gap-x-3">
                                        <input type="checkbox" class="text-blue-500 border-gray-300 rounded dark:ring-offset-gray-900 "/>

                                        <span>#3066</span>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 6, 2022</td>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <h2 class="text-sm font-normal">Paid</h2>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    <div class="flex items-center gap-x-2">
                                        <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        <div>
                                            <h2 class="text-sm font-medium text-gray-800 dark:text-white ">Arthur Melo</h2>
                                            <p class="text-xs font-normal text-gray-600 dark:text-gray-700">authurmelo@example.com</p>
                                        </div>
                                    </div>
                                </td>
                             
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="flex items-center gap-x-6">
                                        <button class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                            Archive
                                        </button>

                                        <button class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                            Download
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-between mt-6">
        <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:text-gray-200  dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                previous
            </span>
        </a>

    

        <div class="items-center hidden md:flex gap-x-3">
            <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60">1</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
        </div>

        <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:text-gray-200  dark:hover:bg-gray-800">
            <span>
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </a>
    </div>
</section> */}