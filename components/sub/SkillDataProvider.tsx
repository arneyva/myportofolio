"use client";

import React from 'react'
import { motion } from 'framer-motion'
// motion: Sebuah library animasi yang menyediakan komponen animasi untuk React, salah satunya adalah motion.div.
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
// Image: Komponen dari Next.js untuk menangani gambar dengan pengoptimalan yang baik.

type Props = {
    // Anda bisa memberi nama interface dengan type =,untuk props itu terserah,gaa ngaruh di browser.cuma diisi jadi keliatan eoror
    src: string;
    width: number;
    height: number;
    index: number;
    //     src: URL gambar.
    // width: Lebar gambar.
    // height: Tinggi gambar.
    // index: Indeks untuk menentukan urutan animasi.
}
export const SkillDataProvider = ({ src, width, height, index }: Props) => {
    // Menerima props src, width, height, dan index.
    const { ref, inView } = useInView({
        triggerOnce: true
        // jika true maka elment hanya akan dijalankan sekali (saat mamasuki web)
        // false maka elment akan dijalankan setiap kita scroll dibagian itu
        // Menggunakan useInView untuk mendeteksi apakah elemen ini terlihat di dalam viewport.
        // ref digunakan untuk menentukan elemen yang diamati.
        // inView adalah boolean yang menunjukkan apakah elemen tersebut terlihat di dalam viewport.
    })
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
        // Membuat objek imageVariants yang mendefinisikan dua keadaan animasi: hidden dan visible dengan perubahan opasitas.(transparan)
    }
    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt='skill image'
            />
        </motion.div>
    )
}
