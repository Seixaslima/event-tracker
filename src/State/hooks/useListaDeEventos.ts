import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../Seletores"

const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventos