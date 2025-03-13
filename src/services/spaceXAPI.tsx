export default async function fetchFlys(){
    const response = await fetch("https://api.spacexdata.com/v4/launches/upcoming")
    if (!response.ok) {
      throw new Error("Erro ao buscar voos")
    }
    
    return response.json()
}