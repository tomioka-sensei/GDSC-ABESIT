import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/Logo.png'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="bg-slate-100 border-t-4 text-gray-800 p-6 w-full">
            <div className='mx-auto p-4 sm:p-6 lg:p-8'>
                <div className='text-center sm:text-left'>
                    <p className='text-xs font-semibold'>Keep In Touch</p>
                    <div className='flex justify-center sm:justify-start items-center gap-3 text-xl text-gray-700 mt-2'>
                        <Link href="#" className='transition hover:scale-105 hover:text-blue-500'><FaFacebook /></Link>
                        <Link href="https://instagram.com/gdscabesit" className='transition hover:scale-105 hover:text-purple-500'><FaInstagram /></Link>
                        <Link href="https://x.com/gdscabesit" className='transition hover:scale-105 hover:text-blue-400'><FaTwitter /></Link>
                        <Link href="https://www.linkedin.com/company/dscabesit/mycompany/" className='transition hover:scale-105 hover:text-blue-700'><FaLinkedinIn /></Link>
                        <Link href="#" className='transition hover:scale-105 hover:text-red-500'><FaYoutube /></Link>
                        <Link href="https://github.com/gdsc-abesit" className='transition hover:scale-105 hover:text-gray-500'><FaGithub /></Link>
                    </div>
                    <p className='text-xs mt-2'>Email us: <a className='text-blue-600 hover:underline' href='mailto:dsc.abesit@gmail.com'>dsc.abesit@gmail.com</a></p>
                </div>
                <hr className="h-px my-4 bg-gray-400 border-0" />
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700'>
                    <div>
                        <div className='mb-3'><Link className='font-bold' href="#">ABOUT</Link></div>
                        <div><Link className='' href="#">GDG Noida</Link></div>
                        <div><Link className='font-light' href="#">Google Developers Group</Link></div>
                        <div><Link className='font-light' href="https://gdsc-abesit.vercel.app/team">Meet the Team</Link></div>
                    </div>
                    <div>
                        <div className='mb-3'><Link className='font-bold' href="#">ABOUT GDSC ABESIT</Link></div>
                        <div><Link className='font-light' href="#">Past Events</Link></div>
                        <div><Link className='font-light' href="#">Upcoming Events</Link></div>
                    </div>
                    <div>
                        <div className='mb-3'><Link className='font-bold' href="#">OTHER LINKS</Link></div>
                        <div><Link className='font-semibold' href="/guidelines">Community Guidelines</Link></div>
                    </div>
                </div>
                <hr className="h-px my-4 bg-gray-400 border-0" />
                <div className='flex flex-col sm:flex-row justify-between items-center select-none'>
                    <div className="font-semibold text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start">
                            <Image src={Logo} alt="logo" width={60} />
                            <h2>Google Developer Student Club</h2>
                        </div>
                        <p className="mt-2 sm:mt-0 text-xs">ABES Institute of Technology</p>
                    </div>
                    <div className='text-center sm:text-right mt-4 sm:mt-0'>
                        <p className='text-xs font-light'>
                            &copy; {year} <span className='font-semibold'>Google Developer Student Club, ABESIT.</span> 
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
