import Layout from "@/Layout"
import { Head } from "@inertiajs/react"

export default function Page() {
    return (
        <Layout>
            <Head title="Dashboard" />
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl">
                    <div className="flex flex-col items-center justify-center gap-1 h-full p-4">
                        <h1 className="text-2xl">Total Room</h1>
                        <h2 className="text-4xl">10</h2>
                    </div>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl">
                    <div className="flex flex-col items-center justify-center gap-1 h-full p-4">
                        <h1 className="text-2xl">Total Booking</h1>
                        <h2 className="text-4xl">20</h2>
                    </div>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl">
                    <div className="flex flex-col items-center justify-center gap-1 h-full p-4">
                        <h1 className="text-2xl">Total Revenue</h1>
                        <h2 className="text-4xl">$1000</h2>
                    </div>
                </div>
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </Layout>
    )
}
