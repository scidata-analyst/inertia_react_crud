import React, { useState, useEffect } from "react"
import Layout from "@/Layout"
import { Head, router, Link } from "@inertiajs/react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { CircleHelpIcon } from "lucide-react"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/Components/ui/skeleton"

export default function Index({ rooms }) {
    const [loading, setLoading] = useState(false)
    const [selectedRoom, setSelectedRoom] = useState(null)
    const [deleteroom, setDeleteroom] = useState(null)
    const [error, setError] = useState(null)
    const [submitting, setSubmitting] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [roomData, setRoomData] = useState(rooms)
    const [filterData, setFilterData] = useState({
        name: '',
        capacity: '',
        price: '',
        type: '',
        per_page: 8,
    })

    /* handle filter */
    const handleFilter = async () => {
        setLoading(true);
        const response = await router.get('/rooms', {
            ...filterData,
            per_page: filterData.per_page || 8,
        }, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: (page) => {
                setRoomData(page.props.rooms);
                setLoading(false);
            },
            onError: () => {
                setLoading(false);
            }
        });
    }

    /* handle reset filter */
    const handleReset = async () => {
        setFilterData({
            name: '',
            capacity: '',
            price: '',
            type: '',
            per_page: 8,
        });
        setLoading(true);
        const response = await router.get('/rooms', {

        }, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: (page) => {
                setRoomData(page.props.rooms);
                setLoading(false);
            },
            onError: () => {
                setLoading(false);
            }
        });
    }

    /* handle update room */
    const handleEditSubmit = (e) => {
        e.preventDefault()

        setSubmitting(true)
        const formData = new FormData()
        formData.append("_method", "PUT")
        formData.append("hotel_id", selectedRoom.hotel_id)
        formData.append("name", selectedRoom.name)
        formData.append("room_type", selectedRoom.room_type)
        formData.append("capacity", selectedRoom.capacity)
        formData.append("price", selectedRoom.price)
        formData.append("description", selectedRoom.description)
        formData.append("image", selectedRoom.image)
        formData.append("is_available", selectedRoom.is_available)

        fetch(`/rooms/${selectedRoom.id}`, {
            method: "POST",
            body: formData,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        })

        toast.success("Room updated successfully!", {
            style: { backgroundColor: "#16a34a", color: "white" },
        })
        setRoomData(rooms)
        setError(null)
        setSubmitting(false)
        setIsDialogOpen(false)
    }

    /* handle delete room */
    const handleDeleteConfirm = () => {
        // TODO: Replace with API call
        console.log("Deleted room:", deleteroom)
    }

    /* handle pagination link */
    const renderLink = (link) => {
        if (link.url) {
            return <Link href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} />;
        }

        return <span dangerouslySetInnerHTML={{ __html: link.label }} />;
    };

    return (
        <Layout>
            <Head title="Rooms" />
            <div className="">
                <h1 className="text-2xl font-bold mb-4">Rooms</h1>

                {/* Filters */}
                <div className="border rounded-lg mb-4 p-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-2 flex-wrap">
                            {loading ? (
                                Array.from({ length: 6 }).map((_, i) => (
                                    <Skeleton
                                        key={i}
                                        className="w-[180px] h-10 bg-muted animate-pulse rounded-md"
                                    />
                                ))
                            ) : (
                                <>
                                    <Input
                                        type="text"
                                        placeholder="Filter by Name"
                                        className="w-[180px]"
                                        onChange={(e) => setFilterData({ ...filterData, name: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Filter by Capacity"
                                        className="w-[180px]"
                                        onChange={(e) => setFilterData({ ...filterData, capacity: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Filter by Price"
                                        className="w-[180px]"
                                        onChange={(e) => setFilterData({ ...filterData, price: e.target.value })}
                                    />

                                    <Select onValueChange={(value) => setFilterData({ ...filterData, type: value })}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a room type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="single">Single</SelectItem>
                                            <SelectItem value="double">Double</SelectItem>
                                            <SelectItem value="suite">Suite</SelectItem>
                                            <SelectItem value="family">Family</SelectItem>
                                            <SelectItem value="deluxe">Deluxe</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Select onValueChange={(value) => setFilterData({ ...filterData, per_page: value })}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Per page" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="10">10</SelectItem>
                                            <SelectItem value="25">25</SelectItem>
                                            <SelectItem value="50">50</SelectItem>
                                            <SelectItem value="100">100</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Button type="button" variant="default" onClick={handleFilter}>
                                        Apply Filters
                                    </Button>

                                    <Button type="button" variant="default" onClick={handleReset}>
                                        Reset Filters
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Rooms */}
                <div className="bg-muted/50 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-2 gap-4 border rounded-xl">
                    {loading
                        ? Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="p-2 rounded-2xl">
                                <Card className="w-full animate-pulse">
                                    <CardHeader>
                                        <Skeleton className="h-6 w-3/4 bg-muted rounded mb-2" />
                                        <Skeleton className="h-4 w-1/2 bg-muted rounded" />
                                    </CardHeader>
                                    <CardContent>
                                        <Skeleton className="h-6 w-24 bg-muted rounded mb-4" />
                                        <Skeleton className="w-full aspect-video bg-muted rounded-xl" />
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-2">
                                        <Skeleton className="h-10 w-full bg-muted rounded" />
                                        <Skeleton className="h-10 w-full bg-muted rounded" />
                                    </CardFooter>
                                </Card>
                            </div>
                        ))
                        : roomData?.data.map((room) => (
                            <div key={room.id} className="p-2 rounded-2xl">
                                <Card className="w-full">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold">
                                            {room.name}
                                        </CardTitle>
                                        <CardDescription>{room.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground leading-6">
                                        <div>
                                            <span className="text-4xl leading-none font-bold text-foreground">
                                                ${room.price}
                                            </span>
                                            <span className="ml-1.5 mr-1">/Per night</span>
                                            <Tooltip>
                                                <TooltipTrigger className="mb-1">
                                                    <CircleHelpIcon className="h-4 w-4" />
                                                </TooltipTrigger>
                                                <TooltipContent className="max-w-xs">
                                                    <p>
                                                        {room.is_available ? "Available" : "Not available"}, Capacity: {room.capacity} persons, Type: {room.room_type}
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </div>
                                        <div className="mt-5 w-full aspect-video bg-muted rounded-xl" />
                                    </CardContent>
                                    <CardFooter className="mt-2 flex justify-between gap-2 flex-wrap">
                                        {/* Edit Modal */}
                                        {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}></Dialog> */}
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    size="lg"
                                                    variant="default"
                                                    className="w-full"
                                                    onClick={() => setSelectedRoom(room)}
                                                >
                                                    Update room
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[800px]">
                                                <form onSubmit={handleEditSubmit}>
                                                    <DialogHeader className={"mb-4"}>
                                                        <DialogTitle>Edit room</DialogTitle>
                                                        <DialogDescription>
                                                            Update room information below.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    {selectedRoom && (
                                                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                                                            {/* Name */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="name">room Name</Label>
                                                                <Input
                                                                    id="name"
                                                                    value={selectedRoom.name}
                                                                    onChange={(e) =>
                                                                        setSelectedRoom({ ...selectedRoom, name: e.target.value })
                                                                    }
                                                                />
                                                                {error?.name && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.name[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Room Type */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="room_type">Room Type</Label>
                                                                <Select
                                                                    value={selectedRoom.room_type}
                                                                    onValueChange={(value) =>
                                                                        setSelectedRoom({ ...selectedRoom, room_type: value })
                                                                    }
                                                                >
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select a room type" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectItem value="single">Single</SelectItem>
                                                                        <SelectItem value="double">Double</SelectItem>
                                                                        <SelectItem value="suite">Suite</SelectItem>
                                                                        <SelectItem value="family">Family</SelectItem>
                                                                        <SelectItem value="deluxe">Deluxe</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                {error?.room_type && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.room_type[0]}
                                                                    </p>
                                                                )}
                                                            </div>


                                                            {/* Capacity */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="capacity">Capacity</Label>
                                                                <Input
                                                                    id="capacity"
                                                                    value={selectedRoom.capacity}
                                                                    onChange={(e) =>
                                                                        setSelectedRoom({ ...selectedRoom, capacity: e.target.value })
                                                                    }
                                                                />
                                                                {error?.capacity && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.capacity[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Price */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="price">Price</Label>
                                                                <Input
                                                                    id="price"
                                                                    value={selectedRoom.price}
                                                                    onChange={(e) =>
                                                                        setSelectedRoom({ ...selectedRoom, price: e.target.value })
                                                                    }
                                                                />
                                                                {error?.price && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.price[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Image */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="image">Image</Label>
                                                                <Input
                                                                    id="image"
                                                                    value={selectedRoom.image}
                                                                    onChange={(e) =>
                                                                        setSelectedRoom({ ...selectedRoom, image: e.target.value })
                                                                    }
                                                                />
                                                                {error?.image && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.image[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Description - full width */}
                                                            <div className="grid gap-2 col-span-full">
                                                                <Label htmlFor="description">Description</Label>
                                                                <Textarea
                                                                    id="description"
                                                                    value={selectedRoom.description}
                                                                    onChange={(e) =>
                                                                        setSelectedRoom({ ...selectedRoom, description: e.target.value })
                                                                    }
                                                                />

                                                                {error?.description && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.description[0]}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                    <DialogFooter className={"mt-4"}>
                                                        <DialogClose asChild>
                                                            <Button variant="outline">Cancel</Button>
                                                        </DialogClose>
                                                        <Button type="submit">{submitting ? "Saving..." : "Save changes"}</Button>
                                                    </DialogFooter>
                                                </form>
                                            </DialogContent>
                                        </Dialog>

                                        {/* Delete Modal */}
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    size="lg"
                                                    variant="destructive"
                                                    className="w-full"
                                                    onClick={() => setDeleteroom(room)}
                                                >
                                                    Delete room
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[400px]">
                                                <DialogHeader>
                                                    <DialogTitle>Delete room</DialogTitle>
                                                    <DialogDescription>
                                                        Are you sure you want to delete{" "}
                                                        <span className="font-semibold">
                                                            {deleteroom?.name}
                                                        </span>
                                                        ? This action cannot be undone.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="outline">Cancel</Button>
                                                    </DialogClose>
                                                    <Button
                                                        variant="destructive"
                                                        onClick={handleDeleteConfirm}
                                                    >
                                                        Confirm Delete
                                                    </Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                </div>

                {/* Pagination */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6">
                    {loading ? (
                        <>
                            <div className="h-4 w-48 bg-muted animate-pulse rounded mb-2 md:mb-0" />
                            <div className="flex space-x-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Skeleton
                                        key={i}
                                        className="h-9 w-9 bg-muted animate-pulse rounded"
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="text-sm text-muted-foreground">
                                Showing {roomData?.from} to {roomData?.to} of {roomData?.total} entries
                            </div>
                            <div className="text-right">
                                {roomData.links.map((link, index) => (
                                    <Button
                                        key={index}
                                        variant={link.active ? "default" : "outline"}
                                        className="mx-1"
                                        disabled={!link.url}
                                        asChild
                                    >
                                        {renderLink(link)}
                                    </Button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    )
}
