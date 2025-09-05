import React, { useState } from "react"
import Layout from "@/Layout"
import { Head } from "@inertiajs/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const invoices = [
    { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
    { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
    { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
    { invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
    { invoice: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
    { invoice: "INV006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
    { invoice: "INV007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
    { invoice: "INV008", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
    { invoice: "INV009", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
    { invoice: "INV010", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
    { invoice: "INV011", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
    { invoice: "INV012", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
    { invoice: "INV013", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
    { invoice: "INV014", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
    { invoice: "INV015", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
    { invoice: "INV016", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
    { invoice: "INV017", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
    { invoice: "INV018", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
    { invoice: "INV019", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
    { invoice: "INV020", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
    { invoice: "INV021", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
]

export default function Index() {
    const [filters, setFilters] = useState({
        invoice: "",
        status: "all",
        method: "all",
    })
    const [appliedFilters, setAppliedFilters] = useState(filters)
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(5)

    /* Filtering */
    const filteredInvoices = invoices.filter((inv) => {
        return (
            (appliedFilters.invoice === "" ||
                inv.invoice.toLowerCase().includes(appliedFilters.invoice.toLowerCase())) &&
            (appliedFilters.status === "all" ||
                inv.paymentStatus.toLowerCase() === appliedFilters.status.toLowerCase()) &&
            (appliedFilters.method === "all" ||
                inv.paymentMethod.toLowerCase() === appliedFilters.method.toLowerCase())
        )
    })

    /* Pagination */
    const totalPages = Math.ceil(filteredInvoices.length / perPage)
    const startIndex = (currentPage - 1) * perPage
    const paginatedInvoices = filteredInvoices.slice(startIndex, startIndex + perPage)

    const handleFilterSubmit = (e) => {
        e.preventDefault()
        setAppliedFilters(filters)
        setCurrentPage(1)
    }

    return (
        <Layout>
            <Head title="Rooms - Hotel Management" />
            <div className="">
                <h1 className="text-2xl font-bold mb-4">Rooms</h1>

                {/* Advanced Filter */}
                <form onSubmit={handleFilterSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <Input
                        placeholder="Search Invoice ID"
                        value={filters.invoice}
                        onChange={(e) => setFilters({ ...filters, invoice: e.target.value })}
                    />

                    <Select
                        value={filters.status}
                        onValueChange={(val) => setFilters({ ...filters, status: val })}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="Paid">Paid</SelectItem>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="Unpaid">Unpaid</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select
                        value={filters.method}
                        onValueChange={(val) => setFilters({ ...filters, method: val })}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by Method" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="Credit Card">Credit Card</SelectItem>
                            <SelectItem value="PayPal">PayPal</SelectItem>
                            <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button type="submit">Apply Filters</Button>
                </form>

                {/* Table */}
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedInvoices.length > 0 ? (
                            paginatedInvoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-6">
                                    No results found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>

                {/* Pagination Buttons */}
                <div className="flex justify-end gap-2 mt-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>


                {/* Rows per page */}
                <div className="flex justify-between items-center mb-4 mt-4">
                    <div className="flex items-center gap-2">
                        <span>Rows per page:</span>
                        <Select value={perPage.toString()} onValueChange={(val) => setPerPage(Number(val))}>
                            <SelectTrigger className="w-[100px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        Page {currentPage} of {totalPages}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
