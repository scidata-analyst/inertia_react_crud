"use client"

import { lazy, Suspense } from "react"
import {
    BookOpen,
    Bot,
    Command,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
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

const data = {
    user: { name: "shadcn", email: "m@example.com", avatar: "https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" },
    navMain: [
        {
            title: "Room",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                { title: "Create Room", url: "#" },
                { title: "View Rooms", url: "#" },
                { title: "Update Room", url: "#" },
                { title: "Delete Room", url: "#" },
            ],
        },
        {
            title: "Hotel",
            url: "#",
            icon: SquareTerminal,
            items: [
                { title: "Create Hotel", url: "#" },
                { title: "View Hotel", url: "#" },
                { title: "Update Hotel", url: "#" },
                { title: "Delete Hotel", url: "#" },
            ],
        },
        {
            title: "Bookings",
            url: "#",
            icon: Bot,
            items: [
                { title: "All Bookings", url: "#" },
                { title: "Cancelled Bookings", url: "#" },
                { title: "Pending Bookings", url: "#" },
                { title: "Completed Bookings", url: "#" },
            ],
        },
        {
            title: "User Management",
            url: "#",
            icon: BookOpen,
            items: [
                { title: "Users List", url: "#" },
                { title: "Roles & Permissions", url: "#" },
                { title: "Blocked Users", url: "#" },
            ],
        },
        {
            title: "System Settings",
            url: "#",
            icon: Settings2,
            items: [
                { title: "App Settings", url: "#" },
                { title: "Preferences", url: "#" },
                { title: "System Health", url: "#" },
                { title: "Audit Logs", url: "#" },
            ],
        },
    ],
    navSecondary: [
        { title: "Support", url: "#", icon: LifeBuoy },
        { title: "Feedback", url: "#", icon: Send },
    ],
    projects: [
        { name: "GraphQL API", url: "#", icon: Frame },
        { name: "Design System", url: "#", icon: PieChart },
        { name: "Marketing Site", url: "#", icon: Map },
    ],
}

export function AppSidebar(props) {
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
