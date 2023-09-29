import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Validation} from './service/Auto';

function App() {
  const imageUrl = ""; 
  const [inputString, setInputString] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [path, setPath] = useState("");

  const handleInputChange = (value) => {
    setInputString(value);
  }

  const handleValidation = () => {
    const { accepted, history } = Validation(inputString);
    const message = accepted ? 
      `La cadena "${inputString}" fue aceptada.` : 
      `La cadena "${inputString}" no fue aceptada.`;
    
    setResultMessage(message);
    setPath("Estados recorridos: " + history.join(" -> "));
  }

  return (
    <div className="h-screen relative justify-center">
      <img className="w-[128px] h-[74px] pt-2" src={imageUrl} alt="Imagen externa" />
      <div className="flex justify-center items- shadow-mdcenter pt-[2%]">
      <p className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-t from-[#77db8a] to-[#58bbc5]">Automatas</p>
      </div>
      <div className=" w-[450px] h-[450px] bg-gradient-to-t from-[#77db8a] from-10% via-[#68caa7] via-30% to-[#58bbc5] to-90% rounded-full absolute inset-0 mx-auto my-auto"></div>
      <div className="w-[850px] h-[550px] absolute inset-0 flex flex-col items-center justify-start backdrop-blur-3xl pt-4
                  backdrop-saturate-[1.8] my-auto mx-auto bg-white/5 shadow-md rounded-lg dark:bg-default-400/10 ">
        <div className="my-8 flex items-center">
          <p className="text-3xl">Numero de lotes de medicamentos</p>      
        </div>
        <div className="min-w-[280px]">
          <Input
            onValueChange={handleInputChange}
            value={inputString}
            type="search"
            color="success"
            label="Codigo"
            placeholder="Ingresa tu codigo"
          />
          <Button  onPress={handleValidation} color="success" variant="ghost" className="mt-2 min-w-[280px] text-white font-bold text-lg">
            Entrada
          </Button>
        </div>
        <div className="min-w-[500px] mt-16">
          <Textarea
            isReadOnly
            label="Descripcion"
            labelPlacement="inside"
            placeholder="Recorrido"
            color="success"
            variant="flat"
            defaultValue={path}
          />        
        </div>
        <p className="text-base">{resultMessage}</p>
      </div>
    </div>
  )
}

export default App;


  /* 
  Codigo a aceptar

  22E131S1
  114EZ039A
  CMXA005
  S23064444
  0786D21
  S2301260
  S2205170
  S2201183
  D43552
  */