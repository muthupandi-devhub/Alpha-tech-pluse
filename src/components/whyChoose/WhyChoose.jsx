import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import Background from "./Background";
import WhyChooseContent from "./WhyChooseContent";
import FloatingCards from "./FloatingCards";
import ProcessBar from "./ProcessBar";
import Stats from "./Stats";

export default function WhyChoose() {
  return (
    <section
      className="relative overflow-hidden bg-[#050507] py-36"
    >
      <Background />

      <Container>

        <SectionTitle
          badge="WHY CHOOSE US"
          title="Technology That Accelerates Your Business Growth"
          subtitle="From web development to SEO, digital marketing, and business consulting, we help companies build a stronger digital future."
        />

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

          <WhyChooseContent />

          <FloatingCards />

        </div>

        <Stats />

        <ProcessBar />

      </Container>
    </section>
  );
}