"use client"
import HeroGrid from "@ui/HeroGrid";
import { useFavoriteStore } from "@/store/favoriteStore";

export default function Favorite() {
  const { favorite } = useFavoriteStore();

  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto p-6 lg:px-8">
        <h1 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Favorite Superheroes</h1>
        <HeroGrid superheroes={favorite} />
      </div>
    </div>

  );
}
