"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import FormData from "@/components/formData"
import Head from "next/head"
export default function Home() {
  const text : string = "GoSpace"
  const subText: string = "Sua jornada nas estrelas começa aqui"
  const [isform, setIsForm] = useState(false)
  
  return (
    <>
    <Head>GoSpace</Head>
    <div>
      <section
        className = "inset-0 relative w-full h-[300px] bg-[url('/background-page.jpg')] bg-cover bg-center text-3xl flex flex-col items-center justify-center h-screen"
      >
      {isform ? (
       <> 
       {/* forms */}
         {/* Container do forms para animação */}
        <motion.div
        initial={{ scale: 0, y: -40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="flex-col items-center justify-center h-[90vh] w-[80vh] bg-gray-900 rounded-lg"
        >
          {/* Formulario */}
          <motion.section
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
          >
            <FormData />
          </motion.section>
        </motion.div>
        
       </> 
      ):(
        <>
        {/* home page inicial */}
        <div className="flex"> {/* Container texto para animações */}
        {text.split("").map((char: string, index: number) => (
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: -40 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }} 
            className="text-[14vw] font-bold relative text-white"
          >
            <motion.span
              animate={{opacity:[1, 0.4 ,1], y: 0 }}
              transition={{ duration: 2.3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.8, delay: 1.1 + index * 0.3 }}
              className="inset-0 bg-clip-text bg-gradient-to-r text-white-900"
              >
                {char}
            </motion.span>
          </motion.h1>
        ))}
        </div>

        {/* Subtexto animado */}
        <div className="flex mt-4">
            <motion.p      
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.6 }} 
              className="text-[2vw] font-light relative text-gray-100"
            >
              <motion.span
                animate={{ opacity: [1, 0.4, 1], y: 0 }}
                transition={{ duration: 2.3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.8, delay: 1.4}}
                className="inset-0 bg-clip-text bg-gradient-to-r text-gray-100"
              >
                {subText}
              </motion.span>
            </motion.p>
        </div>
        
        <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
        >
          <button 
          className="w-[9vw] h-[7vh] m-[16px] text-[1vw] text-white font-bold cursor-pointer bg-blue-500 rounded-[20px] hover:bg-blue-700 hover:text-white hover:scale-105 transition duration-500 ease-in-out"
          onClick={() => setIsForm(true)}
          >
            Conhecer a<br />Galáxia
          </button>
        </motion.span>

        </>
      )}  
        <p className="absolute bottom-2 right-2 text-[10px] text-white opacity-70"><a href="https://br.freepik.com/fotos-gratis/panorama-noturno-da-galaxia_13140054.htm#fromView=search&page=3&position=27&uuid=f5d28b5c-4ede-49d9-8e9d-5fca44a3122f&query=espa%C3%A7o+sideral+com+estrelas">Imagem de freepik</a></p>
      </section>
    </div>
    </>
  )
}
