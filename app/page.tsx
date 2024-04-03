import Encryption from '@/components/main/Encryption'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Project'
import Skills from '@/components/main/Skills'
import HeroContent from '@/components/sub/HeroContent'
import HeroContent2 from '@/components/sub/HeroContent2'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        {/* <HeroContent/> */}
        <Encryption />
        <Projects />

      </div>
    </main>
  )
}
