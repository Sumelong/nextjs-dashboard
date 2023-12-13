'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {useSearchParams, usePathname, useRouter} from "next/navigation"
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();
  const handleSearch= useDebouncedCallback((term) =>{
        console.log(`Searching... ${term}`);

        //URLSearchParams is a Web API that provides utility methods for manipulating the URL query parameters
        const params = new URLSearchParams(searchParams);
      //when the user types a new search query, you want to reset the page number to 1
        params.set('page', '1');

        //set the params string based on the user’s input. If the input is empty, you want to delete it:
        if (term){
            params.set("query",term);
        }
        else {
            params.delete("query");
        }
        replace(`${pathName}?${params.toString()}`)
         //console.log(term);
    },300);
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e)=>handleSearch(e.target.value)}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
