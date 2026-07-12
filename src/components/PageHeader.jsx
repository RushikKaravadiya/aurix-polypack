function PageHeader({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-[#0A2146] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_60%)]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#081B3B]/20 to-[#04142E]/50" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl text-center">
        <p className="text-xl font-semibold uppercase tracking-[0.2em] text-[#D4A642] sm:text-3xl sm:tracking-[0.3em] lg:text-4xl">
          {title}
        </p>

        <h1 className="mt-3 text-xs font-medium text-slate-100 sm:mt-4 sm:text-base md:text-lg">
          {subtitle}
        </h1>
      </div>
    </section>
  );
}

export default PageHeader;