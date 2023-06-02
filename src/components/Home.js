import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Specials from "./Specials"

export default function Home({bookingData}){
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};
