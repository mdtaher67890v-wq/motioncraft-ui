import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ChevronLeft } from "lucide-react";
import { useMemo } from "react";
import { RECIPES, fmtTime, getRecipe } from "@/lib/recipes";
import { isFavorite, isStepDone, toggleFavorite, toggleStep, usePantry } from "@/lib/pantry";
import { FavButton } from "@/components/fav-button";
import { burst, centerOf } from "@/lib/burst";

export const Route = createFileRoute("/recipe/$id")({
  beforeLoad: ({ params }) => {
    if (!getRecipe(params.id)) throw notFound();
  },
  component: RecipePage,
  head: ({ params }) => {
    const recipe = getRecipe(params.id);
    const title = recipe ? `${recipe.name} · Pocket Pantry` : "Pocket Pantry";
    const description = recipe
      ? `A step-by-step guide to ${recipe.name} — ${recipe.origin}. Ready in about ${fmtTime(recipe.minutes)}.`
      : "Step-by-step recipes for what you have in your kitchen.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

const EASE = [0.2, 0.7, 0.2, 1] as const;

function RecipePage() {
  const { id } = Route.useParams();
  const recipe = getRecipe(id)!;
  const pantry = usePantry();

  const have = pantry.selected.length > 0;
  const selectedSet = useMemo(() => new Set(pantry.selected), [pantry.selected]);
  const favoritesSet = useMemo(() => new Set(pantry.favorites), [pantry.favorites]);

  const got = recipe.ingredients.filter((i) => selectedSet.has(i.key)).length;
  const doneSet = new Set(pantry.done[id] || []);
  const total = recipe.steps.length;
  const cur = recipe.steps.findIndex((_, k) => !doneSet.has(k));
  const all = doneSet.size === total;

  const index = RECIPES.indexOf(recipe);
  const prev = RECIPES[(index + RECIPES.length - 1) % RECIPES.length];
  const next = RECIPES[(index + 1) % RECIPES.length];

  const saved = isFavorite(pantry, id);

  const handleFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    const turningOn = !saved;
    toggleFavorite(id);
    if (turningOn) {
      const [cx, cy] = centerOf(e.currentTarget);
      burst(cx, cy, 12, ["#E8432B", "#FF8A5C"]);
    }
  };

  const handleStep = (e: React.MouseEvent<HTMLButtonElement>, k: number) => {
    const wasDone = isStepDone(pantry, id, k);
    toggleStep(id, k);
    if (!wasDone) {
      const [cx, cy] = centerOf(e.currentTarget);
      burst(cx, cy, 8, ["#177A47", "#6BCB9A", "#141414"]);
      if (doneSet.size + 1 === total) {
        burst(window.innerWidth / 2, window.innerHeight * 0.55, 70);
      }
    }
  };

  return (
    <motion.div
      key={recipe.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="mx-auto w-full max-w-[1100px] px-4 pb-14"
    >
      <Link
        to="/"
        className="group inline-flex min-h-10 items-center gap-1.5 pr-2 text-sm font-bold"
      >
        <ChevronLeft className="size-4.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        All recipes
      </Link>

      {/* hero photo */}
      <div className="mt-1.5 aspect-16/10 max-h-[460px] w-full overflow-hidden rounded-3xl bg-soft">
        <motion.img
          src={recipe.image}
          alt={recipe.name}
          width={944}
          height={704}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="h-full w-full object-cover"
        />
      </div>

      {/* heading */}
      <div className="grid gap-2.5 pt-5">
        <div className="flex items-start justify-between gap-3">
          <h1 className="min-w-0 text-[clamp(30px,6vw,46px)] leading-[1.05] font-extrabold text-balance-tight">
            {recipe.name}
          </h1>
          <FavButton
            size="lg"
            active={saved}
            onToggle={handleFav}
            label={saved ? "Remove from saved" : "Save recipe"}
            className="mt-1.5 shrink-0"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {[fmtTime(recipe.minutes), `Serves ${recipe.serves}`, `${total} steps`, recipe.origin].map(
            (fact, n) => (
              <motion.span
                key={n}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.15 + n * 0.06 }}
                className="rounded-full bg-soft px-3 py-1 text-[13px] font-semibold"
              >
                {fact}
              </motion.span>
            ),
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {have ? (
            <>
              You have <b className="text-ok">{got} of {recipe.ingredients.length}</b> main
              ingredients.
            </>
          ) : (
            "Tick your ingredients on the home page to see what you are missing."
          )}
        </p>
      </div>

      <div className="grid items-start gap-8 pt-5 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-14">
        {/* ingredients */}
        <aside className="grid gap-4.5 self-start lg:sticky lg:top-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight">Ingredients</h2>
            <ul className="mt-2.5 grid">
              {recipe.ingredients.map((ing, n) => {
                const hasIt = selectedSet.has(ing.key);
                return (
                  <motion.li
                    key={n}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, ease: EASE, delay: 0.25 + n * 0.05 }}
                    className="grid grid-cols-[20px_1fr] items-start gap-2.5 border-b border-line py-2.5 text-[15px]"
                  >
                    <span
                      className={`mt-1.5 size-2.5 rounded-full border-2 ${
                        hasIt
                          ? "border-ok bg-ok"
                          : have
                            ? "border-primary"
                            : "border-line"
                      }`}
                    />
                    <span>
                      {ing.text}
                      {have && !hasIt && (
                        <span className="ml-1.5 font-mono text-[11px] text-primary">need</span>
                      )}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-extrabold tracking-tight">From your cupboard</h2>
            <ul className="mt-2.5 grid">
              {recipe.cupboard.map((extra, n) => (
                <li
                  key={n}
                  className="grid grid-cols-[20px_1fr] items-start gap-2.5 border-b border-line py-2.5 text-[15px] text-muted-foreground"
                >
                  <span className="mt-1.5 size-2.5 rounded-full border-2 border-line" />
                  <span>{extra}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* steps */}
        <div>
          <div className="grid gap-3">
            <h2 className="text-xl font-extrabold tracking-tight">Step by step</h2>
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={doneSet.size}
              className="h-2 overflow-hidden rounded-full bg-soft"
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg,#E8432B,#FF8A5C,#E8432B)",
                  backgroundSize: "200% 100%",
                  animation: "pp-flow 2.2s linear infinite",
                }}
                initial={false}
                animate={{ width: `${(doneSet.size / total) * 100}%` }}
                transition={{ duration: 0.5, ease: EASE }}
              />
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              {doneSet.size} of {total} steps done
            </span>
          </div>

          <ol className="mt-4 grid gap-3">
            {recipe.steps.map((step, k) => {
              const isDone = isStepDone(pantry, id, k);
              const isCur = k === cur;
              return (
                <motion.li
                  key={k}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: Math.min(0.3 + k * 0.08, 1) }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isDone
                      ? "border-transparent bg-soft opacity-55"
                      : isCur
                        ? "-translate-y-px border-foreground shadow-[0_10px_30px_-14px_rgba(0,0,0,0.25)]"
                        : "border-line"
                  }`}
                >
                  <button
                    type="button"
                    aria-pressed={isDone}
                    onClick={(e) => handleStep(e, k)}
                    className="grid w-full grid-cols-[44px_1fr] items-start gap-4 rounded-2xl p-4 pl-4 text-left active:scale-[0.99]"
                  >
                    <span
                      className={`grid size-11 place-items-center rounded-full text-[17px] font-extrabold transition-all duration-300 ${
                        isDone
                          ? "scale-92 bg-ok text-white"
                          : isCur
                            ? "bg-foreground text-white"
                            : "bg-soft text-foreground"
                      }`}
                      style={isCur ? { animation: "pp-ring 2s ease-out infinite" } : undefined}
                    >
                      {isDone ? <Check className="size-5 stroke-[3] text-white" /> : k + 1}
                    </span>
                    <span className="min-w-0 pt-2 text-[16.5px] leading-relaxed">{step}</span>
                  </button>
                </motion.li>
              );
            })}
          </ol>

          {all ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mt-4.5 rounded-2xl bg-ok-soft p-4.5 font-bold text-ok"
            >
              All done. Enjoy your meal.
            </motion.div>
          ) : (
            <p className="mt-2.5 text-[13px] text-muted-foreground">
              Tap a step when you finish it. The dark card is your next step.
            </p>
          )}
        </div>
      </div>

      {/* prev / next */}
      <nav
        aria-label="More recipes"
        className="mt-11 grid grid-cols-2 gap-3 border-t border-line pt-5"
      >
        <Link
          to="/recipe/$id"
          params={{ id: prev.id }}
          className="grid gap-0.5 rounded-2xl bg-soft p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft"
        >
          <small className="font-mono text-[11px] text-muted-foreground">Previous</small>
          <b className="text-[15px] leading-tight">{prev.name}</b>
        </Link>
        <Link
          to="/recipe/$id"
          params={{ id: next.id }}
          className="grid gap-0.5 rounded-2xl bg-soft p-3.5 text-right transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft"
        >
          <small className="font-mono text-[11px] text-muted-foreground">Next</small>
          <b className="text-[15px] leading-tight">{next.name}</b>
        </Link>
      </nav>
    </motion.div>
  );
}
