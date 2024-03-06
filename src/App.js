import "./App.css";
import Navbar from "./components/Navbar";
import Workdone from "./components/Whatwedo";
import AboutUs from "./components/Aboutus";

// Only one declaration of the App function should be present
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    <Workdone/>
    <AboutUs/>
    </div>
  );
}

export default App;
