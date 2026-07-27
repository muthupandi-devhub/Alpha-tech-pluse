export default function Button({
  children,
}) {
  return (

<button

className="

relative

overflow-hidden

rounded-full

px-8

py-4

font-semibold

bg-gradient-to-r

from-cyan-500

via-blue-600

to-purple-700

transition

duration-300

hover:scale-105

hover:shadow-[0_0_40px_#00F5FF]

"

>

{children}

</button>

  );
}