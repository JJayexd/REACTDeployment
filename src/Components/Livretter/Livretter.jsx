// export const Livretter = () => {
//     return (
//         <ul>
//             {LivretterA.map((livret) => {
//                 return <li>{livret}</li>
//             })}
//         </ul>
//     )
// }

export const Livretter = ({ Livretter }) => {
    return (
        <ul>
            {Livretter.map((livret) => {
                return <li key={livret}>{livret}</li>
            })}
        </ul>
    )
}