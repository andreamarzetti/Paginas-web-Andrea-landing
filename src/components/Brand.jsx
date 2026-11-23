import { BRAND_MARK } from "../data/site";

/** Propuesta vectorial del isotipo en V (pendiente de aprobación). */
export function VMarkSvg({ className = "", title }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 66"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <linearGradient id="vk-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1d3fd6" />
          <stop offset=".55" stopColor="#2563eb" />
          <stop offset="1" stopColor="#22b8ee" />
        </linearGradient>
        <linearGradient id="vk-green" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#1fb6d9" />
          <stop offset=".5" stopColor="#2fd39a" />
          <stop offset="1" stopColor="#7ef25c" />
        </linearGradient>
        <linearGradient id="vk-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".6" stopColor="#d6e6f2" />
          <stop offset="1" stopColor="#a9dbe6" />
        </linearGradient>
      </defs>
      <path fill="url(#vk-blue)" fillRule="evenodd" d="M4 2H82L60 64Z M20 10H72L53 44Z" />
      <path fill="url(#vk-silver)" d="M30 16H44L54 30L72 8H84L54 44Z" />
      <path fill="url(#vk-green)" d="M60 64L50 52L96 2H116Z" />
    </svg>
  );
}

/** Isotipo según la configuración de marca. */
export function BrandMark({ className = "" }) {
  if (BRAND_MARK === "svg") return <VMarkSvg className={`brand-mark-svg ${className}`} />;
  return (
    <span className={`brand-mark-original ${className}`} aria-hidden="true">
      <img src="/assets/brand/isotipo-original.png" alt="" width="465" height="290" />
    </span>
  );
}

export function Wordmark({ as: Tag = "a", href = "#inicio", className = "" }) {
  return (
    <Tag className={`brand ${className}`} href={href} aria-label="Vektra Tech, ir al inicio">
      <BrandMark />
      <span className="brand-text">
        Vektra<span className="brand-pill">Tech</span>
      </span>
    </Tag>
  );
}
