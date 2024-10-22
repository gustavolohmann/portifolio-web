import Header from './components/Header';
import Footer from './components/Footer';
import PortifolioPage from './pages/portifolio-page';
import './styles/App.css';


function App() {
  
  document.title = "Portfólio - Gustavo Lohmann Linz";
  
  return (
    <div className="App">
      <Header />
      
      <PortifolioPage />
      <Footer />
    </div>
  );
}
export default App;
