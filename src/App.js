import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;