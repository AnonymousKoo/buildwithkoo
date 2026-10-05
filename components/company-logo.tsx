import Image from "next/image";

export type CompanySlug = "sekinfra" | "vyral" | "tablegrid" | "hummingbird-storyhouse" | "legacy-consulting" | "yaadbody";

const assets = {
  sekinfra: { src: "/brands/sekinfra.webp", width: 600, height: 155, name: "Sekinfra" },
  tablegrid: { src: "/brands/tablegrid.webp", width: 1200, height: 669, name: "TableGrid" },
  "legacy-consulting": { src: "/brands/legacy.webp", width: 360, height: 360, name: "Legacy Business Consultants" },
  yaadbody: { src: "/brands/yaadbody.webp", width: 1024, height: 1024, name: "YaadBody" },
};

export function CompanyLogo({ slug, compact = false }: { slug: CompanySlug; compact?: boolean }) {
  const className = `company-logo company-logo-${slug}${compact ? " company-logo-compact" : ""}`;
  if (slug === "vyral") {
    return (
      <span className={className} role="img" aria-label="VYRAL logo">
        <svg viewBox="0 0 92 76" aria-hidden="true">
          <path fill="#d7fbff" d="M5 8 28 15 47 52 36 70Z" />
          <path fill="#73ffc2" d="m29 15 17-8 16 13-15 30Z" />
          <path fill="#57dffa" d="m63 19 24-11-14 36-26 26 10-27Z" />
        </svg>
        {!compact ? <span className="company-wordmark">VYRAL</span> : null}
      </span>
    );
  }
  if (slug === "hummingbird-storyhouse") {
    return (
      <span className={className} role="img" aria-label="Hummingbird Storyhouse logo">
        <svg viewBox="0 0 40 40" fill="none" stroke="#a855f7" strokeWidth="0.9" aria-hidden="true">
          <path d="M7 20h11M22 20h11M20 7v26" />
          <path d="M9 20c4-1 8-5 11-11 3 6 7 10 11 11-4 1-8 5-11 11-3-6-7-10-11-11Z" />
          <circle cx="20" cy="20" r="2.5" fill="#ff5c7a" stroke="none" />
        </svg>
        {!compact ? <span className="company-wordmark"><b>Hummingbird</b><small>Storyhouse</small></span> : null}
      </span>
    );
  }
  const asset = assets[slug];
  return (
    <span className={className}>
      <Image src={asset.src} alt={`${asset.name} logo`} width={asset.width} height={asset.height} sizes={compact ? "64px" : "(max-width: 760px) 80vw, 480px"} />
    </span>
  );
}
