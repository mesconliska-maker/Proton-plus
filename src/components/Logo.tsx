import { C } from "../theme";

/**
 * Vector re-creation of the original PROTON PLUS logo (green house sketch,
 * red "PROTON", outlined green "PLUS" with (R), small "spol. s r.o.").
 * variant "light" is tuned for dark backgrounds (white "PROTON").
 */
export function Logo({
  variant = "color",
  height = 44,
  className,
}: {
  variant?: "color" | "light";
  height?: number;
  className?: string;
}) {
  const green = variant === "light" ? "#4CC272" : C.brandGreen;
  const red = variant === "light" ? "#FFFFFF" : C.brandRed;
  const sub = variant === "light" ? "rgba(237,239,238,0.7)" : C.brandRed;
  const w = Math.round(height * (300 / 120));
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 300 120"
      className={className}
      role="img"
      aria-label="PROTON PLUS, spol. s r.o."
    >
      {/* house sketch */}
      <g fill="none" stroke={green} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 58 L58 12 L112 58" />
        <path d="M22 12 v14" strokeWidth="5" />
        <path d="M22 12 h10 v6" strokeWidth="5" />
        <path d="M30 60 v-18 M86 60 v-18" strokeWidth="5" />
        <path d="M16 66 C40 62 70 62 100 66" strokeWidth="5" />
        <rect x="47" y="40" width="20" height="20" rx="1" strokeWidth="4" />
        <path d="M57 40 v20 M47 50 h20" strokeWidth="3" />
      </g>
      {/* wordmark */}
      <text
        x="6"
        y="104"
        fontFamily="'IBM Plex Sans', 'Arial Black', Arial, sans-serif"
        fontWeight="800"
        fontSize="40"
        letterSpacing="-1"
        fill={red}
      >
        PROTON
      </text>
      <text
        x="176"
        y="104"
        fontFamily="'IBM Plex Sans', 'Arial Black', Arial, sans-serif"
        fontWeight="800"
        fontSize="40"
        letterSpacing="-1"
        fill="none"
        stroke={green}
        strokeWidth="2.2"
      >
        PLUS
      </text>
      <circle cx="288" cy="70" r="7" fill="none" stroke={green} strokeWidth="1.6" />
      <text
        x="288"
        y="73.3"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill={green}
      >
        R
      </text>
      <text
        x="182"
        y="118"
        fontFamily="'Inter', Arial, sans-serif"
        fontWeight="700"
        fontSize="11.5"
        letterSpacing="0.5"
        fill={sub}
      >
        spol. s r.o.
      </text>
    </svg>
  );
}

/** Green house mark only (favicon / small badges). */
export function LogoMark({ size = 32, color = C.brandGreen }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 34 L32 10 L58 34" />
        <path d="M16 12 v9" strokeWidth="4.5" />
        <path d="M16 12 h7 v3" strokeWidth="4.5" />
        <path d="M16 36 v16 M48 36 v16" strokeWidth="4.5" />
        <path d="M10 56 C24 53 40 53 54 56" strokeWidth="4.5" />
        <rect x="25" y="30" width="14" height="14" rx="1" strokeWidth="3.5" />
      </g>
    </svg>
  );
}
