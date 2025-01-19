import Image from "next/image";
import s from './HeroHeader.module.css';
import { cn } from "@/lib/utils";
import FavButton from "@ui/FavButton";

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

        <FavButton superhero={superhero} />

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
