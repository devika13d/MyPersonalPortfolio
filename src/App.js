
import './App.css';
import Home from './components/Home';
import Header from './components/pages/Header';
import Services from './components/services/Services';
import Work from './components/Works/Work';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/pages/footer/Footer';
import { useContext } from 'react';
import { themeContxt } from './context';


function App() {
  const { state } = useContext(themeContxt);
  const darkMode=state.darkMode;
  return (
    <div className='App'
      style={{
        background:darkMode?'black':'',
        color:darkMode?'white':''
      }}>
      <Header />
      <Home />
      <Services/>
      <Work/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
