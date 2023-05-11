import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <nav>
        <img src="" alt="" />
        <Link href={"/blog"} className='text-xl text-blue-500'>Blog</Link>
      </nav>
      <main>
        <h1>My portfolio</h1>
      </main>
    </>
  )
}
