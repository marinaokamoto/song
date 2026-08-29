import { useState } from "react";
import Input1 from "./components/Input1";
import Input2 from "./components/Input2";
import Resumo from "./components/Resumo";


function App() {
  const [etapa, setEtapa] = useState(1);
  const [resumo, setResumo] = useState(null);
  let componenteDaVez;

  if (etapa === 1) componenteDaVez = <Input1 mudarComponente={() => setEtapa(2)} />

  if (etapa === 2) componenteDaVez = 
  (
    <>
      <Input2 mudarComponente={(resumo) => setResumo(resumo)} />
      {resumo && <Resumo />}
    </>
  
  )

  return (<div>{componenteDaVez}</div>);
  
}

export default App;
