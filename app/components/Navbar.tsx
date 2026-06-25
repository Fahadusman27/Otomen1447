export default function Navbar() {
    return (
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
    )
}