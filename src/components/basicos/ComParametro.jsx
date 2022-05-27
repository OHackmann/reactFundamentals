/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>
    // PROPS É SOMENTE LEITURA!!!
    // props.titulo = "Outro Título";
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
        <p>{10 * 10}</p>
    </>