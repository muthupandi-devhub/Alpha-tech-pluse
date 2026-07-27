import Button from "../ui/Button";
import useHeroAnimation from "../../hooks/useHeroAnimation";

export default function HeroContent() {
  useHeroAnimation();

  return (
    <div className="relative z-10 max-w-2xl">

      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 mt-10 px-5 py-2 text-sm text-cyan-300">
        AI • Cloud • Cyber Security
      </span>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
        The Future of{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Intelligent Technology
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg text-gray-300">
        Experience next-generation AI, cloud infrastructure,
        automation, and immersive digital innovation.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <Button>Get Started</Button>
        <Button>Watch Demo</Button>
      </div>

    </div>
  );
}