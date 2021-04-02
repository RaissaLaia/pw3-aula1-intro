import React, {Component} from 'react'
import'./App.css'

import IndirectDaddy from './components/basics/IndirectDaddy'
import State from './components/basics/State'
import FamilyClone from './components/basics/FamilyClone'
import FamilyMemberClone from './components/basics/FamilyMemberClone'
import Family from './components/basics/Family'
import Card from './components/layout/Card'
import Properties from './components/basics/Properties'
import HeyWorld from './components/basics/HeyWorld'

class App extends Component{
    render(){
        return(
            <div className="App">
                <h1>Exemplozinho React</h1>
                <div className="Cards">
                    <Card titulo="Comunicação indireta de filho para pai" cor="#f7673b"> 
                    <IndirectDaddy />
                    </Card>

                    <Card titulo="Estado" cor="#ffb400"> 
                    <State />
                    </Card> 

                    <Card titulo="Componentes aninhados (CloneElement)" cor="#82212e"> 
                    <FamilyClone sobrenome="Parker">
                        <FamilyMemberClone nome="Nemo"/>
                        <FamilyMemberClone nome="Peter"/>
                        <FamilyMemberClone nome="Larry"/>
                        <FamilyMemberClone nome="Ziam"/>
                        <FamilyMemberClone nome="Maya"/>                            
                    </FamilyClone>
                    </Card> 

                    <Card titulo="Componentes Aninhados (Comunicação direta)" cor="#d1495b"> 
                    <Family sobrenome="Parker" />
                    </Card> 

                    <Card titulo="Propriedades" cor="#91cb3e"> 
                    <Properties nome="Nemo" sobrenome="Parker" idade="17"/>
                    </Card> 

                    <Card titulo="Aoba mundãozão véi sem portera!" cor="#226ce0"> 
                    <HeyWorld />
                    </Card>
                </div>
            </div>
        )
    }
}
export default App;