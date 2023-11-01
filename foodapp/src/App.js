import "./App.css";
import HeadCards from "./components/HeadCards/HeadCards";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadCards/>
    </div>
  );
}

export default App;
