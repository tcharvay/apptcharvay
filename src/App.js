import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Itemlistconteiner from './components/Itemlistcontainer/Itemlistconteiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Itemlistconteiner greeting= {'Hola Mundo'}/>
    </div>
  );
}

export default App;
