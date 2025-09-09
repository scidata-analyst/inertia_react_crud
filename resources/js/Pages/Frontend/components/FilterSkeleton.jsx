import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FilterSkeleton() {
    return (
        <aside className="w-full md:w-80">
            <Card className="pt-6">
                <CardContent className="space-y-6">
                    {/* Title */}
                    <Skeleton className="h-6 w-3/4" />

                    {/* Room / Keyword */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-10 w-full rounded-lg" />
                    </div>

                    {/* Room Type */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-6 w-full rounded-lg" />
                        <Skeleton className="h-6 w-full rounded-lg" />
                        <Skeleton className="h-6 w-full rounded-lg" />
                    </div>

                    {/* Capacity */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-10 w-full rounded-lg" />
                    </div>

                    {/* Price Range */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-1/3" />
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-10 w-1/2 rounded-lg" />
                            <Skeleton className="h-10 w-1 rounded-lg" />
                            <Skeleton className="h-10 w-1/2 rounded-lg" />
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-6 w-full rounded-lg" />
                    </div>

                    {/* Apply Filters */}
                    <Skeleton className="h-12 w-full rounded-lg" />
                </CardContent>
            </Card>
        </aside>
    );
}
