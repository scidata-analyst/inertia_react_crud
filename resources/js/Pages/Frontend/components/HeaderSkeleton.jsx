import { Skeleton } from "@/components/ui/skeleton"

export default function HeaderSkeleton() {
    return (
        <>
            {/* Main Header Skeleton */}
            <header className="bg-white sticky top-0 z-50 shadow-sm">
                <div className="px-4 py-4 flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Skeleton className="h-8 w-28 rounded-md" />

                    {/* Search */}
                    <div className="relative flex-1 max-w-2xl hidden md:block">
                        <Skeleton className="h-10 w-full rounded-full" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-32 rounded-full hidden sm:block" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                </div>
            </header>

            {/* Category Navigation Skeleton */}
            <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-[72px] z-40 hidden md:block">
                <div className="px-4 flex items-center justify-center gap-6 py-3 text-gray-600 text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <Skeleton
                            key={i}
                            className="h-6 w-20 rounded-md"
                        />
                    ))}
                </div>
            </nav>
        </>
    )
}
