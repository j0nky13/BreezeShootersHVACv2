import HeroSection from "../components/home/HeroSection";
import ServicesGrid from "../components/home/ServicesGrid";
import Thermostat from "../components/home/Thermostat";
import Reviews from "../components/home/Reviews";
import BreezeCTA from "../components/home/BreezeCTA";
import ThermostatInfo from "../components/home/ThermostatInfo";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />

      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Thermostat />
        </div>
      </section> */}
      <ThermostatInfo/>

      <Reviews />
      <BreezeCTA />
    </>
  );
}