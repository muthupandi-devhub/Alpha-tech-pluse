    import { features } from "./whyChooseData";

    export default function FeatureCards() {
    return (
        <div className="mt-12 grid grid-cols-2 gap-6">
        {features.map((item) => {
            const Icon = item.icon;

            return (
            <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400"
            >
                <Icon className="text-cyan-400" size={34} />

                <h4 className="mt-5 text-lg font-semibold text-white">
                {item.title}
                </h4>
            </div>
            );
        })}
        </div>
    );
    }