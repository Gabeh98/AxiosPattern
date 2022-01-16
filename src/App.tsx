import { useState, useEffect } from 'react';
import call from './service/cliente';

function App() {

  const [cliente,setCliente] = useState();
  console.log(cliente)
  useEffect(()=>{
    call.get().then(response=>{
      const data = response.data;
      setCliente(data);
    })
    call.getById(1).then((response)=>{
      const data = response.data;
      console.log(data)
    })
  }
  ,[])

  return (
    <div className="App">
      <h1>Axios Pattern</h1>
    </div>
  );
}

export default App;
