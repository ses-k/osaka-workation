"use client";

import { useEffect } from "react";

export function TallyEmbed({ id, title }: { id: string; title: string }) {
  const src = `https://tally.so/embed/${id}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  useEffect(() => {
    // Ask Tally's embed script (loaded globally) to initialise/resize this iframe.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.Tally?.loadEmbeds) w.Tally.loadEmbeds();
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-paper-line bg-white p-2 sm:p-4">
      <iframe
        data-tally-src={src}
        src={src}
        loading="lazy"
        width="100%"
        height={520}
        title={title}
        className="w-full"
        style={{ border: 0, minHeight: 520 }}
      />
    </div>
  );
}
