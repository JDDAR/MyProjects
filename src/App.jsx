import CardsContainer from "./components/cards/CardsContainer";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <section className="container">
        <NavBar />
        <CardsContainer />
        <Footer />
      </section>
    </>
  );
}
export default App;
