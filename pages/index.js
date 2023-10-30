import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Image from 'next/image'
import image2 from '@/assets/image2.png'
import Head from 'next/head'
import PreviousEvents from '@/components/PreviousEvents'
import About from '@/components/About'
import ProgressBar from '@/components/ProgressBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC ABESIT</title>
      </Head>
      <ProgressBar />
      <main className={`flex flex-col bg-gradient-to-tr from-slate-100 to-stone-100 items-center justify-between ${inter.className}`}>
        <Navbar />
        <Hero />
        {/* Other components */}
        <About />
        <PreviousEvents />
        <Image src={image2} />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
