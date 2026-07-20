"use client";

import { useEffect } from "react";

export function TallyEmbed({
  id,
  title,
  minHeight = 1180,
  cropTop = 220,
}: {
  id: string;
  title: string;
  minHeight?: number;
  cropTop?: number;
}) {
  const src = `https://tally.so/embed/${id}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  useEffect(() => {
    // Ask Tally's embed script (loaded globally) to initialise/resize this iframe.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.Tally?.loadEmbeds) w.Tally.loadEmbeds();
  }, []);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-paper-line bg-white p-3 shadow-[0_24px_70px_-40px_rgba(15,15,15,0.45)] sm:p-5">
      <iframe
        data-tally-src={src}
        src={src}
        loading="lazy"
        width="100%"
        height={minHeight + cropTop}
        title={title}
        className="w-full"
        style={{ border: 0, marginTop: -cropTop, minHeight: minHeight + cropTop }}
      />
    </div>
  );
}
