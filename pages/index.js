import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Head from 'next/head'
import PreviousEvents from '../components/PreviousEvents'
import About from '../components/About'
import ProgressBar from '../components/ProgressBar'
import { Children } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC ABESIT</title>
      </Head>
      <ProgressBar />
      <main className={`flex flex-col overflow-hidden bg-gradient-to-tr from-neutral-100 to-stone-100 items-center justify-between ${inter.className}`}>
        <Navbar />
        <Hero />
        <About />
        <PreviousEvents />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
