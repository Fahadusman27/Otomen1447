import CanvasHero from "./components/CanvasHero";

// ─── Static data ──────────────────────────────────────────────────────────────
const visiItems = [
  {
    number: "01",
    text: "Menjadi dealer otomotif premium terpercaya dan terdepan di Indonesia.",
  },
  {
    number: "02",
    text: "Menghadirkan pengalaman kepemilikan kendaraan yang tak tertandingi.",
  },
  {
    number: "03",
    text: "Membangun ekosistem otomotif yang berkelanjutan dan inovatif.",
  },
];

const misiItems = [
  {
    icon: "◈",
    title: "Kualitas Tanpa Kompromi",
    desc: "Setiap kendaraan melewati inspeksi 150 titik untuk memastikan standar kualitas tertinggi sebelum sampai ke tangan Anda.",
  },
  {
    icon: "◇",
    title: "Layanan Prima",
    desc: "Tim konsultan berpengalaman kami siap mendampingi setiap langkah perjalanan kepemilikan kendaraan Anda.",
  },
  {
    icon: "◉",
    title: "Transparansi Penuh",
    desc: "Informasi lengkap, harga transparan, dan proses yang jujur — karena kepercayaan Anda adalah fondasi kami.",
  },
  {
    icon: "◈",
    title: "Inovasi Berkelanjutan",
    desc: "Selalu beradaptasi dengan teknologi terkini untuk menghadirkan solusi otomotif masa depan.",
  },
];

const values = [
  { number: "01", title: "Integritas", desc: "Kejujuran dan transparansi dalam setiap transaksi" },
  { number: "02", title: "Ekselen", desc: "Standar pelayanan tertinggi di setiap interaksi" },
  { number: "03", title: "Inovasi", desc: "Selalu berada di garis terdepan industri otomotif" },
  { number: "04", title: "Kepedulian", desc: "Memahami kebutuhan unik setiap pelanggan" },
];

const teamMembers = [
  { name: "Budi Santoso", role: "Chief Executive Officer", initials: "BS" },
  { name: "Sari Dewi", role: "Head of Sales", initials: "SD" },
  { name: "Andi Pratama", role: "Technical Director", initials: "AP" },
  { name: "Rina Kusuma", role: "Customer Relations", initials: "RK" },
];

