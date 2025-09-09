import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import HotelListContext from "@/context/hotelListContext";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
    const [hotel, setHotel] = useState(null);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await fetch("/hotel/view/user");
                if (!response.ok) throw new Error("Failed to fetch hotel data");
                const data = await response.json();
                setHotel(data.data);
                setSelectedHotel(data.selectedHotelId);
                setAuth(data.auth);
            } catch (error) {
                console.error("Error fetching hotel:", error);
            }
        };

        fetchHotel();
    }, []);

    return (
        <HotelListContext.Provider value={{ hotel, setHotel, selectedHotel, setSelectedHotel, auth, setAuth }}>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Building Your Application
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <Toaster
                            toastOptions={{
                                classNames: {
                                    error: "bg-red-600 text-white",
                                    success: "bg-green-600 text-white",
                                },
                            }}
                        />
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </HotelListContext.Provider>
    );
}
