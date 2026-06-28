import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClinicOverview from "@/components/ClinicOverview";
import About from "@/components/About";
import Conditions from "@/components/Conditions";
import Treatments from "@/components/Treatments";
import LaserBenefits from "@/components/LaserBenefits";
import Doctors from "@/components/Doctors";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClinicOverview />
        <About />
        <Conditions />
        <Treatments />
        <LaserBenefits />
        <Doctors />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
