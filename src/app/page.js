'use client'

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";


export default function Home() {
  const [loading, setLoading] = useState(false)
  const container = useRef();
  const { contextSafe } = useGSAP({scope: container});
  const [rotation, setRotation] = useState(null)

  const handleStartGeneration = contextSafe(() => {
    setLoading(true)
    setRotation(null)
  });

  useEffect(() => {
    if(loading){
      handleFakeProgress()
    }
  }, [loading])

  const handleFakeProgress = contextSafe(() => {
    gsap.to(".progress-bar", {
      width: '100%',
      duration: 1,
      onComplete: () => handleGenerateRotation()
    });
  });

  const shuffleArray = (arr) => {
    let currentIndex = arr.length,  randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }

    return arr
  }

  const handleGenerateRotation = () => {
    setLoading(false)

    let rota = shuffleArray(['wrath','wrath','sunfire','moonfire'])

    let part_1 = [rota[0], rota[1], 'starfire']
    part_1 = shuffleArray(part_1)

    let part_2 = [rota[2], rota[3], 'starfire']
    part_2 = shuffleArray(part_2)

    let finalRota = ['starsurge',...part_1,'starsurge',...part_2]
    
    setRotation(finalRota)
  }

  return (
    <main ref={container} className="px-4 py-8">
      <h1 className=' text-center text-2xl mb-4'>Boomie Rotation Helper</h1>
      <div className="flex flex-col justify-center items-center">
        {!loading && rotation && (
          <div className="mb-4 flex flex-wrap justify-center items-center gap-2">
            {rotation.map((spell, index) => (
              <React.Fragment index={index}>
                <Image className="rounded border" src={`/${spell}.jpeg`} width={32} height={32} alt={spell} />
                {index < rotation.length - 1 && (
                  <FiChevronsRight />
                )} 
              </React.Fragment>
            ))}
          </div>
        )}
        {!loading && (
          <button onClick={handleStartGeneration} className=" rounded-lg border border-yellow-400 hover:bg-yellow-400 px-4 py-2">Generate my rotation</button>
        )}
        {loading && (
          <div className=' min-w-80'>
            <p className="text-center mb-2">Charging your new rotation...</p>
            <div className=" h-1 w-full bg-slate-800 rounded-full">
              <div className="progress-bar w-0 h-1 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
