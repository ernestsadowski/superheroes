import { fetchSuperheroes } from '@/api/superheroAPI';
import HeroCard from "@/components/HeroCard/HeroCard";

export default async function Home() {
  const superheroes = await fetchSuperheroes();

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Superheroes</h1>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {superheroes.map((superhero) => (
            <li key={superhero.id}>
              <HeroCard
                id={superhero.id}
                name={superhero.name}
                aliases={superhero.biography.aliases.join(", ")}
                powerstats={superhero.powerstats}
                image={superhero.images.sm}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}
