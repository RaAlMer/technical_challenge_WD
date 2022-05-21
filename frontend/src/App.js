import styles from './App.module.scss';
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from './components';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;