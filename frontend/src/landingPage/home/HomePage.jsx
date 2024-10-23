import Awards from "./Awards";
import Eduction from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Eduction />
      <OpenAccount />
    </>
  );
}

export default HomePage;
