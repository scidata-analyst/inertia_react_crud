
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function RoomSkeleton() {
    return (
        <section className="p-4 mb-10 mt-10">
            <div className="flex items-center justify-between">
                <div>
                    <Skeleton className="h-10 w-48 mb-2" />
                    <Skeleton className="h-4 w-96" />
                </div>
                <Skeleton className="h-10 w-32 rounded-md" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i} className="shadow-lg rounded-xl overflow-hidden">
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
        </section>
    );
}
