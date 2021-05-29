import "./App.css";
import RealEstateState from "./Context/realEstate/realEstateState";
import Home from "./Components/Home";

function App() {
  return (
    <RealEstateState>
      <Home />
    </RealEstateState>
  );
}

export default App;
