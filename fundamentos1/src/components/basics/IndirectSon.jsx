import React, { useState } from 'react';


export default props => {

    const [nome, setNome] = useState('Miranha')

return(
    <div>
        <button onClick={() => {
            props.quandoClicar(nome)
        }}>
            Fornecer informações do aluno
        </button>
    </div>
)
}
