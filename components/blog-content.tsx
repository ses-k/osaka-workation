import Image from "next/image";
import { Quote } from "lucide-react";
import type { Block } from "@/lib/blog";

export function BlogContent({ body }: { body: Block[] }) {
  return (
    <div className="space-y-6">
      {body.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="pt-4 text-2xl font-extrabold tracking-tight text-brand-ink sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-lg leading-relaxed text-brand-ink/80">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((it) => (
                  <li key={it} className="flex gap-3 text-lg text-brand-ink/80">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "img":
            return (
              <figure key={i} className="my-8">
                <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-paper-line">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 760px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-center text-sm text-muted">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "callout":
            return (
              <div
                key={i}
                className="flex gap-4 rounded-3xl border border-brand-orange/30 bg-brand-orange/10 p-6"
              >
                <Quote className="h-6 w-6 shrink-0 text-brand-orange" />
                <p className="leading-relaxed text-brand-ink/85">{block.text}</p>
              </div>
            );
          case "cafe":
            return (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-paper-line bg-white p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                  {block.n}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-ink">
                    {block.name}{" "}
                    <span className="text-sm font-medium text-brand-orange">
                      · {block.area}
                    </span>
                  </h3>
                  <p className="mt-1 leading-relaxed text-brand-ink/75">
                    {block.text}
                  </p>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
