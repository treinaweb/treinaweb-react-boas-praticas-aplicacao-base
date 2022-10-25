export default function Fetch({ data, children }) {
    if (data) {
        if (data.length === 0) {
            return <p>{'Nenhum professor disponível'}</p>
        }
        return children
    }

    return (
        <div sx={{ textAlign: "center" }}>
            <div>Carregando...</div>
        </div>
    )
}