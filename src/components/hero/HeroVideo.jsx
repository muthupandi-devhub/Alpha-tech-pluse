import heroVideo from "../../assets/videos/hero-bg.mp4";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          scale-110
        "
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/60 to-[#050507]/20" />

      {/* Top Glow */}
      <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Left Purple Glow */}
      <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[180px]" />

      {/* Right Blue Glow */}
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(5,5,7,.9)_100%)]" />

    </div>
  );
}