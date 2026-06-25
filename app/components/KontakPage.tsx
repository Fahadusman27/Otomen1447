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

export default function KontakPage() {
    return (
        <section
            id="kontak"
            className="relative flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 overflow-hidden"
            style={{ background: "var(--background)" }}
        >
            {/* Ambient glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(200,169,110,0.05) 0%, transparent 70%)",
                }}
            />
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
                aria-hidden="true"
            />

            <div className="relative max-w-5xl mx-auto text-center flex flex-col gap-5">
                <SectionHeader
                    badge="Get In Touch"
                    title={<>Siap Menemukan <GoldText>Kendaraan Impian?</GoldText></>}
                    subtitle="Kunjungi showroom kami atau hubungi tim konsultan kami yang siap membantu Anda menemukan kendaraan yang sempurna sesuai kebutuhan dan anggaran."
                />

                {/* Contact info cards */}
                <div className="grid sm:grid-cols-3 gap-6">
                    {[
                        {
                            icon: "📍",
                            label: "Alamat",
                            value: "Jl. Sudirman No. 47\nJakarta Selatan, 12190",
                            id: "contact-address",
                        },
                        {
                            icon: "📞",
                            label: "Telepon",
                            value: "+62 21 5678 9012\nSenin – Sabtu, 08:00–18:00",
                            id: "contact-phone",
                        },
                        {
                            icon: "✉️",
                            label: "Email",
                            value: "info@otomenauto.id\nhello@otomenauto.id",
                            id: "contact-email",
                        },
                    ].map((c) => (
                        <div
                            key={c.label}
                            id={c.id}
                            className="
                group relative overflow-hidden
                rounded-2xl p-8
                border border-zinc-800/80
                bg-zinc-900/60 backdrop-blur-md
                text-center
                transition-all duration-500 ease-out
                hover:-translate-y-1
                hover:border-[rgba(200,169,110,0.45)]
                hover:shadow-[0_4px_40px_rgba(200,169,110,0.07)]
                "
                        >
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: "radial-gradient(ellipse at top, rgba(200,169,110,0.07) 0%, transparent 65%)" }}
                                aria-hidden="true"
                            />
                            <div className="relative flex flex-col items-center gap-3">
                                <div className="text-2xl" aria-hidden="true">{c.icon}</div>
                                <div
                                    className="text-[10px] font-semibold tracking-[0.35em] uppercase"
                                    style={{ color: "var(--accent)" }}
                                >
                                    {c.label}
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
                                    {c.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <a
                        href="tel:+622156789012"
                        id="cta-call"
                        className="
                inline-flex items-center justify-center gap-3
                px-10 py-4 rounded-full
                text-[11px] font-bold tracking-[0.25em] uppercase
                transition-all duration-500 ease-out
                hover:opacity-90 hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(200,169,110,0.3)]
            "
                        style={{ background: "var(--accent)", color: "#000" }}
                    >
                        <span aria-hidden="true">📞</span> Hubungi Sekarang
                    </a>
                    <a
                        href="mailto:info@otomenauto.id"
                        id="cta-email"
                        className="
                inline-flex items-center justify-center gap-3
                px-10 py-4 rounded-full
                text-[11px] font-bold tracking-[0.25em] uppercase
                border transition-all duration-500 ease-out
                hover:bg-[var(--accent)] hover:text-black hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(200,169,110,0.25)]
                hover:border-[var(--accent)]
            "
                        style={{ borderColor: "rgba(200,169,110,0.5)", color: "var(--accent)" }}
                    >
                        <span aria-hidden="true">✉️</span> Kirim Email
                    </a>
                </div>
            </div>
        </section>
    )
}