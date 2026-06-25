// ─── Static data ──────────────────────────────────────────────────────────────
const teamMembers = [
    { name: "Budi Santoso", role: "Chief Executive Officer", initials: "BS" },
    { name: "Sari Dewi", role: "Head of Sales", initials: "SD" },
    { name: "Andi Pratama", role: "Technical Director", initials: "AP" },
    { name: "Rina Kusuma", role: "Customer Relations", initials: "RK" },
];

function SectionHeader({
    badge,
    title,
    subtitle,
}: {
    badge: string;
    title: React.ReactNode;
    subtitle?: string;
}) {
    return (
        <div className="flex flex-col items-center text-center gap-5 mb-20">
            <span className="inline-flex items-center justify-center gap-2 px-auto py-auto rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(200,169,110,0.06)] text-[10px] font-semibold tracking-[0.35em] uppercase text-[var(--accent)]">
                {badge}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
                {title}
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
            {subtitle && (
                <p className="text-zinc-400 leading-relaxed max-w-lg text-base">{subtitle}</p>
            )}
        </div>
    );
}

function GoldText({ children }: { children: React.ReactNode }) {
    return (
        <span
            style={{
                background: "linear-gradient(135deg, #e8c98a 0%, #c8a96e 55%, #9a7a42 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
            }}
        >
            {children}
        </span>
    );
}

export default function TimPage() {
    return (
        <section
            id="tim"
            className="relative flex flex-col items-center justify-center pt-32 md:pt-44 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-zinc-800/50 mt-10 md:mt-20"
            style={{
                background:
                    "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)",
            }}
        >
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
                aria-hidden="true"
            />

            <div className="relative max-w-6xl mx-auto">
                <SectionHeader
                    badge="The People"
                    title={<>Tim <GoldText>Kami</GoldText></>}
                    subtitle="Profesional berpengalaman yang berdedikasi untuk memberikan yang terbaik bagi Anda."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            id={`team-member-${i + 1}`}
                            className="
                group relative overflow-hidden
                rounded-3xl p-10
                border border-zinc-800/80
                bg-zinc-900/60 backdrop-blur-md
                text-center
                transition-all duration-500 ease-out
                hover:-translate-y-2
                hover:border-[rgba(200,169,110,0.45)]
                hover:shadow-[0_8px_60px_rgba(200,169,110,0.08)]
                cursor-default
                "
                        >
                            <div
                                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: "radial-gradient(ellipse at top, rgba(200,169,110,0.07) 0%, transparent 65%)" }}
                                aria-hidden="true"
                            />

                            <div className="relative flex flex-col items-center gap-4">
                                {/* Avatar ring */}
                                <div
                                    className="relative w-20 h-20 flex items-center justify-center rounded-2xl border-2 transition-all duration-500 group-hover:scale-105"
                                    style={{
                                        background: "rgba(200,169,110,0.06)",
                                        borderColor: "rgba(200,169,110,0.25)",
                                    }}
                                    aria-hidden="true"
                                >
                                    <span
                                        className="text-2xl font-black tracking-tight transition-colors duration-300 group-hover:scale-110 inline-block"
                                        style={{ color: "var(--accent)" }}
                                    >
                                        {member.initials}
                                    </span>
                                    {/* Animated ring on hover */}
                                    <div
                                        className="absolute inset-0 rounded-2xl border-2 border-[rgba(200,169,110,0)] group-hover:border-[rgba(200,169,110,0.5)] scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-base text-white mb-1">{member.name}</h3>
                                    <p className="text-xs text-zinc-500 tracking-widest uppercase">{member.role}</p>
                                </div>

                                {/* Gold line */}
                                <div className="w-8 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-60 group-hover:w-14 transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}