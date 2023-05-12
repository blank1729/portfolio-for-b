import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <main className='px-4 md:px-[5%] lg:px-[15%] mt-4'>
        <section>hero section</section>
        <section>Projects section</section>
        <section>Skills section</section>
        <section>Education section</section>
        <section>Contact section</section>
        <h1>My portfolio</h1>
      </main>
    </>
  )
}
