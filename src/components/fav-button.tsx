import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

type FavButtonProps = {
  active: boolean;
  onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  className?: string;
  size?: "sm" | "lg";
};

export function FavButton({ active, onToggle, label, className, size = "sm" }: FavButtonProps) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.85 }}
      aria-pressed={active}
      aria-label={label}
      onClick={onToggle}
      className={cn(
        "z-10 grid place-items-center rounded-full bg-background/95 shadow-sm transition-colors",
        size === "sm" ? "size-9" : "size-11 border border-line bg-background shadow-none",
        className,
      )}
    >
      <motion.span
        key={String(active)}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
      >
        <Heart
          className={cn(
            size === "sm" ? "size-[18px]" : "size-5",
            active ? "fill-primary stroke-primary" : "fill-none stroke-foreground",
          )}
        />
      </motion.span>
    </motion.button>
  );
}
