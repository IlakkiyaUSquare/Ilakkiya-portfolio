import './App.css';
import Header from './Component/Header/Header';
import TopContent from './Component/TopContent/TopContent';
import Aboutme from './Component/Aboutme/Aboutme';
import Contact from './Component/Contact/Contact';
import Skills from './Component/Skills/Skills';
function App() {
  return (
    <div className="App">
      <Header />
      <TopContent />
      <Aboutme />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
