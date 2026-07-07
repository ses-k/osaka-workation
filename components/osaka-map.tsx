"use client";

import { useState } from "react";
import { STAYS } from "@/lib/site";
import { useI18n } from "@/components/i18n-provider";

const DISTRICTS = [
  { key: "Umeda", en: "Umeda", ja: "梅田", x: 250, y: 92 },
  { key: "Nakazakicho", en: "Nakazakicho", ja: "中崎町", x: 322, y: 128 },
  { key: "Shinsaibashi", en: "Shinsaibashi", ja: "心斎橋", x: 236, y: 196 },
  { key: "Namba", en: "Namba", ja: "難波", x: 224, y: 244 },
  { key: "Tennoji", en: "Tennoji", ja: "天王寺", x: 268, y: 306 },
];

export function OsakaMap() {
  const { locale, dict } = useI18n();
  const [hover, setHover] = useState<string | null>(null);

  const counts = Object.fromEntries(
    DISTRICTS.map((d) => [d.key, STAYS.filter((s) => s.area.includes(d.key)).length]),
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-paper-line bg-white">
      <svg
        viewBox="0 0 480 360"
        className="h-auto w-full"
        role="img"
        aria-label="Map of stays across Osaka districts"
      >
        {/* base */}
        <rect x="0" y="0" width="480" height="360" fill="#f7ede0" />
        {/* greenery blobs */}
        <circle cx="90" cy="300" r="70" fill="#eADFcB" opacity="0.6" />
        <circle cx="410" cy="70" r="60" fill="#eADFcB" opacity="0.6" />
        {/* river (Yodogawa) */}
        <path
          d="M -20 70 C 120 40, 200 110, 320 80 S 520 110, 520 90 L 520 30 L -20 30 Z"
          fill="#cfe3ea"
          opacity="0.8"
        />
        {/* canal (Dotonbori) */}
        <path
          d="M 150 210 C 210 200, 260 220, 340 205"
          fill="none"
          stroke="#cfe3ea"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* loop line vibe */}
        <ellipse
          cx="250"
          cy="200"
          rx="150"
          ry="120"
          fill="none"
          stroke="#e2c9a6"
          strokeWidth="2"
          strokeDasharray="4 7"
          opacity="0.7"
        />

        {DISTRICTS.map((d) => {
          const on = hover === d.key;
          const label = locale === "ja" ? d.ja : d.en;
          const n = counts[d.key] ?? 0;
          const labelLeft = d.x > 260;
          return (
            <g
              key={d.key}
              onMouseEnter={() => setHover(d.key)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: "pointer" }}
            >
              {/* halo */}
              <circle
                cx={d.x}
                cy={d.y}
                r={on ? 20 : 0}
                fill="#ea5504"
                opacity="0.14"
                style={{ transition: "r 0.2s ease" }}
              />
              {/* pin */}
              <circle
                cx={d.x}
                cy={d.y}
                r={on ? 10 : 7}
                fill="#ea5504"
                stroke="#ffffff"
                strokeWidth="3"
                style={{ transition: "r 0.2s ease" }}
              />
              {/* label */}
              <text
                x={labelLeft ? d.x - 16 : d.x + 16}
                y={d.y - 2}
                textAnchor={labelLeft ? "end" : "start"}
                className="fill-brand-ink"
                fontSize="16"
                fontWeight="700"
              >
                {label}
              </text>
              <text
                x={labelLeft ? d.x - 16 : d.x + 16}
                y={d.y + 15}
                textAnchor={labelLeft ? "end" : "start"}
                className="fill-brand-orange"
                fontSize="12"
                fontWeight="600"
              >
                {n} {dict.pages.stays.mapStaysLabel}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
