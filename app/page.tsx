import Hero from '@/components/main/Hero'
import HeroContent from '@/components/sub/HeroContent'
import HeroContent2 from '@/components/sub/HeroContent2'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* <a href="">ini buatanya akun arneyva</a> */}
      <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
        <HeroContent/>
        {/* <HeroContent2/> */}
      </div>
    </main>
  )
}
