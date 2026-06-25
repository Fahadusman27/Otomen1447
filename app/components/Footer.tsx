export default function Footer() {
    return (
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
    )
}