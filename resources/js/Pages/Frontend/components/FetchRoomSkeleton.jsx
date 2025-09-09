import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FetchRoomSkeleton({ count = 6 }) {
    const skeletons = Array.from({ length: count });

    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {skeletons.map((_, index) => (
                    <Card
                        key={index}
                        className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition w-full"
                    >
                        <div className="relative">
                            <Skeleton className="w-full h-56 bg-gray-200 object-cover" />

                            <div className="absolute top-3 left-3 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                <Skeleton className="w-20 h-7 bg-gray-200 rounded-full" />
                            </div>
                        </div>
                        <CardContent className="p-5 space-y-3">
                            <Skeleton className="h-6 w-40 bg-gray-200 rounded-md" />
                            <Skeleton className="h-8 w-full bg-gray-200 rounded-md" />

                            <div className="flex items-center justify-between text-gray-500 mb-4">
                                <div className="flex items-center space-x-1">
                                    <Skeleton className="h-6 w-20 bg-gray-200 rounded-md" />
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Skeleton className="h-6 w-20 bg-gray-200 rounded-md" />
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Skeleton className="h-6 w-20 bg-gray-200 rounded-md" />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <Skeleton className="h-5 w-10 bg-gray-200 rounded-md" />
                                <Skeleton className="h-5 w-10 bg-gray-200 rounded-md" />
                                <Skeleton className="h-5 w-10 bg-gray-200 rounded-md" />
                                <Skeleton className="h-5 w-10 bg-gray-200 rounded-md" />
                            </div>

                            <Skeleton className="h-8 w-full bg-gray-200 rounded-md" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-10 flex items-center justify-between flex-wrap gap-5">
                <div className="text-sm text-muted-foreground">
                    <Skeleton className="h-10 w-40 bg-gray-200 rounded-md" />
                </div>
                <div className="text-right flex items-center gap-2">
                    <Skeleton className="h-10 w-20 bg-gray-200 rounded-md" />
                    <Skeleton className="h-10 w-20 bg-gray-200 rounded-md" />
                    <Skeleton className="h-10 w-20 bg-gray-200 rounded-md" />
                    <Skeleton className="h-10 w-20 bg-gray-200 rounded-md" />
                    <Skeleton className="h-10 w-20 bg-gray-200 rounded-md" />
                </div>
            </div>
        </>
    );
}
