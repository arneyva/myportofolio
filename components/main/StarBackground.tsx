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
    const ref: any = useRef()
    const [sphere] = useState(()=> random.inSphere(new Float32Array(5000),{radius:1.2})
    );

    useFrame((state,delta)=> {
        ref.current.rotation.x -= delta/10;
        ref.current.rotation.y -= delta/15;
    })
  return (
    <group rotation={[0,0, Math.PI / 4]}>
    <Points
    ref={ref}
    positions={sphere}
    stride={3}
    frustumCulled
    {...props}
    >
        <PointMaterial
            transparent
            color="$fff"
            size={0.002}
            sizeAttenuation={true}
            dethWrite={false}
        />
    </Points>
</group>
  )
};
const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas