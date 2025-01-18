import Image from "next/image";
import { fetchSuperheroes } from '@/api/superheroAPI';

export default async function Home() {
  const superheroes = await fetchSuperheroes();
  console.log(superheroes);

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
              <Image
                src={superhero.images.sm}
                alt={superhero.name}
                width={100}
                height={100}
                className="aspect-[2/3] w-full rounded-2xl object-cover"
              />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight">{superhero.name}</h3>
              <p className="text-base/7 text-gray-800">{superhero.biography.aliases.join(', ')}</p>
              <ul
                role="list"
                className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2"
              >
                {Object.entries(superhero.powerstats).map(([key, value]) => (
                  <li key={key} className="text-sm/6 text-gray-500">
                    <span className="font-semibold">{key}</span>: {value}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}
