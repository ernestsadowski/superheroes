import s from './HeroGrid.module.css';
import { cn } from "@/lib/utils";
import HeroCard from "@ui/HeroCard";
import { Suspense } from 'react';

type HeroGridProps = {
  query?: string;
  superheroes: {
    id: number;
    name: string;
    aliases: string;
    powerstats: Record<string, string>;
    image: string;
  }[],
  className?: string;
}

export default function HeroGrid({ query, superheroes, className }: HeroGridProps) {
  let filteredSuperheroes = superheroes;

  if (query) {
    filteredSuperheroes = superheroes.filter(hero => hero.name.toLowerCase().includes(query.toLowerCase()));
  }

  return (
    <Suspense key={query} fallback={<div>Loading...</div>}>
      <ul
        role="list"
        className={cn(s.root, className)}
      >
        {filteredSuperheroes.map((superhero) => (
          <li key={superhero.id}>
            <HeroCard
              id={superhero.id}
              name={superhero.name}
              aliases={superhero.aliases}
              powerstats={superhero.powerstats}
              image={superhero.image}
            />
          </li>
        ))}
      </ul>
    </Suspense>
  );
}
