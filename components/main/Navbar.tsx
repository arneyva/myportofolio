import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'
const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            {/* w-full: Menandakan bahwa elemen harus memiliki lebar penuh (100% dari lebar parent).
            h-[65px]: Menetapkan tinggi elemen menjadi 65 piksel. 
             fixed: Membuat elemen memiliki posisi tetap di layar, sehingga tetap terlihat saat pengguna menggulir halaman.
             top-0: Memposisikan elemen di bagian atas layar.
             shadow-lg: Menambahkan bayangan dengan tingkat kejelasan tertentu (bayangan level besar).
             shadow-[#2A0E61]/50: Menambahkan bayangan dengan warna tertentu dan tingkat kejelasan setengah (50%).
             bg-[#03001417]: Menetapkan warna latar belakang dengan kode warna tertentu dan tingkat transparansi.
             backdrop-blur-md: Memberikan efek blur pada elemen
             z-50: Menetapkan indeks z elemen menjadi 50, sehingga dapat tumpang tindih dengan elemen lain.
             px-10: Menetapkan padding horizontal sebesar 10 unit.
            */}
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                {/* 
                h-full: Menandakan bahwa elemen harus memiliki tinggi penuh (100% dari tinggi parent).
                items-center: Menetapkan item-item di dalam flex container untuk berada di tengah secara vertikal.
                justify-between: Menetapkan elemen-elemen anak untuk mendistribusikan ruang secara merata di sepanjang sumbu utama, sehingga elemen di tengah menjadi sejajar.
                m-auto: Menetapkan margin otomatis, sehingga elemen tersebut terpusat di tengah parent (menggunakan margin otomatis pada sumbu vertikal dan horizontal).
                px-[10px]: Menetapkan padding horizontal sebesar 10 piksel.
                */}
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/NavLogo.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin"
                    // cursor-pointer: Menetapkan tanda kursor menjadi pointer ketika diarahkan ke elemen tersebut, memberikan indikasi bahwa itu dapat di-klik.hover:animate-slowspin: Menetapkan animasi dengan nama "slowspin" saat elemen dihover. Ini menunjukkan bahwa ada animasi yang akan dimainkan saat pengguna mengarahkan kursor ke elemen.
                    />
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        {/* ml-[10px]: Menetapkan margin kiri sebesar 10 piksel.
                            hidden: Menyembunyikan elemen di semua ukuran layar.
                            md:block: Memunculkan kembali elemen pada layar dengan ukuran sedang (md: medium) atau lebih besar.
                            text-gray-300: Menetapkan warna teks menjadi abu-abu dengan tingkat kecerahan 300. */}
                        WebChain Dev
                    </span>
                </a>
                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    {/*w-[500px]: Menetapkan lebar elemen menjadi 500 piksel.
                     flex-row: Menetapkan arah tata letak flex menjadi baris, sehingga elemen-elemen anaknya akan sejajar secara horizontal.
                     items-center: Menetapkan item-item di dalam flex container untuk berada di tengah secara vertikal.
                    justify-between: Menetapkan elemen-elemen anak untuk mendistribusikan ruang secara merata di sepanjang sumbu utama, sehingga elemen di tengah menjadi sejajar.
                    md:mr-20: Pada layar dengan ukuran sedang (md: medium) atau lebih besar, menetapkan margin kanan sebesar 20 unit. */}
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        {/* 
                        h-auto: Menandakan bahwa elemen harus memiliki tinggi yang disesuaikan dengan kontennya. 
                        border: Menetapkan border pada elemen.
                        border-[#7042f861]: Menetapkan warna border dengan kode warna tertentu.
                        bg-[#0300145e]: Menetapkan warna latar belakang dengan tingkat transparansi menggunakan kode warna tertentu.
                        mr-[15px]: Menetapkan margin kanan sebesar 15 piksel.
                        px-[20px]: Menetapkan padding horizontal sebesar 20 piksel.
                        py-[10px]: Menetapkan padding vertikal sebesar 10 piksel.
                        rounded-full: Menghasilkan sudut elemen yang bulat (rounded) sehingga elemen terlihat seperti lingkaran ketika memiliki tinggi yang sama dengan lebarnya.
                        text-gray-200: Menetapkan warna teks dengan kode warna tertentu.*/}
                        <a href="#about-me" className="cursor-pointer">
                            About me
                        </a>
                        <a href="#skills" className="cursor-pointer">
                            Skills
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Projects
                        </a>
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        //  Ini adalah loop mapping melalui array Socials(dari index.ts di constans) ada 3
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                        />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Navbar