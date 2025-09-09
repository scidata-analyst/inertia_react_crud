"use client"

import Layout from "@/Layout"
import { Head } from "@inertiajs/react"
import * as React from "react"

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

/* Column definitions for bookings */
export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => <div>{row.getValue("id")}</div>,
    },
    {
        accessorKey: "user.name",
        header: "User",
        cell: ({ row }) => <div>{row.original.user?.name}</div>,
    },
    {
        accessorKey: "room.name",
        header: "Room",
        cell: ({ row }) => <div>{row.original.room?.name}</div>,
    },
    {
        accessorKey: "check_in",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Check In
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => (
            <div>{row.getValue("check_in")}</div>
        ),
    },
    {
        accessorKey: "check_out",
        header: "Check Out",
        cell: ({ row }) => (
            <div>{row.getValue("check_out")}</div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <span
                className={`capitalize ${row.getValue("status") === "confirmed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
            >
                {row.getValue("status")}
            </span>
        ),
    },
    {
        accessorKey: "payment_status",
        header: "Payment",
        cell: ({ row }) => (
            <span
                className={`capitalize ${row.getValue("payment_status") === "paid"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
            >
                {row.getValue("payment_status")}
            </span>
        ),
    },
    {
        accessorKey: "payment_method",
        header: "Method",
        cell: ({ row }) => <div>{row.getValue("payment_method")}</div>,
    },
    {
        accessorKey: "cost",
        header: "Cost",
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("cost"))
            return (
                <div className="font-medium">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(price)}
                </div>
            )
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const booking = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(booking.id)}
                        >
                            Copy Booking ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Booking</DropdownMenuItem>
                        <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

function DataTable({ data }) {
    const [sorting, setSorting] = React.useState([])
    const [columnFilters, setColumnFilters] = React.useState([])
    const [columnVisibility, setColumnVisibility] = React.useState({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter by user..."
                    value={table.getColumn("user.name")?.getFilterValue() ?? ""}
                    onChange={(event) =>
                        table.getColumn("user.name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="text-muted-foreground flex-1 text-sm">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} booking(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default function Index({ bookings }) {
    return (
        <Layout>
            <Head title="Bookings" />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Bookings</h1>
                <DataTable data={bookings} />
            </div>
        </Layout>
    )
}
