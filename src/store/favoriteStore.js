import { create } from 'zustand'
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(persist((set, get) => ({
    favorite: [],
    addToFavorite: (superhero) => set((state) => ({ favorite: [...state.favorite, superhero] })),
    removeFromFavorite: (superheroId) => set((state) => ({ favorite: state.favorite.filter((superhero) => superhero.id !== superheroId) })),
    isFavorite: (superheroId) => get().favorite.some((superhero) => superhero.id === superheroId),
    clearFavorite: () => set({ favorite: [] }),
})))