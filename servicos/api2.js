import { api } from "./api";

export async function getPersonagem(nome){
    try {
        const resultado = await api.get(`/search/name/${nome}`)
        return resultado.data
    } catch (error){
        console.log(error)
        return ''
    }

}