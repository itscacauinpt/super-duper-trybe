import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((ele) => (
          <div key={ele.conteudo} className="card">
            <h3>{`O conteúdo é: ${ele.conteudo}`}</h3>
            <p>{`O status: ${ele.status}`}</p>
            <p>{`bloco: ${ele.bloco}`}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Content;
