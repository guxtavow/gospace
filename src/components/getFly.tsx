import fetchFlys from "@/services/spaceXAPI"
import { useEffect, useState } from "react"


interface Flight { //criar interface para definir os tipos da API
    id: string;
    name: string;
    date_utc: string;
}

const SelectFlight : React.FC = () => {
    const [flights, setFlights] = useState<Flight[]>([]) //tipando resposta da API

    useEffect(() => {
        const getFlights = async () =>{ //criando função para carregar os voos
            try {
                const data = await fetchFlys();
                setFlights(data);
              } catch (error) {
                console.error("Erro ao carregar voos", error);
              }
        }
        getFlights()
    }, [])

    return (
            <select className="flex items-center justify-center flex-col bg-gray-800 p-8 rounded-lg shadow-lg text-white w-80 h-100 text-[15px]">
                <option value="">Escolha sua próxima experiência</option>
                {flights.map(fly => ( //mapeando valores da API
                    <option key={fly.id} value={fly.id}> Voo {fly.name}, marcado para {new Date(fly.date_utc).toLocaleDateString("pt-BR")}</option>
                ))}
            </select>
    )
}

export default SelectFlight