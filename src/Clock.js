// import React from 'react'

// export default class Clock extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>
//                     Time is {new Date().toLocaleTimeString()}
//                 </h1>
//                 <h3>Testing...</h3>
//             </div>
//         )
//     }
// }
import React from 'react'

export function Clock(props) {
    return (
        <div>
            <h1>Time is {props.date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default function Tick(){
    return (
        <>
        <Clock date={new Date()}/>
        </>
    )
}
