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

export default function Index({ hotels }) {
    const [loading, setLoading] = useState(false)
    const [selectedHotel, setSelectedHotel] = useState(null)
    const [deleteHotel, setDeleteHotel] = useState(null)
    const [error, setError] = useState(null)
    const [submitting, setSubmitting] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [HotelData, setHotelData] = useState(hotels)
    const [filterData, setFilterData] = useState({
        name: '',
        zip_code: '',
        country: '',
        city: '',
        state: '',
        rating: '',
        per_page: 8,
    })

    /* handle filter */
    const handleFilter = async () => {
        setLoading(true);
        const response = await router.get('/hotels', {
            ...filterData,
            per_page: filterData.per_page || 8,
        }, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: (page) => {
                setHotelData(page.props.hotels);
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
            zip_code: '',
            country: '',
            city: '',
            state: '',
            rating: '',
            per_page: 8,
        });
        setLoading(true);
        const response = await router.get('/hotels', {

        }, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: (page) => {
                setHotelData(page.props.hotels);
                setLoading(false);
            },
            onError: () => {
                setLoading(false);
            }
        });
    }

    /* handle update hotel */
    const handleEditSubmit = (e) => {
        e.preventDefault()

        setSubmitting(true)
        const formData = new FormData()
        formData.append("_method", "PUT")
        formData.append("name", selectedHotel.name)
        formData.append("description", selectedHotel.description)
        formData.append("address", selectedHotel.address)
        formData.append("city", selectedHotel.city)
        formData.append("state", selectedHotel.state)
        formData.append("country", selectedHotel.country)
        formData.append("zip_code", selectedHotel.zip_code)
        formData.append("phone", selectedHotel.phone)
        formData.append("email", selectedHotel.email)
        formData.append("rating", selectedHotel.rating)
        formData.append("latitude", selectedHotel.latitude)
        formData.append("longitude", selectedHotel.longitude)
        formData.append("image", selectedHotel.image)

        fetch(`/hotels/${selectedHotel.id}`, {
            method: "POST",
            body: formData,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        })

        toast.success("Hotel updated successfully!", {
            style: { backgroundColor: "#16a34a", color: "white" },
        })

        setHotelData(HotelData)
        setError(null)
        setSubmitting(false)
        setIsDialogOpen(false)
        router.reload()
    }

    /* handle delete hotel */
    const handleDeleteConfirm = () => {
        // TODO: Replace with API call
        console.log("Deleted hotel:", deleteHotel)
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
            <Head title="Hotel - Hotel Management" />
            <div className="">
                <h1 className="text-2xl font-bold mb-4">Hotels</h1>

                {/* Filters */}
                <div className="border rounded-lg mb-4 p-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-2 flex-wrap">
                            {loading ? (
                                Array.from({ length: 6 }).map((_, i) => (
                                    <div
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
                                        placeholder="Filter by Zip Code"
                                        className="w-[180px]"
                                        onChange={(e) => setFilterData({ ...filterData, zip_code: e.target.value })}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Filter by Country"
                                        className="w-[180px]"
                                        onChange={(e) => setFilterData({ ...filterData, country: e.target.value })}
                                    />
                                    <Select onValueChange={(value) => setFilterData({ ...filterData, city: value })}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Filter by City" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Cities</SelectItem>
                                            <SelectItem value="newyork">New York</SelectItem>
                                            <SelectItem value="losangeles">Los Angeles</SelectItem>
                                            <SelectItem value="chicago">Chicago</SelectItem>
                                            <SelectItem value="houston">Houston</SelectItem>
                                            <SelectItem value="miami">Miami</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Select onValueChange={(value) => setFilterData({ ...filterData, state: value })}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Filter by State" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All States</SelectItem>
                                            <SelectItem value="ny">New York</SelectItem>
                                            <SelectItem value="ca">California</SelectItem>
                                            <SelectItem value="il">Illinois</SelectItem>
                                            <SelectItem value="tx">Texas</SelectItem>
                                            <SelectItem value="fl">Florida</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Select onValueChange={(value) => setFilterData({ ...filterData, rating: value })}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Filter by Rating" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Ratings</SelectItem>
                                            <SelectItem value="1">1 Star</SelectItem>
                                            <SelectItem value="2">2 Stars</SelectItem>
                                            <SelectItem value="3">3 Stars</SelectItem>
                                            <SelectItem value="4">4 Stars</SelectItem>
                                            <SelectItem value="5">5 Stars</SelectItem>
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

                {/* Hotels */}
                <div className="bg-muted/50 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-2 gap-4 border rounded-xl">
                    {loading
                        ? Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="p-2 rounded-2xl">
                                <Card className="w-full animate-pulse">
                                    <CardHeader>
                                        <div className="h-6 w-3/4 bg-muted rounded mb-2" />
                                        <div className="h-4 w-1/2 bg-muted rounded" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-6 w-24 bg-muted rounded mb-4" />
                                        <div className="w-full aspect-video bg-muted rounded-xl" />
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-2">
                                        <div className="h-10 w-full bg-muted rounded" />
                                        <div className="h-10 w-full bg-muted rounded" />
                                    </CardFooter>
                                </Card>
                            </div>
                        ))
                        : HotelData?.data.map((hotel) => (
                            <div key={hotel.id} className="p-2 rounded-2xl">
                                <Card className="w-full">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold">
                                            {hotel.name}
                                        </CardTitle>
                                        <CardDescription>{hotel.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground leading-6">
                                        <div>
                                            <span className="text-4xl leading-none font-bold text-foreground">
                                                {hotel.rating} Star
                                            </span>
                                            <span className="ml-1.5 mr-1">/Rating</span>
                                            <Tooltip>
                                                <TooltipTrigger className="mb-1">
                                                    <CircleHelpIcon className="h-4 w-4" />
                                                </TooltipTrigger>
                                                <TooltipContent className="max-w-xs">
                                                    <p>
                                                        {hotel.address}, {hotel.city}, {hotel.state}{" "}
                                                        {hotel.zip}
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
                                                    onClick={() => setSelectedHotel(hotel)}
                                                >
                                                    Update Hotel
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[800px]">
                                                <form onSubmit={handleEditSubmit}>
                                                    <DialogHeader className={"mb-4"}>
                                                        <DialogTitle>Edit Hotel</DialogTitle>
                                                        <DialogDescription>
                                                            Update hotel information below.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    {selectedHotel && (
                                                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                                                            {/* Name */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="name">Hotel Name</Label>
                                                                <Input
                                                                    id="name"
                                                                    value={selectedHotel.name}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({ ...selectedHotel, name: e.target.value })
                                                                    }
                                                                />
                                                                {error?.name && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.name[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Address */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="address">Address</Label>
                                                                <Input
                                                                    id="address"
                                                                    value={selectedHotel.address}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({ ...selectedHotel, address: e.target.value })
                                                                    }
                                                                />
                                                                {error?.address && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.address[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* City */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="city">City</Label>
                                                                <Input
                                                                    id="city"
                                                                    value={selectedHotel.city}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({ ...selectedHotel, city: e.target.value })
                                                                    }
                                                                />
                                                                {error?.city && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.city[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* State */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="state">State</Label>
                                                                <Input
                                                                    id="state"
                                                                    value={selectedHotel.state}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({ ...selectedHotel, state: e.target.value })
                                                                    }
                                                                />
                                                                {error?.state && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.state[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Country */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="country">Country</Label>
                                                                <Input
                                                                    id="country"
                                                                    value={selectedHotel.country}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({ ...selectedHotel, country: e.target.value })
                                                                    }
                                                                />
                                                                {error?.country && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.country[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* ZIP Code */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="zip_code">ZIP Code</Label>
                                                                <Input
                                                                    id="zip_code"
                                                                    value={selectedHotel.zip_code}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({ ...selectedHotel, zip_code: e.target.value })
                                                                    }
                                                                />
                                                                {error?.zip_code && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.zip_code[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Phone */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="phone">Phone</Label>
                                                                <Input
                                                                    id="phone"
                                                                    value={selectedHotel.phone}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({ ...selectedHotel, phone: e.target.value })
                                                                    }
                                                                />

                                                                {error?.phone && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.phone[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Email */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="email">Email</Label>
                                                                <Input
                                                                    id="email"
                                                                    type="email"
                                                                    value={selectedHotel.email}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({ ...selectedHotel, email: e.target.value })
                                                                    }
                                                                />

                                                                {error?.email && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.email[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Rating */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="rating">Rating</Label>
                                                                <Input
                                                                    id="rating"
                                                                    type="number"
                                                                    min={0}
                                                                    max={5}
                                                                    step={0.1}
                                                                    value={selectedHotel.rating}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({
                                                                            ...selectedHotel,
                                                                            rating: Number(e.target.value),
                                                                        })
                                                                    }
                                                                />
                                                                {error?.rating && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.rating[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Latitude */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="latitude">Latitude</Label>
                                                                <Input
                                                                    id="latitude"
                                                                    type="number"
                                                                    step="0.000001"
                                                                    value={selectedHotel.latitude}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({
                                                                            ...selectedHotel,
                                                                            latitude: Number(e.target.value),
                                                                        })
                                                                    }
                                                                />
                                                                {error?.latitude && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.latitude[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Longitude */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="longitude">Longitude</Label>
                                                                <Input
                                                                    id="longitude"
                                                                    type="number"
                                                                    step="0.000001"
                                                                    value={selectedHotel.longitude}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({
                                                                            ...selectedHotel,
                                                                            longitude: Number(e.target.value),
                                                                        })
                                                                    }
                                                                />

                                                                {error?.longitude && (
                                                                    <p className="text-sm text-red-600 mt-1">
                                                                        {error.longitude[0]}
                                                                    </p>
                                                                )}
                                                            </div>

                                                            {/* Image */}
                                                            <div className="grid gap-2">
                                                                <Label htmlFor="image">Image URL</Label>
                                                                <Input
                                                                    id="image"
                                                                    value={selectedHotel.image}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({ ...selectedHotel, image: e.target.value })
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
                                                                    value={selectedHotel.description}
                                                                    onChange={(e) =>
                                                                        setSelectedHotel({ ...selectedHotel, description: e.target.value })
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
                                                    onClick={() => setDeleteHotel(hotel)}
                                                >
                                                    Delete Hotel
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[400px]">
                                                <DialogHeader>
                                                    <DialogTitle>Delete Hotel</DialogTitle>
                                                    <DialogDescription>
                                                        Are you sure you want to delete{" "}
                                                        <span className="font-semibold">
                                                            {deleteHotel?.name}
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
                                    <div
                                        key={i}
                                        className="h-9 w-9 bg-muted animate-pulse rounded"
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="text-sm text-muted-foreground">
                                Showing {HotelData?.from} to {HotelData?.to} of {HotelData?.total} entries
                            </div>
                            <div className="text-right">
                                {HotelData.links.map((link, index) => (
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
