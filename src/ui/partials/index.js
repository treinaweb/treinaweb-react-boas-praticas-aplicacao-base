
import useIndex from '../../data/hooks/partials/useIndex'
import styles from './style.module.css'



export default function ListaProfessores() {
    const { data, formatter } = useIndex()

    return (

        <>
            {data ? (
                data.length === 0 ? <p>{'Nenhum professor disponível'}</p> : (
                    <div className={styles.box_card}>
                        {data?.map((professor) => {
                            return (
                                <div key={professor.id} className={styles.card}>
                                    <img className={styles.image_card} src={professor.foto_perfil ?? '/person.png'} alt={professor.nome} />
                                    <div className={styles.conteudo_card}>
                                        <div>
                                            <h3 className={styles.title}>{professor.nome}</h3>
                                            <span> {formatter.format(professor.valor_hora)}</span>
                                            <p className={styles.descricao}>
                                                {professor.descricao}
                                            </p>

                                        </div>
                                        <button className={styles.button}>Marcar aula com {professor.nome}</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            ) : (
                <div sx={{ textAlign: "center" }}>
                    <div>Carregando...</div>
                </div>
            )}
        </>

    )
}