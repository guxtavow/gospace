import { useReducer } from "react"
import SelectFlight from "./getFly"
import { useRouter } from "next/navigation"

type Flight = { 
  id: string
  name: string
  date_utc: string
  links?: { webcast?: string, 
    patch?: {
      small?: string | null
    } 
  } // Garante que webcast está dentro de links e procura se o objeto tem uma insignia também, além dos outros parametros necessários
}

//types
type Action = 
| {type: 'SET_INPUT', field: string, value: string}
| {type: 'SUBMIT' | 'SUCESS' }

type formState = {
    name: string
    age: number | string
    voo: string
    vooNome: string
    vooData: string
    webcast: string
    insigniaSmall: string
    success: boolean
    problemaSaude: string
    isLoading: boolean
}

//estado inicial de cada parametro
const initialState : formState = {
    name: '',
    voo: '',
    age: '',
    vooNome: '', 
    vooData: '', 
    webcast: '',
    insigniaSmall: '',
    success: false,
    problemaSaude: '',
    isLoading: false
}

//form reducer para n lotar de estados e reutilizar components
function formReducer(state: formState, action: Action) {
    switch (action.type) {
        case "SET_INPUT":
            return {...state, [action.field]: action.value}
        case 'SUBMIT':
            return {...state, isLoading: true}
        case 'SUCESS':
            return {...state, success: true, isLoading: false}
        default:
            return state
    }
}

export default function FormData() {
    const [state, dispatch] = useReducer(formReducer, initialState)
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const { name, value } = e.target;
        dispatch({ type: 'SET_INPUT', field: name, value })
    }    

    //lidando com o envio dos dados
    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()
        dispatch({type: 'SUBMIT'})

        setTimeout(() => {
          router.push(
            `/Sucess?flight=${state.voo}&flightName=${state.vooNome}&flightDate=${state.vooData}&flightImg=${encodeURIComponent(state.insigniaSmall || '')}&flightVideo=${encodeURIComponent(state.webcast || '')}&name=${state.name}&age=${state.age}&health=${state.problemaSaude}`
          )          
        }, 2000)
        dispatch({type: 'SUCESS'})
    }

    //lidando com os inputs para chamar na tela de sucesso
    const handleSelectFlight = (flight: Flight & {links?: { patch? : {small?:string} } }) => {
      dispatch({ type: "SET_INPUT", field: "voo", value: flight.id })
      dispatch({ type: "SET_INPUT", field: "vooNome", value: flight.name })
      dispatch({ type: "SET_INPUT", field: "vooData", value: flight.date_utc })
      dispatch({ type: "SET_INPUT", field: "webcast", value: flight.links?.webcast || '' })
      dispatch({ type: "SET_INPUT", field: "insigniaSmall", value: flight.links?.patch?.small || '' })

    }

    return (
        <div className="flex justify-center items-center h-[90vh]">
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center flex-col bg-gray-800 p-8 rounded-lg shadow-lg text-white w-96 h-120 text-[15px]"
            >
              <h2 className="text-2xl font-bold text-center">Reserve seu Voo Espacial</h2>
              
              {/* Seleção de voo */}
              <label className="block mt-4 mb-2">Selecione sua próxima experiência:</label>
              <SelectFlight onSelect={handleSelectFlight} />

              {/* Nome completo */}
              <label className="block mt-4 mb-2">Nome completo:</label>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Seu nome completo"
                required
              />

              {/* Idade */}
              <label className="block mt-4 mb-2">Idade:</label>
              <input
                type="text"
                name="age"
                value={state.age}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
                placeholder="Digite sua idade"
                required
              />

              {/* Problema de saúde */}
              <label className="block mt-4 mb-2">Possui algum problema de saúde?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="problemaSaude"
                    value="Sim"
                    checked={state.problemaSaude === "Sim"}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  Sim
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="problemaSaude"
                    value="Não"
                    checked={state.problemaSaude === "Não"}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  Não
                </label>
              </div>

              {/* Botão de compra */}
              <button
                type="submit"
                className="w-full mt-6 p-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
              > {state.isLoading ? 'Carregando...' : 'Comprar Ticket 🎟️'}
              </button>

              {state.success && (
                <div>
                    Reserva feita com sucesso! Redirecionando...            
                </div>
              )}
            </form>
        </div>
    )
}
