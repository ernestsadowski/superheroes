import s from './HeroGrid.module.css';
import { cn } from "@/lib/utils";
import HeroCard from "@ui/HeroCard";

type HeroGridProps = {
  superheroes: {
    id: number;
    name: string;
    aliases: string;
    powerstats: Record<string, string>;
    image: string;
  }[],
  className?: string;
}

export default function HeroGrid({ superheroes, className }: HeroGridProps) {
  return (
    <ul
      role="list"
      className={cn(s.root, className)}
    >
      {superheroes.map((superhero) => (
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
  );
}
