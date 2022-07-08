// import image1 from "./";
import "./App.css";
import { ItemListContainer } from "./views/components/ItemListContainer/ListContainer";
import Navbar from "./views/components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <img src={image1} /> */}
      <Navbar />
      <ItemListContainer greeting="¡La mejor calidad al mejor precio!" />
    </div>
  );
}

export default App;
