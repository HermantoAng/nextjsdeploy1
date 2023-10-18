'use client'
import React from 'react';

import Image from 'next/image'
// import TypeEffect from './components/typedAnimation/page'


export default function Home() {
  return (
    <main className='flex justify-center flex-col'>
      

      <div className='w-full h-[50vh] relative' >
        <Image className='absolute' src="https://images.unsplash.com/photo-1528916451049-e5d097b61db2?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='none' objectFit="cover" layout="fill"/>
        <div className='bg-black/[.80] w-full h-full absolute'></div>
        <div className='w-full h-full z-10 absolute '> 
          <div className='flex justify-center items-center h-[80%]'>
            {/* Animation Effect on text solve problem*/}
            {/* <TypeEffect/> */}

            <h1 className='text-white'>HOOMNA</h1>
          </div>
        </div>
      </div>

      {/* //// */}
      
      <div className='w-2/3 ml-[15%]'>
        <div className='flex justify-around items-center'>
        
            <div className='bg-black text-white'>
              <p className='p-20'>
                HERO
              </p>
            </div>
            <div className='bg-black text-white'>
              <p className='p-20'>
                HERO
              </p>
            </div>
            <div className='bg-black text-white'>
              <p className='p-20'>
                HERO
              </p>
            </div>

        </div>
      </div>
    <div className='m-10'>
      
      {/* Cards Left */}
    <div className='flex justify-center flex-col py-32'>
      
      <div className='flex justify-evenly w-[80%] h-auto'>
            <div className='bg-black w-[100%] h-[300px] mx-10'>

            </div>
            <div>
              <h1 className='tracking-tight'>Big one Coming Soon!</h1>
              <p className='tracking-tight font-mono text-gray-800 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nostrum corrupti inventore. Porro vitae ratione alias. Nesciunt saepe quod mollitia enim unde. Nulla inventore, quam adipisci officia libero molestias dolorum?</p>

            </div>
        </div>
    </div>

    {/* CARDS Right */}
    <div className='flex justify-center flex-col py-32'>
      
      <div className='flex justify-evenly w-[80%] h-auto'>
            
            <div className='mx-10'>
              <h1 className='tracking-tight'>Big one Coming Soon!</h1>
              <p className='tracking-tight font-mono text-gray-800 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nostrum corrupti inventore. Porro vitae ratione alias. Nesciunt saepe quod mollitia enim unde. Nulla inventore, quam adipisci officia libero molestias dolorum?</p>
            </div>
            <div className='bg-black w-[100%] h-[300px] '>

            </div>
        </div>
    </div>

    </div>
    </main> 
  )
}

