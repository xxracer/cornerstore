import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import InformationPills from "./components/InformationPills";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SchemaJsonLd from "./components/SchemaJsonLd";

export default function Home() {
  return (
    <>
      <SchemaJsonLd />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <InformationPills />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
