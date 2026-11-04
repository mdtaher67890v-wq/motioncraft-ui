import { useSyncExternalStore } from "react";

export type PantryState = {
  selected: string[];
  favorites: string[];
  done: Record<string, number[]>;
};

const KEY = "pocket-pantry-v3";

function load(): PantryState {
  if (typeof window === "undefined") return { selected: [], favorites: [], done: {} };
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "{}");
    return {
      selected: Array.isArray(raw.selected) ? raw.selected : [],
      favorites: Array.isArray(raw.favorites) ? raw.favorites : [],
      done: raw.done && typeof raw.done === "object" ? raw.done : {},
    };
  } catch {
    return { selected: [], favorites: [], done: {} };
  }
}

let state: PantryState = load();
const listeners = new Set<() => void>();

function setState(next: PantryState) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage full or unavailable; keep in-memory state */
  }
  listeners.forEach((l) => l());
}

const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

const getSnapshot = () => state;
const getServerSnapshot = () => state;

export function usePantry(): PantryState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export const toggleIngredient = (key: string) =>
  setState({
    ...state,
    selected: state.selected.includes(key)
      ? state.selected.filter((k) => k !== key)
      : [...state.selected, key],
  });

export const clearIngredients = () => setState({ ...state, selected: [] });

export const toggleFavorite = (id: string) =>
  setState({
    ...state,
    favorites: state.favorites.includes(id)
      ? state.favorites.filter((f) => f !== id)
      : [...state.favorites, id],
  });

export const toggleStep = (id: string, index: number) => {
  const current = new Set(state.done[id] || []);
  if (current.has(index)) current.delete(index);
  else current.add(index);
  setState({ ...state, done: { ...state.done, [id]: [...current] } });
};

export const isFavorite = (s: PantryState, id: string) => s.favorites.includes(id);
export const isStepDone = (s: PantryState, id: string, index: number) =>
  (s.done[id] || []).includes(index);
