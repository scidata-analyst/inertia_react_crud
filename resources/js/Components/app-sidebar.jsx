"use client"
import HotelListContext from "@/context/HotelListContext"
import { lazy, Suspense, useContext, useState } from "react"
import {
    BookOpen,
    Bot,
    Command,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const NavMain = lazy(() =>
    import("@/components/nav-main").then(module => ({ default: module.NavMain }))
)

// const NavProjects = lazy(() =>
//     import("@/components/nav-projects").then(module => ({ default: module.NavProjects }))
// )

const NavSecondary = lazy(() =>
    import("@/components/nav-secondary").then(module => ({ default: module.NavSecondary }))
)

const NavUser = lazy(() =>
    import("@/components/nav-user").then(module => ({ default: module.NavUser }))
)

function Skeleton({ className }) {
    return <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
}

export function AppSidebar(props) {
    const { hotel, selectedHotel, setSelectedHotel, auth, setAuth } = useContext(HotelListContext);

    const data = {
        user: {
            name: auth?.name ?? "John Doe",
            email: auth?.email ?? "1Ft9M@example.com",
            avatar: "https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
        },
        navMain: [
            {
                title: "Hotel",
                url: "#",
                icon: SquareTerminal,
                isActive: true,
                items: [
                    { title: "Create Hotel", url: "/hotels/create" },
                    { title: "View Hotel", url: "/hotels" },
                ],
            },
            {
                title: "Room",
                url: "#",
                icon: SquareTerminal,
                items: [
                    { title: "Create Room", url: "/rooms/create" },
                    { title: "View Rooms", url: "/rooms" },
                ],
            },
            {
                title: "Bookings",
                url: "#",
                icon: Bot,
                items: [
                    { title: "All Bookings", url: "/bookings" },
                ],
            },
            {
                title: "User Management",
                url: "#",
                icon: BookOpen,
                items: [
                    { title: "Users List", url: "#" },
                    { title: "Roles & Permissions", url: "#" },
                ],
            },
        ],
        navSecondary: [
            { title: "Support", url: "#", icon: LifeBuoy },
        ],
        projects: [
            { name: "GraphQL API", url: "#", icon: Frame },
            { name: "Design System", url: "#", icon: PieChart },
            { name: "Marketing Site", url: "#", icon: Map },
        ],
    }


    const updateSelectedHotel = (hotelId) => {
        setSelectedHotel(hotelId);

        fetch(`/hotel/select/${hotelId}`, {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
    };

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <Skeleton className="h-4 w-24 mb-1" />
                                    <Skeleton className="h-3 w-16" />
                                </div>
                            </a>
                        </SidebarMenuButton>

                        {!hotel || hotel.length === 0 ? (
                            <Skeleton className="h-10 w-full" />
                        ) : (
                            <Select
                                value={selectedHotel?.toString() || ""}
                                onValueChange={updateSelectedHotel}
                            >
                                <SelectTrigger className="w-full mt-4">
                                    <SelectValue placeholder="Select Hotel" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Hotel Lists</SelectLabel>
                                        {hotel.map((h) => (
                                            <SelectItem key={h.id} value={h.id.toString()}>
                                                {h.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}

                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <Suspense fallback={<Skeleton className="h-6 my-2 w-full" />}>
                    <NavMain items={data.navMain} />
                </Suspense>

                <Suspense fallback={<Skeleton className="h-6 my-2 w-full" />}>
                    {/* <NavProjects projects={data.projects} /> */}
                </Suspense>

                <Suspense fallback={<Skeleton className="h-6 my-2 w-full" />}>
                    <NavSecondary items={data.navSecondary} className="mt-auto" />
                </Suspense>
            </SidebarContent>

            <SidebarFooter>
                <Suspense fallback={<Skeleton className="h-12 w-full rounded-full" />}>
                    <NavUser user={data.user} />
                </Suspense>
            </SidebarFooter>
        </Sidebar>
    )
}
