import Features from "../components/Features";
import Navigation from "../components/Navigation";
import Services from "../components/Services";
import Feature from "../components/Feature";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Compteur from "../components/Compteur";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Features />
      <Services />
      <Feature />
      <Testimonials />
      <Compteur />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
