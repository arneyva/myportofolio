"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const HeroContent = () => {
  return (
    <motion.div
      // atribut jsx react
      // Saat komponen pertama kali dimuat, elemen tersebut akan memiliki keadaan awal tersembunyi (hidden).
      initial="hidden"
      // nimasi yang akan dijalankan ketika elemen tersebut menjadi terlihat atau terungkap (visible).
      animate="visible"
      // flex: Mengaktifkan model tata letak flexbox.
      // flex-row: Menetapkan arah tata letak menjadi baris.(kebawah)
      // items-center: Mengatur item secara vertikal di tengah.
      // justify-center: Mengatur konten secara horizontal di tengah.
      // px-20: Menetapkan padding horizontal sebesar 20 unit.
      // mt-40: Menetapkan margin atas sebesar 40 unit.
      // w-full: Mengatur lebar elemen menjadi penuh (100% dari lebar induknya).
      // z-[20]: Menetapkan indeks z menjadi 20, yang dapat mempengaruhi tumpukan z-order dalam tata letak. 
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >

      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* h-full: Mengatur tinggi elemen menjadi 100% dari tinggi induknya.
            w-full: Mengatur lebar elemen menjadi 100% dari lebar induknya.
            flex: Mengaktifkan model tata letak flexbox.
            flex-col: Menetapkan arah tata letak menjadi kolom. Ini berarti elemen-elemen anak akan ditata secara vertikal.
            gap-5: Menetapkan jarak antara elemen-elemen anak (jika ada) sebesar 5 unit.
            justify-center: Mengatur konten secara horizontal di tengah.
            m-auto: Menetapkan margin otomatis. Ini sering digunakan untuk memusatkan elemen di tengah secara vertikal dan horizontal.
            text-start: Mengatur tata letak teks atau konten teksnya di sebelah kiri. */
        }
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]"
        // Welcome-box: Ini mungkin merupakan kelas yang mengelompokkan dan memberikan gaya khusus kepada elemen yang dimaksud, mungkin sebagai bagian dari desain atau gaya tertentu.
        // py-[8px]: Menetapkan padding vertikal sebesar 8 piksel.
        // px-[7px]: Menetapkan padding horizontal sebesar 7 piksel.
        // border: Menambahkan garis tepi pada elemen.
        // border-[#7042f88b]: Menetapkan warna garis tepi menggunakan kode warna tertentu (dalam hal ini, #7042f88b). Format kode warna ini mungkin menggunakan model RGBA, di mana "8b" menunjukkan tingkat transparansi.
        // opacity-[0.9]: Menetapkan tingkat kejernihan (opacity) elemen menjadi 0.9 atau 90%. Semakin tinggi nilai, semakin tidak transparan elemen tersebut.
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          {/* text-[#b49bff]: Mengatur warna teks ikon menggunakan kode warna tertentu. Dalam hal ini, warnanya adalah #b49bff.
              mr-[10px]: Menetapkan margin kanan (right margin) sebesar 10 piksel. Ini mungkin digunakan untuk memberikan ruang antara ikon dan elemen lain di sebelah kanan.
              h-5: Menetapkan tinggi ikon sebesar 5 unit. Ini bisa dalam satuan piksel, tetapi karena menggunakan Tailwind CSS, kemungkinan menggunakan unit yang telah didefinisikan oleh Tailwind.
              w-5: Menetapkan lebar ikon sebesar 5 unit. Sama seperti sebelumnya, ini kemungkinan menggunakan unit yang telah didefinisikan oleh Tailwind. */}
          <h1 className="Welcome-text text-[13px]">FullStack Developer Portofolio</h1>
        </motion.div>
      </div>

    </motion.div>
  )
}

export default HeroContent