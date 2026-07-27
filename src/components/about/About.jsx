import Container from "../ui/Container";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#050507]"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <AboutContent />

          <AboutCards />

        </div>

      </Container>
    </section>
  );
}