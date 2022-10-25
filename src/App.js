import { useEffect, useState } from 'react';
import styles from './App.module.css'
function App() {
  const [data, setData] = useState()

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    fetch('https://alunos.treinaweb.com.br/hyperprof/api/professores', {
      method: 'GET',
    }).then((response) => response.json()).then((data) => {
      setData(data)

    }).catch(() => {
      setData([])
    })

  }, [])

  return (
    <div >
      <header className={styles.header}>
        <img className={styles.image} src="/myteacher.png" alt="my teacher" />
      </header>
      <main className={styles.container}>
        <h1>Encontre o professor perfeito</h1>
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
      </main>
      <footer style={{ textAlign: 'center' }}>
        <p>copyrigth <span>&#169;</span>2022</p>
      </footer>
    </div>
  );
}

export default App;


