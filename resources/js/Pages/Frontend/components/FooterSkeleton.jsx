import { Skeleton } from "@/components/ui/skeleton"

export default function FooterSkeleton() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div className="space-y-3">
                    <Skeleton className="h-8 w-40 bg-gray-700 rounded-md" />
                    <Skeleton className="h-4 w-full bg-gray-700 rounded-md" />
                    <Skeleton className="h-4 w-5/6 bg-gray-700 rounded-md" />
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                    <Skeleton className="h-6 w-28 bg-gray-700 rounded-md" />
                    <div className="space-y-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton
                                key={i}
                                className="h-4 w-24 bg-gray-700 rounded-md"
                            />
                        ))}
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                    <Skeleton className="h-6 w-28 bg-gray-700 rounded-md" />
                    <Skeleton className="h-4 w-48 bg-gray-700 rounded-md" />
                    <Skeleton className="h-4 w-56 bg-gray-700 rounded-md" />
                    <Skeleton className="h-4 w-40 bg-gray-700 rounded-md" />
                </div>

                {/* Newsletter */}
                <div className="space-y-3">
                    <Skeleton className="h-6 w-40 bg-gray-700 rounded-md" />
                    <Skeleton className="h-4 w-56 bg-gray-700 rounded-md" />
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Skeleton className="h-10 w-full sm:w-2/3 bg-gray-700 rounded-md" />
                        <Skeleton className="h-10 w-28 bg-gray-700 rounded-md" />
                    </div>
                </div>
            </div>

            {/* Socials & Copyright */}
            <div className="border-t border-gray-700 mt-10 py-6 flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">
                <div className="flex space-x-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton
                            key={i}
                            className="h-8 w-8 rounded-full bg-gray-700"
                        />
                    ))}
                </div>
                <Skeleton className="h-4 w-64 bg-gray-700 rounded-md" />
            </div>
        </footer>
    )
}
