import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import { SkillDataProvider } from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
            // flex-col diatur kebawah 
            // overflow-hidden: Mengatasi masalah tata letak overflow dengan menyembunyikan kontennya jika melebihi batas kontainer.
            // pb-80: Menetapkan padding bawah sebesar 80 unit (mungkin piksel).
            // py-20: Menetapkan padding vertikal sebesar 20 unit.
            style={{ transform: "scale(0.9" }}
        // transform: Properti ini digunakan untuk menerapkan transformasi pada elemen, seperti rotasi, translasi, dan dalam kasus ini, skala.
        // "scale(0.9)": Ini adalah nilai transformasi yang diterapkan, dalam hal ini, mengindikasikan bahwa elemen tersebut akan discaling dengan faktor 0.9. Ini berarti elemen akan menjadi 90% dari ukuran aslinya.
        >
            <SkillText/>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {/* justify-around: Ini adalah properti yang digunakan untuk mendistribusikan elemen-elemen anak di dalam suatu kontainer fleksibel secara merata, dengan memberikan ruang tambahan di antara elemen-elemen tersebut. Dengan properti ini, ruang akan ditempatkan di antara elemen-elemen dan di sekitar elemen-elemen di tepi kontainer.
                flex-wrap: Properti ini digunakan untuk menentukan apakah elemen-elemen fleksibel harus membalut ke baris baru atau tidak jika tidak cukup ruang di dalam kontainer. Nilai umumnya adalah wrap untuk memungkinkan pemotongan baris (elemen fleksibel membalut) dan nowrap untuk mencegahnya. */}
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {/* justify-around: Ini adalah properti yang digunakan untuk mendistribusikan elemen-elemen anak di dalam suatu kontainer fleksibel secara merata, dengan memberikan ruang tambahan di antara elemen-elemen tersebut. Dengan properti ini, ruang akan ditempatkan di antara elemen-elemen dan di sekitar elemen-elemen di tepi kontainer.
                flex-wrap: Properti ini digunakan untuk menentukan apakah elemen-elemen fleksibel harus membalut ke baris baru atau tidak jika tidak cukup ruang di dalam kontainer. Nilai umumnya adalah wrap untuk memungkinkan pemotongan baris (elemen fleksibel membalut) dan nowrap untuk mencegahnya. */}
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {/* justify-around: Ini adalah properti yang digunakan untuk mendistribusikan elemen-elemen anak di dalam suatu kontainer fleksibel secara merata, dengan memberikan ruang tambahan di antara elemen-elemen tersebut. Dengan properti ini, ruang akan ditempatkan di antara elemen-elemen dan di sekitar elemen-elemen di tepi kontainer.
                flex-wrap: Properti ini digunakan untuk menentukan apakah elemen-elemen fleksibel harus membalut ke baris baru atau tidak jika tidak cukup ruang di dalam kontainer. Nilai umumnya adalah wrap untuk memungkinkan pemotongan baris (elemen fleksibel membalut) dan nowrap untuk mencegahnya. */}
                {Full_stack.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {/* justify-around: Ini adalah properti yang digunakan untuk mendistribusikan elemen-elemen anak di dalam suatu kontainer fleksibel secara merata, dengan memberikan ruang tambahan di antara elemen-elemen tersebut. Dengan properti ini, ruang akan ditempatkan di antara elemen-elemen dan di sekitar elemen-elemen di tepi kontainer.
                flex-wrap: Properti ini digunakan untuk menentukan apakah elemen-elemen fleksibel harus membalut ke baris baru atau tidak jika tidak cukup ruang di dalam kontainer. Nilai umumnya adalah wrap untuk memungkinkan pemotongan baris (elemen fleksibel membalut) dan nowrap untuk mencegahnya. */}
                {Other_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills