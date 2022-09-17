import logo from './logo.svg';
import './App.css';
import PokemonResult from './Pages/PokemonResult';
// import CardUI from './Components/UI/CardUI';
// import {useGlobalContext} from './Context';
// import ReactPaginate from 'react-paginate';

function App() {
  // const contextData=useGlobalContext();
  return (
    <div className="App">
      {/* <Card/> */}
      {/* <h2>{contextData}</h2> */}
      {/* <ReactPaginate 
      previousLabel={"Previous"}
      nextLabel={"Next"} 
      /> */}
      <PokemonResult />
    </div>
  );
}

export default App;
