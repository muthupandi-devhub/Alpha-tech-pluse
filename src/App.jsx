import Navbar from "./components/layout/Navbar";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import WhyChoose from "./components/whyChoose/WhyChoose";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Pricing from "./components/pricing/Pricing";
import FAQ from "./components/faq/FAQ";
import Contact from "./components/contact/Contact";

import Footer from "./components/layout/footer/Footer";

import FloatingButtons from "./components/ui/FloatingButtons";
import ScrollTop from "./components/ui/ScrollTop";
import Technology from "./components/technologies/Technology";



export default function App() {

  return (

    <>

      <Navbar />


      <main className="pt-20">


        <Hero />

        <About />

        <Services />

        <WhyChoose />
      
        
        <Technology />

        <Portfolio />

        <Testimonials />

        <Pricing />

        <FAQ />

        <Contact />


      </main>


      <Footer />


      {/* Floating Actions */}

      <FloatingButtons />

      <ScrollTop />


    </>

  );

}