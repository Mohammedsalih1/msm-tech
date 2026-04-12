import Image from "next/image";
import NavLinks from "./components/NavLinks";
import Hero from "./components/Hero"
import AboutUs from "./components/About-us";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavLinks />
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
}
