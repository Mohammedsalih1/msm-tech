import Image from "next/image";
import NavLinks from "./components/NavLinks";
import Hero from "./components/Hero"

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavLinks />
      <Hero />
    </div>
  );
}
