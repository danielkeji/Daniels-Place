import { Home, About, Services, Contact } from "./Pages";
import NavBar from "./Components/NavBar";
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
