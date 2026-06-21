import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Research from "@/components/Research";
import Academic from "@/components/Academic";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Research />
        <Academic />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
