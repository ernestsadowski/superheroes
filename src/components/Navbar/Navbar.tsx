import Link from 'next/link';
import s from './Navbar.module.css';
import { cn } from "@/lib/utils";
import Search from '@ui/Search';
import { Suspense } from 'react';

type NavbarProps = {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn(s.root, className)}>
      <nav aria-label="Global" className="container mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            Superheroes
          </Link>
        </div>
        <div className="flex lg:gap-x-12">
          <Link href="/" className="text-sm/6 font-semibold text-gray-900">
            Home
          </Link>
        </div>
        <div className="hidden gap-6 lg:flex lg:flex-1 lg:justify-end">
          <Link href="/favorite" className="text-sm/6 font-semibold text-gray-900">
            Favorite <span aria-hidden="true">&hearts;</span>
          </Link>
          <Suspense>
            <Search />
          </Suspense>
        </div>
      </nav>
    </header>
  );
}
