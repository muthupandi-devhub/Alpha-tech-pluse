import Container from "../ui/Container";
import HeroVideo from "./HeroVideo";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      <HeroVideo />

      <Container>
        <div className="relative z-20 grid min-h-screen items-center gap-16 pt-28 lg:grid-cols-2">

          <HeroContent />

          <HeroVisual />

        </div>
      </Container>
    </section>
  );
}