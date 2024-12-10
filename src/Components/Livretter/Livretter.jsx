export const Livretter = ({ Livretter }) => {
    return (
        <ul>
            {Livretter.map((livret, key) => {
                return <li key={key}>{livret}</li>
            })}
        </ul>
    )
}