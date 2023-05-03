import { useEffect, useState } from 'react';
import comAutorizacao from "@/hoc/comAutorizacao";
import Pessoa from "@/components/Pessoa";

function Home() {
  const [idade, setIdadeSergio] = useState(17);
  const [color, setColor] = useState('blue')

  useEffect(() => {
    setColor('red')
  }, [])

  //Conceito de looping
  const pessoas = [
    {
      nomePessoa: 'Davi',
      idadePessoa: 28
    },
    {
      nomePessoa: 'Camila',
      idadePessoa: 17
    },
    {
      nomePessoa: 'wagner',
      idadePessoa: 23
    }
  ];

  const aumentaIdadeSergio = () => {
    console.log('aumentaIdadeSergio')
    setIdadeSergio(1 + idade)
  }

  return (
    //Variavel com a env publica
    <>
      <div>
        <h1 className={`title ${color}`}>
          Hello World!
        </h1>
        {process.env.NEXT_PUBLIC_TESTE}
      </div>
      <Pessoa nome='Sergio' idade={idade} />
      <Pessoa nome='kennedy' idade={35} />

      {pessoas.map(({ nomePessoa, idadePessoa }, index) => {
        return <Pessoa
          nome={nomePessoa}
          idade={idadePessoa}
          key={index}
        />
      })}
      <button onClick={aumentaIdadeSergio}>Aumenta Idade sergio</button>
    </>
  );
}

export default comAutorizacao(Home)
