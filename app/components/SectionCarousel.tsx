"use client";

import * as React from "react";
import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel";

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

// ─── Komponen Utama ───────────────────────────────────────────────────────────
export default function SectionCarousel() {
    // Kita masukkan seluruh section ke dalam sebuah array komponen React
    const carouselSections = [
        // --- 1. SLIDE ABOUT ---
        <section
            key="about"
            id="about"
            className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 md:px-12 lg:px-16 py-20 overflow-hidden w-full"
            style={{ background: "var(--background)" }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                    background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200,169,110,0.05) 0%, transparent 70%)",
                }}
            />
            <div className="relative max-w-7xl justify-center mx-auto w-full">
                <SectionHeader
                    badge="Profil Perusahaan"
                    title={<>Lebih dari sekadar <GoldText>Dealer</GoldText></>}
                    subtitle="Sejak tahun 2009, Otomen Automotive telah menjadi pilihan utama bagi mereka yang menginginkan pengalaman kepemilikan kendaraan premium yang tak tertandingi."
                />
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
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
                        <a
                            href="#kontak"
                            className="mt-2 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)] group"
                        >
                            Konsultasi Gratis
                            <span className="block w-8 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-14" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        {[
                            { value: "15+", label: "Tahun Berpengalaman", sub: "Sejak 2009" },
                            { value: "2,400+", label: "Unit Terjual", sub: "Dan terus bertambah" },
                            { value: "98%", label: "Kepuasan Pelanggan", sub: "Berdasarkan survei" },
                            { value: "50+", label: "Brand Premium", sub: "Tersedia di showroom" },
                        ].map((s) => (
                            <div
                                key={s.label}
                                className="group relative overflow-hidden rounded-2xl p-8 border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-[rgba(200,169,110,0.45)] hover:shadow-[0_0_40px_rgba(200,169,110,0.08)] cursor-default"
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                                    style={{ background: "radial-gradient(ellipse at top left, rgba(200,169,110,0.08) 0%, transparent 65%)" }}
                                    aria-hidden="true"
                                />
                                <div className="relative">
                                    <div className="text-4xl md:text-5xl font-black mb-3 leading-none" style={{ color: "var(--accent)" }}>
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
        </section>,

        // --- 2. SLIDE VISI ---
        <section
            key="visi"
            id="visi"
            className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 md:px-12 lg:px-16 py-20 overflow-hidden w-full"
            style={{ background: "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)" }}
        >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
                <span className="text-[16rem] md:text-[22rem] font-black leading-none opacity-[0.018]" style={{ color: "var(--accent)" }}>
                    VISI
                </span>
            </div>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} aria-hidden="true" />
            <div className="relative max-w-4xl mx-auto w-full">
                <SectionHeader badge="Our Vision" title={<>Visi <GoldText>Kami</GoldText></>} />
                <div className="flex flex-col gap-6">
                    {visiItems.map((item) => (
                        <div
                            key={item.number}
                            className="group relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 p-10 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[rgba(200,169,110,0.45)] hover:shadow-[0_0_50px_rgba(200,169,110,0.06)]"
                        >
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: "radial-gradient(ellipse at left, rgba(200,169,110,0.07) 0%, transparent 60%)" }}
                                aria-hidden="true"
                            />
                            <span className="relative shrink-0 text-5xl font-black leading-none opacity-20 group-hover:opacity-70 transition-all duration-500" style={{ color: "var(--accent)" }}>
                                {item.number}
                            </span>
                            <p className="relative text-zinc-300 text-lg md:text-xl leading-relaxed font-light pt-1">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>,

        // --- 3. SLIDE MISI ---
        <section
            key="misi"
            id="misi"
            className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 md:px-12 lg:px-16 py-20 overflow-hidden w-full"
            style={{ background: "var(--background)" }}
        >
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(200,169,110,0.04) 0%, transparent 70%)" }} />
            <div className="relative max-w-4xl mx-auto w-full">
                <SectionHeader badge="Our Mission" title={<>Misi <GoldText>Kami</GoldText></>} subtitle="Komitmen kami tertuang dalam empat pilar utama yang menjadi landasan setiap keputusan dan tindakan kami." />
                <div className="flex flex-col gap-6">
                    {misiItems.map((item, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 p-10 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[rgba(200,169,110,0.45)] hover:shadow-[0_0_50px_rgba(200,169,110,0.06)]"
                        >
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at left, rgba(200,169,110,0.07) 0%, transparent 60%)" }} aria-hidden="true" />
                            
                            <div className="relative shrink-0 flex items-center justify-center w-16 h-16 rounded-xl border border-[rgba(200,169,110,0.25)] bg-[rgba(200,169,110,0.06)] text-3xl transition-all duration-300 group-hover:border-[rgba(200,169,110,0.5)] group-hover:scale-110" aria-hidden="true">
                                <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                            </div>
                            <div className="relative flex flex-col items-center md:items-start gap-2">
                                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-300 leading-relaxed text-base md:text-lg font-light pt-1">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>,

        // --- 4. SLIDE NILAI ---
        <section
            key="nilai"
            id="nilai"
            className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 md:px-12 lg:px-16 py-20 overflow-hidden w-full"
            style={{ background: "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)" }}
        >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} aria-hidden="true" />
            <div className="relative max-w-4xl mx-auto w-full">
                <SectionHeader 
                    badge="Core Values" 
                    title={<>Nilai-Nilai <GoldText>Kami</GoldText></>} 
                />
                <div className="flex flex-col gap-6">
                    {values.map((v) => (
                        <div
                            key={v.number}
                            className="group relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 p-10 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[rgba(200,169,110,0.45)] hover:shadow-[0_0_50px_rgba(200,169,110,0.06)] cursor-default"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: "radial-gradient(ellipse at left, rgba(200,169,110,0.07) 0%, transparent 60%)" }} aria-hidden="true" />
                            <span className="relative shrink-0 text-5xl font-black leading-none opacity-20 group-hover:opacity-70 transition-all duration-500 select-none pt-1" style={{ color: "var(--accent)" }}>
                                {v.number}
                            </span>
                            <div className="relative flex flex-col items-center md:items-start gap-2">
                                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                                    {v.title}
                                </h3>
                                <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light pt-1">{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>,

        // --- 5. SLIDE LAYANAN ---
        <section
            key="layanan"
            id="layanan"
            className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 md:px-12 lg:px-16 py-20 overflow-hidden w-full"
            style={{ background: "var(--background)" }}
        >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
                <span className="text-[14rem] md:text-[20rem] font-black leading-none opacity-[0.015]" style={{ color: "var(--accent)" }}>
                    SERVICE
                </span>
            </div>
            <div className="relative max-w-4xl mx-auto w-full">
                <SectionHeader badge="What We Offer" title={<>Layanan <GoldText>Kami</GoldText></>} subtitle="Solusi lengkap untuk semua kebutuhan otomotif Anda — dari pemilihan kendaraan ideal hingga purna jual terpercaya." />
                <div className="flex flex-col gap-6">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 p-10 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[rgba(200,169,110,0.45)] hover:shadow-[0_0_50px_rgba(200,169,110,0.06)] cursor-default"
                        >
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at left, rgba(200,169,110,0.07) 0%, transparent 60%)" }} aria-hidden="true" />
                            <div className="relative shrink-0 flex items-center justify-center w-16 h-16 rounded-xl border border-[rgba(200,169,110,0.25)] bg-[rgba(200,169,110,0.06)] text-3xl transition-all duration-300 group-hover:border-[rgba(200,169,110,0.5)] group-hover:scale-110" aria-hidden="true">
                                {service.icon}
                            </div>
                            <div className="relative flex flex-col items-center md:items-start gap-2">
                                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light pt-1">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    ];

    return (
        <div className="relative w-full max-w-[100vw] overflow-hidden bg-[var(--background)]">
            {/* Kita panggil komponen MotionCarousel dari file yang sudah kita edit sebelumnya */}
            <MotionCarousel
                slides={carouselSections}
                options={{
                    align: "center",
                    loop: true
                }}
            />
        </div>
    );
}