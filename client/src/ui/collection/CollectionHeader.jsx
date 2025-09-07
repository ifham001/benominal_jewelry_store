'use client';

import { usePathname } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/ui/button/Button';

export default function CollectionHeader({ img, title }) {
  const pathname = usePathname();
  const categories = ['Earrings', 'Rings', 'Bracelets', 'Necklaces'];

  return (
    <>
      <div className="w-full px-2 md:px-8 overflow-hidden">
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-5xl mx-auto aspect-[3/1] rounded-[40px] overflow-hidden">
            <Image
              src={img}
              alt="Hero"
              fill
              className="object-cover brightness-[0.65] transition-all duration-700 ease-in-out"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <p className="text-white font-serif text-4xl sm:text-5xl md:text-6xl text-center leading-tight">
                {title.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 flex justify-center space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {/* Search Icon Circle */}
          <Button 
            variant="ghost" 
            size="small" 
            className="min-w-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#D6E6DF] text-green-900 shrink-0 p-0"
          >
            <SearchIcon />
          </Button>

          {/* Category Pills */}
          {categories.map((cat, idx) => {
            const categorySlug = cat.toLowerCase();
            const isActive = pathname.includes(`/collection/${categorySlug}`);
            return (
              <Link key={idx} href={`/collection/${categorySlug}`}>
                <Button
                  variant={isActive ? "primary" : "outline"}
                  size="small"
                  className="whitespace-nowrap text-sm shrink-0"
                >
                  {cat}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
