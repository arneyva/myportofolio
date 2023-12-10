import Hero from '@/components/main/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* <a href="">ini buatanya akun arneyva</a> */}
      <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
      </div>
    </main>
  )
}
