import CanvasHero from "./components/CanvasHero";
import SectionCarousel from "./components/SectionCarousel";

// ─── Static data ──────────────────────────────────────────────────────────────
const teamMembers = [
  { name: "Budi Santoso", role: "Chief Executive Officer", initials: "BS" },
  { name: "Sari Dewi", role: "Head of Sales", initials: "SD" },
  { name: "Andi Pratama", role: "Technical Director", initials: "AP" },
  { name: "Rina Kusuma", role: "Customer Relations", initials: "RK" },
];

// ─── Reusable: Section badge + heading block ──────────────────────────────────
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
      {/* Badge pill */}
      <span className="inline-flex items-center justify-center gap-2 px-auto py-auto rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(200,169,110,0.06)] text-[10px] font-semibold tracking-[0.35em] uppercase text-[var(--accent)]">
        {badge}
      </span>
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
        {title}
      </h2>
      {/* Gold rule */}
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      {/* Optional subtitle */}
      {subtitle && (
        <p className="text-zinc-400 leading-relaxed max-w-lg text-base">{subtitle}</p>
      )}
    </div>
  );
}

// ─── Reusable: Gold gradient text ─────────────────────────────────────────────
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main id="main-content" className="flex flex-col">

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* NAVBAR                                                              */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5"
        style={{
          background: "linear-gradient(to bottom, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0) 100%)",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          id="nav-logo"
          className="text-base font-bold tracking-[0.25em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          Otomen<span className="text-white/60 font-extralight">Auto</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] uppercase text-zinc-500">
          {[
            ["#about", "Tentang"],
            ["#visi", "Visi"],
            ["#misi", "Misi"],
            ["#layanan", "Layanan"],
            ["#tim", "Tim"],
            ["#kontak", "Kontak"],
          ].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="hover:text-[var(--accent)] transition-colors duration-300 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#kontak"
          id="nav-cta"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase border transition-all duration-500 hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)]"
          style={{ borderColor: "rgba(200,169,110,0.5)", color: "var(--accent)" }}
        >
          Hubungi Kami
        </a>
      </nav>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* HERO CANVAS ANIMATION                                               */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <CanvasHero />

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* CAROUSEL SECTIONS (About, Visi, Misi, Nilai, Layanan)                */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <SectionCarousel />

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* SECTION: TIM (Team)                                                  */}
      {/* ════════════════════════════════════════════════════════════════════ */}
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

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* SECTION: KONTAK (Contact)                                           */}
      {/* ════════════════════════════════════════════════════════════════════ */}
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

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* FOOTER                                                              */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <footer
        className="py-10 px-6 md:px-12 text-center"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid rgba(200,169,110,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <a
            href="#hero"
            className="text-sm font-bold tracking-[0.3em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            Otomen<span className="text-zinc-600 font-extralight">Automotive</span>
          </a>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Otomen Automotive. Semua hak dilindungi.
          </p>
          <p className="text-xs text-zinc-700 font-mono tracking-widest">
            Premium · Trusted · Excellence
          </p>
        </div>
      </footer>
    </main>
  );
}