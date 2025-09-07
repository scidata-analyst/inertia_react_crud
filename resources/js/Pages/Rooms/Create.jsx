"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { toast } from "sonner"

import Layout from "@/Layout"
import { Head, router, usePage } from "@inertiajs/react"

const formSchema = z.object({
    name: z.string().min(2, { message: "Room name must be at least 2 characters." }),
    room_type: z.string().min(2, { message: "Room type is required." }),
    capacity: z.number().min(1, { message: "Capacity must be at least 1." }),
    price: z.number().min(0, { message: "Price must be positive." }),
    description: z.string().optional(),
    image: z.string().url().optional(),
    is_available: z.boolean().default(true),
})

export default function Create() {
    const { errors: serverErrors, flash } = usePage().props

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            room_type: "",
            capacity: 1,
            price: 0,
            description: "",
            image: "",
            is_available: true,
        },
    })

    function onSubmit(values) {
        router.post("/rooms", values, {
            onSuccess: () => {
                console.log(flash?.success)
                if (flash?.success) {
                    toast.success(flash.success, {
                        style: { backgroundColor: "#16a34a", color: "white" },
                    })
                }
                form.reset()
            },
            onError: (errors) => {
                Object.entries(errors).forEach(([key, value]) => {
                    const message = Array.isArray(value) ? value.join(", ") : String(value)
                    //form.setError(key, { type: "server", message })
                    toast.error(message, {
                        style: { backgroundColor: "#dc2626", color: "white" },
                    })
                })
            }
        })
    }

    return (
        <Layout>
            <Head title="Create Room - Hotel Management" />
            <div className="bg-muted/50 flex-1 rounded-xl p-6 md:min-h-min">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                        {/* Room Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Room Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Deluxe Room" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Room Type (Select) */}
                        <FormField
                            control={form.control}
                            name="room_type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Room Type</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Capacity */}
                        <FormField
                            control={form.control}
                            name="capacity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Capacity</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            min="1"
                                            {...field}
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Price */}
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price per Night</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            {...field}
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Image */}
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://example.com/room.jpg" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="col-span-full">
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Room details..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Availability */}
                        <FormField
                            control={form.control}
                            name="is_available"
                            render={({ field }) => (
                                <FormItem className="col-span-full flex flex-row items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel>Available</FormLabel>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button - full width */}
                        <div className="col-span-full">
                            <Button type="submit" className="w-full">
                                Create Room
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </Layout>
    )
}