const services = [
  {
    icon: "🚗",
    title: "Penjualan Kendaraan",
    desc: "Koleksi kendaraan premium baru dan bekas pilihan dengan kualitas terjamin.",
  },
  {
    icon: "🔧",
    title: "Servis & Perawatan",
    desc: "Bengkel resmi berteknologi tinggi dengan mekanik bersertifikat internasional.",
  },
  {
    icon: "💳",
    title: "Pembiayaan",
    desc: "Solusi kredit fleksibel dengan suku bunga kompetitif dan proses cepat.",
  },
  {
    icon: "🛡️",
    title: "Asuransi",
    desc: "Proteksi komprehensif dari mitra asuransi terpercaya untuk ketenangan pikiran.",
  },
  {
    icon: "📋",
    title: "Konsultasi",
    desc: "Saran ahli untuk memilih kendaraan yang paling sesuai kebutuhan dan anggaran.",
  },
  {
    icon: "🔄",
    title: "Tukar Tambah",
    desc: "Program tukar tambah menguntungkan dengan valuasi transparan dan proses mudah.",
  },
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
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(200,169,110,0.06)] text-[10px] font-semibold tracking-[0.35em] uppercase text-[var(--accent)]">
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
            ["#about",   "Tentang"],
            ["#visi",    "Visi"],
            ["#misi",    "Misi"],
            ["#layanan", "Layanan"],
            ["#tim",     "Tim"],
            ["#kontak",  "Kontak"],
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
      {/* SECTION: ABOUT                                                      */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section
        id="about"
        className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16 overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200,169,110,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl justify-center mx-auto">
          {/* Section header centered */}
          <SectionHeader
            badge="Profil Perusahaan"
            title={<>Lebih dari sekadar <GoldText>Dealer</GoldText></>}
            subtitle="Sejak tahun 2009, Otomen Automotive telah menjadi pilihan utama bagi mereka yang menginginkan pengalaman kepemilikan kendaraan premium yang tak tertandingi."
          />

          {/* Content + stats */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: text */}
            <div className="flex flex-col items-center text-center gap-6">
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg max-w-lg">
                Kami bukan sekadar menjual mobil — kami menghadirkan gaya hidup.
                Berlokasi di jantung kota, showroom kami menampilkan koleksi eksklusif yang
                dikurasi dengan cermat, dari sedan mewah hingga SUV bertenaga tinggi.
              </p>
              <p className="text-zinc-500 leading-relaxed max-w-lg">
                Setiap kendaraan dalam koleksi kami telah melewati evaluasi ketat untuk
                memastikan bahwa Anda mendapatkan yang terbaik — dalam performa, estetika,
                dan nilai investasi.
              </p>
              {/* Inline CTA */}
              <a
                href="#kontak"
                className="mt-2 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)] group"
              >
                Konsultasi Gratis
                <span className="block w-8 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-14" />
              </a>
            </div>

            {/* Right: stats 2×2 grid */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "15+",    label: "Tahun Berpengalaman", sub: "Sejak 2009" },
                { value: "2,400+", label: "Unit Terjual",        sub: "Dan terus bertambah" },
                { value: "98%",    label: "Kepuasan Pelanggan",  sub: "Berdasarkan survei" },
                { value: "50+",    label: "Brand Premium",       sub: "Tersedia di showroom" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="
                    group relative overflow-hidden
                    rounded-2xl p-8
                    border border-zinc-800/80
                    bg-zinc-900/60 backdrop-blur-md
                    transition-all duration-500 ease-out
                    hover:-translate-y-2 hover:scale-[1.01]
                    hover:border-[rgba(200,169,110,0.45)]
                    hover:shadow-[0_0_40px_rgba(200,169,110,0.08)]
                    cursor-default
                  "
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: "radial-gradient(ellipse at top left, rgba(200,169,110,0.08) 0%, transparent 65%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div
                      className="text-4xl md:text-5xl font-black mb-3 leading-none"
                      style={{ color: "var(--accent)" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-sm font-medium text-zinc-200 mb-1">{s.label}</div>
                    <div className="text-xs text-zinc-600">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* SECTION: VISI                                                       */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section
        id="visi"
        className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)",
        }}
      >
        {/* Ghost watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="text-[16rem] md:text-[22rem] font-black leading-none opacity-[0.018]"
            style={{ color: "var(--accent)" }}>
            VISI
          </span>
        </div>

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
          aria-hidden="true"
        />

        {/* kontainer total */}
        <div className="relative max-w-4xl mx-auto">
          <SectionHeader badge="Our Vision" title={<>Visi <GoldText>Kami</GoldText></>} />

            {/* konteiner card */}
          <div className="flex flex-col gap-6">
            {visiItems.map((item) => (
              <div
                key={item.number}
                id={`visi-item-${item.number}`}
                className="
                  group relative flex items-start text-center gap-8 p-10
                  rounded-2xl border border-zinc-800/80
                  bg-zinc-900/60 backdrop-blur-md
                  transition-all duration-500 ease-out
                  hover:-translate-y-1 hover:border-[rgba(200,169,110,0.45)]
                  hover:shadow-[0_0_50px_rgba(200,169,110,0.06)]
                "
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at left, rgba(200,169,110,0.07) 0%, transparent 60%)" }}
                  aria-hidden="true"
                />
                {/* Number */}
                <span
                  className="relative shrink-0 text-5xl font-black leading-none opacity-20 group-hover:opacity-70 transition-all duration-500"
                  style={{ color: "var(--accent)" }}
                >
                  {item.number}
                </span>
                {/* Text */}
                <p className="relative text-zinc-300 text-lg md:text-xl leading-relaxed font-light pt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* SECTION: MISI                                                       */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section
        id="misi"
        className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16 overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(200,169,110,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            badge="Our Mission"
            title={<>Misi <GoldText>Kami</GoldText></>}
            subtitle="Komitmen kami tertuang dalam empat pilar utama yang menjadi landasan setiap keputusan dan tindakan kami."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {misiItems.map((item, i) => (
              <div
                key={i}
                id={`misi-item-${i + 1}`}
                className="
                  group relative overflow-hidden
                  rounded-3xl p-10
                  border border-zinc-800/80
                  bg-zinc-900/60 backdrop-blur-md
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:scale-[1.01]
                  hover:border-[rgba(200,169,110,0.45)]
                  hover:shadow-[0_8px_60px_rgba(200,169,110,0.08)]
                  cursor-default
                "
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 left-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(200,169,110,0.1) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative flex flex-col items-center text-center gap-5">
                  {/* Icon badge */}
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-[rgba(200,169,110,0.25)] bg-[rgba(200,169,110,0.06)] text-xl transition-all duration-300 group-hover:border-[rgba(200,169,110,0.5)] group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Micro-divider */}
                  <div className="w-10 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40 group-hover:opacity-100 group-hover:w-16 transition-all duration-500" />

                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* SECTION: NILAI (Core Values)                                        */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section
        id="nilai"
        className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Custom Header with slight left alignment for Nilai section */}
          <div className="flex flex-col items-center text-center gap-5 mb-20 lg:ml-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(200,169,110,0.3)] bg-[rgba(200,169,110,0.06)] text-[10px] font-semibold tracking-[0.35em] uppercase text-[var(--accent)]">
              Core Values
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
              Nilai-Nilai <GoldText>Kami</GoldText>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.number}
                id={`nilai-${v.number}`}
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
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: "radial-gradient(ellipse at top, rgba(200,169,110,0.08) 0%, transparent 65%)" }}
                  aria-hidden="true"
                />
                <div className="relative flex flex-col items-center gap-5">
                  {/* Large number */}
                  <span
                    className="text-6xl font-black leading-none opacity-15 group-hover:opacity-50 transition-all duration-500 select-none"
                    style={{ color: "var(--accent)" }}
                  >
                    {v.number}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                    {v.title}
                  </h3>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40 group-hover:opacity-100 group-hover:w-14 transition-all duration-500" />
                  <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* SECTION: LAYANAN (Services)                                         */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section
        id="layanan"
        className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16 overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        {/* Ghost watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="text-[14rem] md:text-[20rem] font-black leading-none opacity-[0.015]"
            style={{ color: "var(--accent)" }}>
            SERVICE
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            badge="What We Offer"
            title={<>Layanan <GoldText>Kami</GoldText></>}
            subtitle="Solusi lengkap untuk semua kebutuhan otomotif Anda — dari pemilihan kendaraan ideal hingga purna jual terpercaya."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                id={`layanan-${i + 1}`}
                className="
                  group relative overflow-hidden
                  rounded-3xl p-10
                  border border-zinc-800/80
                  bg-zinc-900/60 backdrop-blur-md
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:scale-[1.01]
                  hover:border-[rgba(200,169,110,0.45)]
                  hover:shadow-[0_8px_60px_rgba(200,169,110,0.08)]
                  cursor-default
                "
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(200,169,110,0.08) 0%, transparent 60%)" }}
                  aria-hidden="true"
                />

                <div className="relative flex flex-col items-center text-center gap-5">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-2xl border border-[rgba(200,169,110,0.2)] bg-[rgba(200,169,110,0.05)] text-2xl transition-all duration-300 group-hover:border-[rgba(200,169,110,0.5)] group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  {/* Micro-divider */}
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40 group-hover:opacity-100 group-hover:w-14 transition-all duration-500" />
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* SECTION: TIM (Team)                                                 */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section
        id="tim"
        className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16 overflow-hidden"
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
        className="relative py-32 md:py-44 px-6 md:px-12 lg:px-16 overflow-hidden"
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

        <div className="relative max-w-5xl mx-auto text-center">
          <SectionHeader
            badge="Get In Touch"
            title={<>Siap Menemukan <GoldText>Kendaraan Impian?</GoldText></>}
            subtitle="Kunjungi showroom kami atau hubungi tim konsultan kami yang siap membantu Anda menemukan kendaraan yang sempurna sesuai kebutuhan dan anggaran."
          />

          {/* Contact info cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
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
