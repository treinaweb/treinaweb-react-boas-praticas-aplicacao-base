
import useIndex from 'src/data/hooks/partials/useIndex'
import CardProfessor from 'src/ui/components/cards/cardProfessor'
import Fetch from 'src/ui/components/feedback/fetch'
import styles from './style.module.css'

export default function ListaProfessores() {
    const { data } = useIndex()

    return (
        <Fetch data={data}>
            <Professores professores={data} />
        </Fetch>
    )
}

function Professores({ professores = [] }) {
    return (
        <div className={styles.box_card}>
            {professores?.map((professor) => {
                return (
                    <CardProfessor key={professor.id} professor={professor} />
                )
            })}
        </div>

    )
}