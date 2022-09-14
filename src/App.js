import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import CardUI from './Components/UI/CardUI';
import {useGlobalContext} from './Context';

function App() {
  const contextData=useGlobalContext();
  return (
    <div className="App">
      <Card/>
      <h2>{contextData}</h2>
    </div>
  );
}

export default App;
