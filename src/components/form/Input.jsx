/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

export default (props) => {
    const [nome, setNome] = useState('Pedro')
    return (
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome} 
                onChange={e => setNome(e.target.value)} />
        </>
    )
}

// export default (props) => {
//     const [nome, setNome] = useState(10)
//     return (
//         <>
//             <h3>{nome}</h3>
//             <input type="text" value={nome} 
//                 onChange={e => setNome(+e.target.value)} />
//         </>
//     )
// }                           