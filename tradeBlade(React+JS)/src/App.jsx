import Header from "./components/Header";
import Burger from "./components/Burger";
import Hero from "./components/Hero";
import Numbers from "./components/Numbers";
import Deals from "./components/Deals";
import About from "./components/About";
import PromoSection from "./components/PromoSection";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Burger />
      <main>
        <Hero />
        <Numbers />
        <Deals />
        <About />
        <PromoSection />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
