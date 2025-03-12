"use client"

import { motion } from "framer-motion"

export default function Home() {
  const text: string = "GoSpace"


  return (
    <div>
      <section
        className = "inset-0 relative w-full h-[300px] bg-[url('/background-page.jpg')] bg-cover bg-center text-3xl flex items-center justify-center h-screen"
      >
        {text.split("").map((char: string, index: number) => (
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: -40 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }} 
            className="text-9xl font-bold relative text-white "
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




        <p className="absolute bottom-2 right-2 text-[10px] text-white opacity-70"><a href="https://br.freepik.com/fotos-gratis/panorama-noturno-da-galaxia_13140054.htm#fromView=search&page=3&position=27&uuid=f5d28b5c-4ede-49d9-8e9d-5fca44a3122f&query=espa%C3%A7o+sideral+com+estrelas">Imagem de freepik</a></p>
      </section>
      
      <section className="text-3xl flex items-center justify-center bg-black h-screen ">
        MAIS DA PAGINA
      </section>
    </div>
  )
}
