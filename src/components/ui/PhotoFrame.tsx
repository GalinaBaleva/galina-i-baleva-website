import Image from "next/image";

type Variant = "cyan" | "purple";

interface PhotoFrameProps {
  /** px size of the outer wrapper (default: 300) */
  size?: number;
  /** Accent color for the ring and glow (default: "cyan") */
  variant?: Variant;
  /** When true, the ring spins in reverse (About section) */
  reverse?: boolean;
  /** Image src — falls back to "GB" initials when omitted */
  src?: string;
  alt?: string;
  className?: string;
}

const RING_COLOR: Record<Variant, string> = {
  cyan: "rgba(0,229,255,.3)",
  purple: "rgba(124,77,255,.35)",
};

const DOT_COLOR: Record<Variant, string> = {
  cyan: "var(--accent)",
  purple: "var(--accent2)",
};

const GLOW_COLOR: Record<Variant, string> = {
  cyan: "rgba(0,229,255,.12)",
  purple: "rgba(124,77,255,.12)",
};

export default function PhotoFrame({
  size = 300,
  variant = "cyan",
  reverse = false,
  src,
  alt = "Galina Baleva",
  className = "",
}: PhotoFrameProps) {
  const ringBorder = RING_COLOR[variant];
  const dotBg = DOT_COLOR[variant];
  const glowColor = GLOW_COLOR[variant];

  return (
    <div
      className={className}
      style={{ position: "relative", width: size, height: size, flexShrink: 0 }}
    >
      {/* outer glow */}
      <div
        style={{
          position: "absolute",
          inset: -30,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* spinning dashed ring */}
      <style>{`
        @keyframes photo-spin-fwd { to { transform: rotate(360deg); } }
        @keyframes photo-spin-rev { to { transform: rotate(-360deg); } }
        .photo-ring-fwd { animation: photo-spin-fwd ${variant === "purple" ? 22 : 18}s linear infinite; }
        .photo-ring-rev { animation: photo-spin-rev ${variant === "purple" ? 22 : 18}s linear infinite; }
      `}</style>
      <div
        className={reverse ? "photo-ring-rev" : "photo-ring-fwd"}
        style={{
          position: "absolute",
          inset: variant === "purple" ? -10 : -12,
          borderRadius: "50%",
          border: `2px dashed ${ringBorder}`,
        }}
      >
        {/* accent dot on ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: -5,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: dotBg,
            boxShadow: `0 0 12px ${dotBg}`,
            transform: "translateY(-50%)",
          }}
        />
      </div>

      {/* photo or initials placeholder */}
      <div className="photo-placeholder" style={{ width: size, height: size }}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={`${size}px`}
            style={{ objectFit: "cover", borderRadius: "50%" }}
            priority
          />
        ) : (
          <span className="photo-initials">GB</span>
        )}
      </div>
    </div>
  );
}
