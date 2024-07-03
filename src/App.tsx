import Achievements from "./components/Achievements";
import ContactUs from "./components/ContactUs";
import Do from "./components/Do";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Solutions from "./components/Solutions";
import Success from "./components/Success";
import Testimonials from "./components/Testimonials";
import Use from "./components/Use";
import Where from "./components/Where";
import Who from "./components/Who";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievements />
      <Do />
      <Solutions />
      <Who />
      <Use />
      <Success />
      <Testimonials />
      <ContactUs />
      <Where />
      <Footer />
    </>
  );
};

export default App;
