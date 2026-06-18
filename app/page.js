import Image from "next/image";
import NavLinks from "./components/NavLinks";
import Hero from "./components/Hero"
import AboutUs from "./components/About-us";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact.jsx";
import WhyNeedWebsite from "./components/WhyNeed";
import TrustAndTestimonials from "./components/Testemonals";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavLinks />
      <Hero />
      <AboutUs />
      <WhyNeedWebsite />
      <Services />
      <Portfolio /> 
      <TrustAndTestimonials />
      <Contact />
    </div>
  );
}
