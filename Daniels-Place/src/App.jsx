import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
