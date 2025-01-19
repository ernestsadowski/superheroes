"use client"

import Image from "next/image";
import s from './HeroHeader.module.css';
import { cn } from "@/lib/utils";
import { useFavoriteStore } from "@/store/favoriteStore";

type HeroHeaderProps = {
  superhero: {
    id: number;
    name: string;
    aliases: string;
    powerstats: Record<string, string>;
    image: string;
  }
  className?: string;
}

export default function HeroHeader({ superhero, className }: HeroHeaderProps) {
  const { addToFavorite, removeFromFavorite, isFavorite } = useFavoriteStore();
  const { id } = superhero;

  return (
    <div className={cn(s.root, className)}>
      <div className="flex-1 mb-12">
        <Image
          src={superhero.image}
          alt={superhero.name}
          width={100}
          height={100}
          className={s.image}
        />
      </div>
      <div className="flex-[2]">

        {isFavorite(id)
          ? <button
            onClick={() => removeFromFavorite(id)}
            type="button"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Remove from favorite
          </button>
          : <button
            onClick={() => addToFavorite(superhero)}
            type="button"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Add to favorite
          </button>
        }

        <h1 className={s.name}>{superhero.name}</h1>
        <ul
          role="list"
          className={s.powerstats}
        >
          {Object.entries(superhero.powerstats).map(([key, value]) => (
            <li key={key} className="text-xl">
              <span className="font-semibold uppercase">{key}</span>: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
