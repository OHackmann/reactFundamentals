/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';


export default (props) => (
    <div className="App">

        <Card titulo="#05 - Condicional v2">
            <CondicionalComIf numero={10} />
        </Card>

        <Card titulo="#05 - Condicional v1">
            <Condicional numero={11} />
        </Card>
        
        <Card titulo="#04 - Componente de repeticao">
            <Repeticao />
        </Card>

        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente Com Parametro">
            <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo"/>
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
       
    </div>
);


