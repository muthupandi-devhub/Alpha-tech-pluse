import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050507] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.06]
        [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
        [background-size:60px_60px]
      "
      />

      <Container>
        <SectionTitle
          badge="Our Services"
          title="Digital Solutions That Move Your Business Forward"
          subtitle="From modern websites and SEO to digital marketing and business consulting, we help businesses build a stronger digital presence and achieve sustainable growth."
        />

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}