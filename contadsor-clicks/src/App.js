import logo from './logo.png';
import './App.css';
import Contador from'./componentes/Contador';
import Boton from './componentes/Boton';
import { useState } from 'react';

function App() 
{
  const[numclicks, setNumClicks]=useState(0)
  const manejarClick= () => {
    setNumClicks(numclicks+1)

  }
  const reiniciarContador= () => {
    setNumClicks(0)
  }
  return (
    <div className="App">
     <div className="logo-contenedor">
      <img
       className="logo"
       src={logo}
       alt="logo TI"
       />
     </div>

     <div className="contenedor-principal">
      <Contador numCliks={numclicks}/>

      <Boton texto="Click" esBotonClick={true} manejarClick={manejarClick}/>
      <Boton texto="Reiniciar" esBotonClick={false} manejarClick={reiniciarContador}/>

     </div>
    </div>
  );
}

export default App; 
