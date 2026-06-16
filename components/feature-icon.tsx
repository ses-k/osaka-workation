import {
  UtensilsCrossed,
  Wallet,
  Wifi,
  HeartHandshake,
  BedDouble,
  Laptop,
  Brush,
  TrainFront,
  Wine,
  Users,
  Coffee,
  ChefHat,
  Camera,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  food: UtensilsCrossed,
  cost: Wallet,
  wifi: Wifi,
  locals: HeartHandshake,
  stay: BedDouble,
  cowork: Laptop,
  culture: Brush,
  daytrip: TrainFront,
  dinner: Wine,
  community: Users,
  coffee: Coffee,
  cooking: ChefHat,
  camera: Camera,
  spark: Sparkles,
};

export function FeatureIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Sparkles;
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange ${className}`}
    >
      <Icon className="h-6 w-6" strokeWidth={1.75} />
    </span>
  );
}
