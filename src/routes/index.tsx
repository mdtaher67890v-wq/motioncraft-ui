import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { GROUPS, RECIPES, fmtTime } from "@/lib/recipes";
import {
  clearIngredients,
  isFavorite,
  toggleFavorite,
  toggleIngredient,
  usePantry,
} from "@/lib/pantry";
import { RecipeCard } from "@/components/recipe-card";
import { burst, centerOf } from "@/lib/burst";

type Filter = "all" | "near" | "ready" | "saved";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "near", label: "Missing 2 or fewer" },
  { key: "ready", label: "Cook now" },
  { key: "saved", label: "Saved" },
];

const EASE = [0.2, 0.7, 0.2, 1] as const;
const HERO_WORDS = "What can you cook tonight?".split(" ");

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const pantry = usePantry();
  const [filter, setFilter] = useState<Filter>("all");

  const have = pantry.selected.length > 0;
  const selectedSet = useMemo(() => new Set(pantry.selected), [pantry.selected]);
  const favoritesSet = useMemo(() => new Set(pantry.favorites), [pantry.favorites]);

  const rows = useMemo(() => {
    let r = RECIPES.map((d) => {
      const miss = d.ingredients.map((i) => i.key).filter((k) => !selectedSet.has(k));
      return { d, miss, hit: d.ingredients.length - miss.length };
    });
    if (have) r = r.filter((x) => x.hit > 0);
    if (filter === "near") r = r.filter((x) => x.miss.length <= 2);
    if (filter === "ready") r = r.filter((x) => have && x.miss.length === 0);
    if (filter === "saved") r = r.filter((x) => favoritesSet.has(x.d.id));
    if (have) r = [...r].sort((a, b) => a.miss.length - b.miss.length || b.hit - a.hit);
    return r;
  }, [selectedSet, favoritesSet, filter, have]);

  const readyCount = have ? rows.filter((x) => x.miss.length === 0).length : 0;

  const handleFav = (e: React.MouseEvent<HTMLButtonElement>, id: string, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    const turningOn = !isFavorite(pantry, id);
    toggleFavorite(id);
    if (turningOn) {
      const [cx, cy] = centerOf(e.currentTarget);
      burst(cx, cy, 12, ["#E8432B", "#FF8A5C"]);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4 pb-14">
      {/* hero */}
      <header className="grid gap-3.5 pt-7 pb-6">
        <h1 className="max-w-14ch text-[clamp(36px,8vw,64px)] leading-[1.02] font-extrabold text-balance-tight">
          {HERO_WORDS.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-top">
              <motion.span
                className="inline-block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              >
                {word}
                {i < HERO_WORDS.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
          className="max-w-46ch text-[17px] text-muted-foreground"
        >
          Tick what is in your kitchen. {RECIPES.length} viral dishes, ranked by how little you
          need to buy, each with a full step-by-step page.
        </motion.p>
      </header>

      {/* ingredient panel */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
        aria-labelledby="pt"
        className="grid gap-4.5 rounded-3xl border border-line p-5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="pt" className="text-lg font-bold tracking-tight">
            Your ingredients
          </h2>
          <span className="text-[13px] text-muted-foreground">
            {have ? `${pantry.selected.length} selected` : "Nothing selected yet"}
          </span>
        </div>
        <div className="grid gap-4.5">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.6 + gi * 0.06 }}
              className="grid gap-2"
            >
              <h3 className="font-mono text-[11.5px] font-medium tracking-[0.09em] uppercase text-muted-foreground">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const active = selectedSet.has(item);
                  return (
                    <motion.button
                      key={item}
                      type="button"
                      whileTap={{ scale: 0.94 }}
                      aria-pressed={active}
                      onClick={() => toggleIngredient(item)}
                      className={`min-h-10 rounded-full border px-[15px] py-1.5 text-sm font-medium capitalize transition-colors duration-200 ${
                        active
                          ? "border-foreground bg-foreground font-bold text-primary-foreground"
                          : "border-line bg-background hover:border-foreground/25"
                      }`}
                    >
                      {item}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-[13px] text-muted-foreground">
          Salt, pepper, cooking oil and water are assumed in every kitchen.
        </p>
      </motion.section>

      {/* sticky filter bar */}
      <div className="sticky top-0 z-10 mt-5.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5 border-b border-line bg-background py-3">
        <div className="min-w-0 text-[13.5px] text-muted-foreground" aria-live="polite">
          {have ? (
            <>
              <b className="text-foreground">{rows.length}</b> recipe{rows.length === 1 ? "" : "s"}{" "}
              · <b className="text-foreground">{readyCount}</b> ready to cook
            </>
          ) : (
            <>
              <b className="text-foreground">{rows.length}</b> recipes · pick ingredients to rank
              them
            </>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter recipes">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`min-h-9 rounded-full px-3.5 py-1 text-[13px] font-semibold transition-colors duration-200 ${
                filter === f.key
                  ? "bg-foreground text-primary-foreground"
                  : "bg-soft text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        {have && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => clearIngredients()}
            className="min-h-9 px-1.5 text-[13px] font-semibold text-primary"
          >
            Clear ingredients
          </motion.button>
        )}
      </div>

      {/* recipe grid */}
      <motion.main
        layout
        className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,210px),1fr))] gap-x-4.5 gap-y-[22px] pt-[22px]"
      >
        <AnimatePresence mode="popLayout">
          {rows.length ? (
            rows.map((x, n) => (
              <RecipeCard
                key={x.d.id}
                recipe={x.d}
                index={n}
                missing={x.miss}
                haveIngredients={have}
                saved={favoritesSet.has(x.d.id)}
                onToggleFavorite={(e) => handleFav(e, x.d.id, x.d.name)}
              />
            ))
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full py-12 text-center text-muted-foreground"
            >
              {filter === "saved"
                ? "No saved recipes yet. Tap the heart on any card."
                : filter === "ready"
                  ? "Nothing is fully covered yet. Try Missing 2 or fewer."
                  : "No recipes match. Try adding more ingredients."}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.main>

      <footer className="mt-11 text-[12.5px] text-muted-foreground">
        Recipes are written in our own words. Cook times are approximate.
      </footer>
    </div>
  );
}
