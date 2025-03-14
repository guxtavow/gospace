    "use client"
    import { motion } from "framer-motion"
    import { useSearchParams } from "next/navigation"

    export default function Sucess() {
        //parametros da URL que pego do forms para formar tela de sucess
        const searchParams = useSearchParams()
        const flight = searchParams.get("flight")
        const flightName = searchParams.get("flightName")
        const flightDate = searchParams.get("flightDate")
        const name = searchParams.get("name")
        const age = searchParams.get("age")
        const health = searchParams.get("health")
        const flightVideo = searchParams.get("flightVideo")
        const imgInsignia = searchParams.get("flightImg")

        //console.log({ flight, flightName, flightDate, name, age, health, flightVideo, imgInsignia }) // Debugando

        const Dataform = flightDate? new Date(flightDate).toLocaleDateString("pt-BR") : "Data não informada"

        return (
            <div>
                <div className="flex">
                <section
                className="inset-0 relative w-full h-[300px] bg-[url('/background-page.jpg')] bg-cover bg-center text-3xl flex flex-col items-center justify-center h-screen"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }} 
                        animate={{ opacity: 1, y: [0, -30] }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} 
                        className="text-[14vw] font-bold relative text-white"
                    >
                        Sucesso
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: [0, -20] }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 1.5  }}
                        className="text-[2vw] font-bold relative text-gray-300"
                        >
                        Informações importantes do seu voo
                    </motion.h3>
                    <motion.div
                    initial={{ display: "none", scale: 0, y: -40 }}
                    animate={{ display: "flex", scale: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 3.4}}
                    className="flex flex-inline items-center bg-gray-800 p-8 rounded-lg shadow-lg text-white m-10 w-150 h-100 text-[15px]"
                    >
                        <section
                        className="flex flex-col m-[20px]"
                        >
                            {imgInsignia && imgInsignia !== "null" && (
                                <>
                                    <p>Essa é sua insignia!</p>
                                    <img src={imgInsignia} alt="Insignia" className="w-30 h-30" />
                                </>
                            )}
                        </section>
                        <section
                        className="flex flex-col" 
                        >
                            <h2>Voo: {flightName}</h2>
                            <p>Data: {Dataform}</p>
                            <p>Voo ID: {flight}</p>
                            <p>Nome: {name}</p>
                            <p>Idade: {age}</p>
                            <p>Problema de Saude: {health}</p>
                            {flightVideo && flightVideo !== "null" && (
                                <p>
                                    Assista ao webcast do seu voo: 
                                    <a href={flightVideo} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                                    Clique aqui
                                    </a>
                                </p>
                            )}
                        </section>
                    </motion.div>
                </section>
                </div>
            </div>
        )
    }