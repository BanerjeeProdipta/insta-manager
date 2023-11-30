import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type User = {
  username: string;
};

export type Email = {
  email: string;
};

export const userAtom = atom<User>({
  username: "",
});

export const hoveredImageAtom = atom<number | null>(null);

export type Theme = "dark" | "light";

export const themeAtom = atomWithStorage<Theme>("Theme", "dark");
