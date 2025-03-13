import { useReducer } from "react"

type Action = 
| {type: 'SET_INPUT', field: string, value: string}
| {type: 'SUBMIT' | 'RESET' | 'SUCESS' }

type formState = {
    name: string
    age: number | string
    email: string
    voo: string
    success: boolean
    problemaSaude: string
    isLoading: boolean
}

const initialState : formState = {
    name: '',
    email: '',
    voo: '',
    age: '',
    success: false,
    problemaSaude: '',
    isLoading: false
}
function formReducer(state: formState, action: Action) {
    switch (action.type) {
        case "SET_INPUT":
            return {...state, [action.field]: action.value}
        case 'SUBMIT':
            return {...state, isLoading: true}
        case 'SUCESS':
            return {...state, success: true, isLoading: false}
        // case 'RESET':
        //     return initialState
        default:
            return state
    }
  }


export default function FormData() {
    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const { name, value } = e.target;

        //console.log(`Campo: ${name}, Valor: ${value}`)

        dispatch({
            type: 'SET_INPUT', 
            field: name,
            value: value
        })
    }
    

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()

        dispatch({type: 'SUBMIT'})

        setTimeout(() => {
            dispatch({type: 'SUCESS'})        
        }, 3000)
    }

    return (
        <div 
        className="flex justify-center items-center h-[90vh]"
        >
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center flex-col bg-gray-800 p-8 rounded-lg shadow-lg text-white w-96 h-120 text-[15px]"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Reserve seu Voo Espacial 🚀</h2>

              {/* Seleção de voo */}
              <label className="block mb-2">Selecione o voo:</label>
              <select
                value={state.voo}
                onChange={handleChange}
                name="voo"
                className="w-full p-2 rounded bg-gray-700 text-white"
              >
                <option value="" disabled>Escolha um voo</option>
                <option value="Falcon 9 - Marte">Falcon 9 - Marte</option>
                <option value="Starship - Lua">Starship - Lua</option>
                <option value="Dragon - Estação Espacial">Dragon - Estação Espacial</option>
              </select>

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