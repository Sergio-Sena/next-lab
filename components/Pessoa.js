/* Codigo para props:
export default function Pessoa(props) {
   return (
       <div className="pessoa">
           <b>nome</b>: {props.nome}
           <br/>
           <br/>
           <b>idade</b>: {props.idade}
           <br/>
           <br/>
       </div >
   );
}*/

//Condicional if/else
export default function Pessoa({ nome, idade }) {
    return (
        <div className="pessoa">
            <b>nome</b>: {nome}
            <br />
            <br />
            <b>idade</b>: {idade}
            <br />
            {idade >= 18 ? (
                <span>Maior de idade</span>

            ) : (
                <span>Menor de idade</span>
            )}
            <br />
            <br />
        </div >
    );
}