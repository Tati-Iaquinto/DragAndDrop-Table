import React, { useContext } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
  const [dados, setDados] = React.useState([]);
  const [planos, setPlanos] = React.useState([
    {
      id: 1,
      nome: 'plano doidao'
    },
    {
      id: 2,
      nome: 'plano mais doidão'
    }
  ])

  return <GlobalContext.Provider value ={{dados, setDados, planos, setPlanos}}>{children}</GlobalContext.Provider>
}
