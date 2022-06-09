import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";

export function useActivePlans() {
  const [activePlans, setActivePlans] = useState([])
  const {planos} = useContext(GlobalContext)

  useEffect(() => {
    const newActivePlans = planos.filter(el => el.id === 2)
    setActivePlans(newActivePlans)
  }, [planos])

  return [activePlans]
}
