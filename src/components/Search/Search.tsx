'use client';

import s from './Search.module.css';
import { cn } from "@/lib/utils";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

type SearchProps = {
  className?: string;
}

export default function Search({ className }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={cn(s.root, className)}>
      <input
        id="search"
        name="search"
        placeholder="search..."
        type="text"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
