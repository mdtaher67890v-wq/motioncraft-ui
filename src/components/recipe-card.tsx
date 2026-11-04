import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fmtTime, type Recipe } from "@/lib/recipes";
import { FavButton } from "@/components/fav-button";

type RecipeCardProps = {
  recipe: Recipe;
  index: number;
  missing: string[];
  haveIngredients: boolean;
  saved: boolean;
  onToggleFavorite: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function RecipeCard({
  recipe,
  index,
  missing,
  haveIngredients,
  saved,
  onToggleFavorite,
}: RecipeCardProps) {
  const ready = haveIngredients && missing.length === 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        duration: 0.5,
        ease: [0.2, 0.7, 0.2, 1],
        delay: Math.min(index, 11) * 0.045,
      }}
      className="group relative flex min-w-0 flex-col gap-2.5"
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-soft transition-shadow duration-300 group-hover:shadow-[0_18px_36px_-18px_rgba(0,0,0,0.35)]">
        <img
          src={recipe.image}
          alt={recipe.name}
          loading="lazy"
          width={944}
          height={704}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
        />
        <FavButton
          active={saved}
          onToggle={onToggleFavorite}
          label={`${saved ? "Remove" : "Save"} ${recipe.name}`}
          className="absolute top-2.5 right-2.5"
        />
      </div>

      <h3 className="relative text-[16.5px] leading-snug font-bold tracking-tight text-balance-tight">
        <Link
          to="/recipe/$id"
          params={{ id: recipe.id }}
          className="after:absolute after:inset-0 after:z-0 after:rounded-2xl after:content-['']"
        >
          {recipe.name}
        </Link>
      </h3>
      <p className="font-mono text-[11.5px] text-muted-foreground">
        {recipe.origin} · {fmtTime(recipe.minutes)}
      </p>
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[13px]">
        {!haveIngredients ? (
          <span className="text-muted-foreground">
            {recipe.ingredients.length} main ingredients
          </span>
        ) : ready ? (
          <span className="rounded-full bg-ok-soft px-2.5 py-0.5 text-[12px] font-bold text-ok">
            Ready to cook
          </span>
        ) : (
          <>
            <span className="rounded-full bg-soft px-2.5 py-0.5 text-[12px] font-bold">
              Missing {missing.length}
            </span>
            <span className="text-muted-foreground capitalize">{missing.join(", ")}</span>
          </>
        )}
      </div>
    </motion.article>
  );
}
