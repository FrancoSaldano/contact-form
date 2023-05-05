import { Inter } from "next/font/google"
import PostgreForm from '../components/PostgreForm'


const inter = Inter({ subsets: ["latin"] })


export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen flex flex-col items-center p-8 gap-10`}>
      <h2 className='mb-6 text-xl text-gray-600 font-bold'>Contacta conmigo</h2>
      <PostgreForm />
    </main>
  )
}
