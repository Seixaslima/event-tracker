import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento"

const useAtualizarEvento =  () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) => {
    return setListaDeEventos(listaAntiga => {
      const index = listaAntiga.findIndex(evt => evt.id === evento.id)
      return [...listaAntiga.slice(0, index), evento, ...listaAntiga.slice(index + 1)]
    })
  }
}

export default useAtualizarEvento