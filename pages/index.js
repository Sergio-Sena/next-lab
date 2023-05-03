import Pessoa from "@/components/Pessoa";
import { useState } from "react";


export default function Home() {
  const [idade, setIdadeSergio] = useState(17);

  const aumentaIdadeSergio = () => {
   console.log('aumentaIdadeSergio')
    setIdadeSergio(1+idade)
  }

  return (
    <>
      <h1>Ola mundo!</h1>
      <Pessoa nome='Sergio' idade={idade} />
      <Pessoa nome='kennedy' idade={35} />
      <button onClick={aumentaIdadeSergio}>Aumenta Idade sergio</button>
    </>
  );
}
