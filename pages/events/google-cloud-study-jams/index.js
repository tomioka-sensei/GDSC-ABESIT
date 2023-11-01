import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'
import {gcsj_data} from "@/Data/gcsj"

const index = () => {
    return (
        <div className="flex flex-col h-fit">
            <div>
                <Navbar />
            </div>
            <div className="flex-grow md:mt-24 mt-20 text-black h-fit">
                <div className='text-center'>
                    <div className='text-xl font-bold'>
                        Google Cloud study jams
                    </div>
                </div>

                <div className="md:mx-10">
                    <div className="flex justify-end">
                        <input className='border border-black rounded-xl p-2 text-sm text-black' type='text' placeholder='Search' />
                    </div>

                    <div className='m-5'>
                        <div className="bg-slate-400 rounded-xl">
                            <div className='flex justify-around font-bold p-3'>
                                <div className='w-full text-center'>
                                    S. No.
                                </div>

                                <div className='w-full text-center'>
                                    Name
                                </div>

                                <div className='w-full text-center'>
                                    Email Id
                                </div>

                                <div className='w-full text-center'>
                                    Certificate Link
                                </div>

                                <div className='w-full text-center'>
                                    More Details
                                </div>
                            </div>
                        </div>

                        <div className='bg-slate-200 mt-5 rounded-xl p-3'>
                            {
                                gcsj_data && gcsj_data.map((data, id) => {
                                    return (
                                        <div key={id} className='flex justify-around bg-white p-1 my-2 text-sm rounded-lg'>
                                            <div className='w-full text-center'>
                                                {data.id}
                                            </div>

                                            <div className='w-full text-center'>
                                                {data.name}
                                            </div>

                                            <div className='w-full text-center'>
                                                {data.email}
                                            </div>

                                            <div className='w-full text-center text-blue-500 hover:text-blue-400 hover:cursor-pointer'>
                                                Comming Soon
                                            </div>

                                            <div className='w-full flex justify-center hover:cursor-pointer text-base'>
                                                <IoIosArrowDropdown />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default index
