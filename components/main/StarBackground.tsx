"use client"
import React,{useState,useRef,Suspense} from 'react';
// useState: Hook React yang memungkinkan komponen berfungsi memiliki state.
// useRef: Hook React yang digunakan untuk membuat referensi mutable yang dapat digunakan untuk menyimpan nilai dan objek selama hidup komponen.
// Suspense: Komponen React yang memungkinkan penangguhan rendering untuk menangani situasi pengambilan data asinkron atau memuat komponen yang membutuhkan waktu.
import {Canvas,useFrame} from '@react-three/fiber' ;
// Canvas: Komponen utama dari pustaka @react-three/fiber yang menyediakan lingkungan tiga dimensi (3D) menggunakan React.
// useFrame: Hook dari @react-three/fiber yang memungkinkan kita menjalankan fungsi pada setiap frame animasi.
import {Points,PointMaterial,Preload} from '@react-three/drei';
// Points: Komponen dari pustaka @react-three/drei yang memungkinkan kita membuat titik-titik dalam ruang 3D.
// PointMaterial: Material untuk menentukan penampilan titik-titik tersebut.
// Preload: Komponen dari pustaka @react-three/drei yang memungkinkan kita memuat model atau asset sebelum waktu render untuk menghindari penundaan.
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
// Ini mengimpor modul random dari pustaka maath/random. Pustaka ini mungkin digunakan untuk menghasilkan angka acak dan operasi matematika lainnya.

const StarBackground = (props : any) => {
    // Menerima properti (props) sebagai argumen
    const ref: any = useRef()
    // Membuat referensi (ref) yang akan digunakan untuk mengakses dan mengontrol elemen atau objek Three.js di dalam komponen ini.
    const [sphere] = useState(()=> random.inSphere(new Float32Array(5000),{radius:1.2})
    // : Menggunakan useState untuk membuat state sphere, yang berisi posisi koordinat 3D untuk bintang-bintang. Ini menggunakan fungsi random.inSphere untuk menghasilkan koordinat secara acak dalam bola dengan jari-jari 1.2.
    );

    useFrame((state,delta)=> {
        ref.current.rotation.x -= delta/10;
        ref.current.rotation.y -= delta/15;
        // Menggunakan hook useFrame dari Three.js untuk menjalankan fungsi setiap frame. Di dalamnya, mengubah rotasi objek referensi (ref) berdasarkan waktu delta untuk memberikan efek animasi.
    })
  return (
    <group rotation={[0,0, Math.PI / 4]}>
        {/* Membuat grup Three.js dengan rotasi tertentu. Dalam hal ini, grup tersebut diputar sebesar Math.PI/4 radians pada sumbu z. */}
    <Points
    ref={ref}
    positions={sphere}
    stride={3}
    frustumCulled
    {...props}
    //  Menggunakan komponen Points dari Three.js untuk menggambar bintang-bintang. ref digunakan untuk mengontrol rotasi objek. positions adalah array koordinat 3D untuk bintang-bintang. stride adalah jarak antara setiap koordinat. frustumCulled mengoptimalkan performa dengan memastikan objek hanya di-render saat berada dalam frustum kamera.
    >
        <PointMaterial
            transparent
            color="$fff"
            size={0.002}
            sizeAttenuation={true}
            dethWrite={false}
            // Menggunakan materi PointMaterial untuk mengatur sifat visual bintang. Warna diatur menjadi putih (#fff), transparansi diaktifkan, ukuran bintang diatur, dan sizeAttenuation digunakan untuk memastikan perubahan ukuran bintang berdasarkan jarak kamera. depthWrite diatur ke false untuk menghindari penulisan kedalaman saat menggambar bintang, yang berguna dalam efek latar belakang.
        />
    </Points>
</group>
  )
};
const StarsCanvas = () => (
    //  komponen React StarsCanvas yang menggunakan Canvas dari Three.js
    <div className="w-full h-auto fixed inset-0 z-[20]">
        {/* Ini adalah elemen div dengan class yang mengatur ukuran penuh (100% lebar dan tinggi), posisi tetap (fixed), menutupi seluruh layar (inset-0), dan z-index set ke 20. Ini membuat latar belakang bintang menutupi seluruh halaman. */}
        <Canvas camera={{position: [0, 0, 1]}}>
            {/*  Menggunakan komponen Canvas dari Three.js untuk membuat area render 3D. Properti camera digunakan untuk mengatur posisi kamera. Dalam hal ini, kamera ditempatkan pada koordinat [0, 0, 1]. */}
        <Suspense fallback={null}>
            {/* Menggunakan Suspense untuk menangani pembuatan objek Three.js secara asinkron. fallback adalah elemen yang ditampilkan selama objek sedang dimuat. Dalam hal ini, null digunakan, yang berarti tidak ada elemen fallback. */}
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
    // Keseluruhan komponen StarsCanvas digunakan untuk membuat latar belakang bintang yang responsif dan menutupi seluruh halaman dengan menggunakan Three.js. 
)

export default StarsCanvas