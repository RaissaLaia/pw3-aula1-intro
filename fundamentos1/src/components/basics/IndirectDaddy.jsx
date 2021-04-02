import React, { useState } from 'react';

import IndirectSon from './IndirectSon'

export default props => {
    const [curso, setCurso] = useState('Desenvolvimento de sistemas')
    const [aluno, setAluno] = useState('')

    function obterAluno(nome){
        setAluno(nome)
    }
return(
    <div>
        <h3>Curso:{curso}</h3>
        <h3>Aluno:{aluno}</h3>

        <p><IndirectSon quandoClicar={obterAluno}/></p>
    </div>
)
}
