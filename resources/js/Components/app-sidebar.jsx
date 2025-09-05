"use client"

import * as React from "react"
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

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Room",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Create Room",
                    url: "#",
                },
                {
                    title: "View Rooms",
                    url: "#",
                },
                {
                    title: "Update Room",
                    url: "#",
                },
                {
                    title: "Delete Room",
                    url: "#",
                },
            ],
        },
        {
            title: "Bookings",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "All Bookings",
                    url: "#",
                },
                {
                    title: "Cancelled Bookings",
                    url: "#",
                },
                {
                    title: "Pending Bookings",
                    url: "#",
                },
                {
                    title: "Completed Bookings",
                    url: "#",
                },
            ],
        },
        {
            title: "User Management",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Users List",
                    url: "#",
                },
                {
                    title: "Roles & Permissions",
                    url: "#",
                },
                {
                    title: "Blocked Users",
                    url: "#",
                },
            ],
        },
        {
            title: "System Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "App Settings",
                    url: "#",
                },
                {
                    title: "Preferences",
                    url: "#",
                },
                {
                    title: "System Health",
                    url: "#",
                },
                {
                    title: "Audit Logs",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "GraphQL API",
            url: "#",
            icon: Frame,
        },
        {
            name: "Design System",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Marketing Site",
            url: "#",
            icon: Map,
        },
    ],
}

export function AppSidebar({ ...props }) {
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
                                    <span className="truncate font-medium">Acme Inc</span>
                                    <span className="truncate text-xs">Enterprise</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
