import styles from '../ui/styles/App.module.css'
import Footer from '../ui/components/surfaces/footer';
import Header from '../ui/components/surfaces/header';
import ListaProfessores from '../ui/partials';
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


