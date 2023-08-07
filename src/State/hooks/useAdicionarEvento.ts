import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"
import { obterId } from "../../util"

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento:IEvento) => {
    evento.id = obterId()
    const hoje = new Date()
    if (evento.inicio < hoje) {
      throw new Error("Evento não podem começar antes de hoje")
    }
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
  }
}

export default useAdicionarEvento