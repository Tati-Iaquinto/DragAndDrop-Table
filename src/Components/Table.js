import React, { useEffect} from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import { useActivePlans } from '../Hooks/useActivePlans';
import '../Style.css';


export const Table = ({tableProps}) => {
  const { dados, setDados} = React.useContext(GlobalContext);
  const [activePlans] = useActivePlans()
  
  useEffect(() => {
    setDados([...tableProps])
 
  }, [tableProps]);

  function removeFile(filename) {
    const novosDados = dados.filter(item => item[0].name !== filename)
    setDados(novosDados)
  }
  return (
    <table>
      <thead>
        <tr className='TableHeader'>
          <th>Nome</th>
          <th>Extensão</th>
          <th>Tamanho</th>
          <th>Excluir</th>
        </tr>
        
      </thead>
        <td>{activePlans[0]?.nome}</td>
      {dados.length > 0
        ?  dados.map(el => (
          <tr key={el[0].name}>
          <td>{el[0].name}</td>
          <td>{el[0].type}</td>
          <td>{el[0].size}</td>
          <td><button onClick={() => removeFile(el[0].name)}>x</button></td>
          </tr>
        ))
        : null
        } 

    </table>
  )
}
export default Table;
