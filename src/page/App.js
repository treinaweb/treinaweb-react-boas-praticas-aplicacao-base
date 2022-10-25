import styles from 'src/ui/styles/App.module.css'
import Footer from 'src/ui/components/surfaces/footer';
import Header from 'src/ui/components/surfaces/header';
import ListaProfessores from 'src/ui/partials';
function App() {

  return (
    <div >
      <Header />
      <main className={styles.container}>
        <h1>Encontre o professor perfeito</h1>
        <ListaProfessores />
      </main>
      <Footer />
    </div>
  );
}

export default App;


