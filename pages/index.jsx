import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Head from 'next/head'
import PreviousEvents from '../components/PreviousEvents'
import About from '../components/About'
import ProgressBar from '../components/ProgressBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC ABESIT</title>
      </Head>
      <ProgressBar />
      <Navbar />
      <main className={`overflow-hidden bg-[#FAFAFA] ${inter.className}`}>
       
        <Hero />
        {/* Other components */}
        <About />
        <PreviousEvents />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
