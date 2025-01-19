"use client"

import s from './FavButton.module.css';
import { cn } from "@/lib/utils";
import { useFavoriteStore } from "@/store/favoriteStore";

type FavButtonProps = {
  superhero: {
    id: number;
    name: string;
    aliases: string;
    powerstats: Record<string, string>;
    image: string;
  }
  className?: string;
}

export default function FavButton({ superhero, className }: FavButtonProps) {
  const { addToFavorite, removeFromFavorite, isFavorite } = useFavoriteStore();
  const { id } = superhero;

  return (
    <button
      onClick={() => isFavorite(id) ? removeFromFavorite(id) : addToFavorite(superhero)}
      type="button"
      className={cn(s.root, className)}
    >
      {isFavorite(id) ? 'Remove from favorite' : 'Add to favorite'} <span aria-hidden="true">&hearts;</span>
    </button>
  );
}
