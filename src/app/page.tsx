import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden pb-20"
        style={{ padding: '100px clamp(24px,8vw,120px) 80px' }}
      >
        {/* Mesh grid background */}
        <div className="absolute inset-0 mesh-grid pointer-events-none" />

        {/* Glow blobs */}
        <div
          className="blob"
          style={{
            width: 520,
            height: 420,
            right: -80,
            top: -60,
            background: "radial-gradient(ellipse, rgba(124,77,255,.22), transparent 70%)",
          }}
        />
        <div
          className="blob"
          style={{
            width: 380,
            height: 320,
            left: -40,
            bottom: 80,
            background: "radial-gradient(ellipse, rgba(0,229,255,.14), transparent 70%)",
            animationDelay: "-5s",
          }}
        />

        {/* Hero layout */}
        <div className="relative z-10 flex flex-col-reverse items-center gap-10 w-full md:flex-row md:justify-between md:gap-[60px]">

          {/* Text */}
          <div className="max-w-[700px]">
            {/* Status badge */}
            <div className="badge-accent inline-flex items-center gap-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-[pulse_2s_ease-in-out_infinite]" />
              Отворена за нови проекти
            </div>

            {/* Name */}
            <h1 className="font-heading text-[clamp(42px,7vw,82px)] font-bold text-white leading-[1.05] tracking-[-0.04em] mb-3">
              Галина Балева
            </h1>

            {/* Role */}
            <div className="gradient-text font-heading text-[clamp(22px,3.5vw,40px)] font-semibold leading-[1.2] tracking-[-0.02em] mb-6">
              Full-Stack Developer &amp;<br></br> ИИ интегратор &amp; SEO&amp;GEO Specialist
            </div>

            {/* Description */}
            <p className="text-muted text-base leading-[1.8] max-w-[520px] mb-10">
              Изграждам мащабируеми уеб приложения, интегрирам ИИ решения и оптимизирам за търсачки — с фокус върху скорост, чистота и резултат.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3.5">
              <Button href="#projects">Моите проекти</Button>
              <Button href="#contact" variant="outline">Свържи се с мен</Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-[var(--border)]">
              {[
                { value: "5",   suffix: "+", label: "Години опит" },
                { value: "30",  suffix: "+", label: "Завършени проекти" },
                { value: "100", suffix: "%", label: "Доволни клиенти" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-[32px] font-bold text-white tracking-[-0.03em]">
                    {stat.value}<span className="text-accent">{stat.suffix}</span>
                  </div>
                  <div className="text-[12px] text-muted tracking-[0.04em] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex-shrink-0 w-[220px] h-[220px] md:w-[300px] md:h-[300px]">
            <div className="photo-glow" />
            <div className="photo-ring" />
            <div className="photo-placeholder">
              <span className="photo-initials">ГБ</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-muted animate-[fadeUpDown_2.5s_ease-in-out_infinite] pointer-events-none">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="opacity-50"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          Scroll
        </div>
      </section>
    </main>
  );
}
