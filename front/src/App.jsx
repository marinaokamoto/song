import { useState } from "react";
import Input1 from "./components/Input1";
import Input2 from "./components/Input2";


function App() {
  const [etapa, setEtapa] = useState(1);
  let componenteDaVez;

  if (etapa === 1) componenteDaVez = <Input1 mudarComponente={() => setEtapa(2)} />

  if (etapa === 2) componenteDaVez = 
  (
    <>
      <Input2 mudarComponente={() => setEtapa(1)} />
    </>
  
  )

  return (<div>{componenteDaVez}</div>);
  
}

export default App;
