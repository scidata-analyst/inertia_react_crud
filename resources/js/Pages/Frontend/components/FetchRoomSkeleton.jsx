import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FetchRoomSkeleton({ count = 6 }) {
    const skeletons = Array.from({ length: count });

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full">
            {skeletons.map((_, index) => (
                <Card key={index} className="w-full">
                    <Skeleton className="h-56 w-full rounded-t-xl" />
                    <CardContent className="p-5 space-y-3">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-8 w-full rounded-lg" />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
