import { fetchSuperheroes } from '@/api/superheroAPI';
import HeroGrid from '@/components/HeroGrid/HeroGrid';

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const superheroes = await fetchSuperheroes();

  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto p-6 lg:px-8">
        <h1 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Superheroes</h1>
        {/* @ts-expect-error - type error */}
        <HeroGrid query={query} superheroes={superheroes.map((hero) => ({
          id: hero.id,
          name: hero.name,
          aliases: hero.biography.aliases.join(", "),
          powerstats: hero.powerstats,
          image: hero.images.sm
        }))} />
      </div>
    </div>

  );
}
