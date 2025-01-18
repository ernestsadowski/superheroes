import Image from "next/image";
import s from './HeroCard.module.css';
import { cn } from "@/lib/utils";
import Link from "next/link";

type HeroCardProps = {
  id: number;
  name: string;
  aliases: string;
  powerstats: Record<string, string>;
  image: string;
  className?: string;
}

export default function HeroCard({ id, name, aliases, powerstats, image, className }: HeroCardProps) {
  return (
    <div className={cn(s.root, className)}>
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className={s.image}
      />
      <h3 className={s.name}>
        <Link href={`/${id}`} className={s.link}>
          <span>{name}</span>
          <span className="absolute inset-0" />
        </Link>
      </h3>
      <p className={s.aliases}>{aliases}</p>
      <ul
        role="list"
        className={s.powerstats}
      >
        {Object.entries(powerstats).map(([key, value]) => (
          <li key={key} className={s.powerstat}>
            <span className={s.powerstatLabel}>{key}</span>: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
