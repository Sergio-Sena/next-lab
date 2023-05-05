import Pessoa from "@/components/Pessoa";
import { useState } from "react";


export default function () {
  // Define o estado inicial da idade de Douglas como 15
  let [idade, setIdade] = useState(17);

  // Define uma lista de objetos de pessoas com seus nomes e idades
  const pessoas = [
    {
      nome: 'Davi',
      idade: 28
    },
    {
      nome: 'Camila',
      idade: 22
    },
    {
      nome: 'Wagner',
      idade: 25
    },
    {
      nome: 'Gustavo',
      idade: 30
    },
  ];

  // Incrementa a idade de Douglas em 1 a cada clique no botão
  const incrementaIdadeDouglas = () => {
    setIdade(++idade);
  };

  // Renderiza o componente Pessoa para cada objeto de pessoa na lista
  const renderizaPessoas = () => {
    return pessoas.map(({ nome, idade }) => {
      return <Pessoa
        nome={nome}
        idade={idade}
        key={nome} // Use um ID único para cada elemento
      />
    });
  };

  return (
    <>
      <h1>Olá mundo! {process.env.NEXT_PUBLIC_TESTE}</h1>
      <Pessoa nome="Douglas" idade={idade} />
      <Pessoa nome="Rapha" idade={32} />

      {renderizaPessoas()}

      <button onClick={incrementaIdadeDouglas}>Incremeta Idade Douglas</button>
    </>
  );
}

