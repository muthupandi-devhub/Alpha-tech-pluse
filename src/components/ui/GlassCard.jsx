export default function GlassCard({
  children,
}) {
  return (

<div

className="

rounded-3xl

border

border-white/10

bg-white/5

backdrop-blur-xl

p-8

transition

duration-500

hover:scale-[1.03]

hover:border-cyan-400

hover:shadow-[0_0_50px_rgba(0,245,255,.4)]

"

>

{children}

</div>

  );
}