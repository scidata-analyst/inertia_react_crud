<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Booking;

class BookingController extends Controller
{
    /* public function index */
    public function index()
    {
        $bookings = Booking::all();
        return inertia('Bookings/Index', ['bookings' => $bookings]);
    }

    /* public function create */
    public function create()
    {
        return inertia('Bookings/Create');
    }

    /* public function store */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'room_id' => 'required',
            'check_in' => 'required',
            'check_out' => 'required',
            'status' => 'required',
            'payment_status' => 'required',
            'payment_method' => 'required',
            'cost' => 'required',
        ]);

        $booking = new Booking();
        $booking->user_id = $request->user_id;
        $booking->room_id = $request->room_id;
        $booking->check_in = $request->check_in;
        $booking->check_out = $request->check_out;
        $booking->status = $request->status;
        $booking->payment_status = $request->payment_status;
        $booking->payment_method = $request->payment_method;
        $booking->cost = $request->cost;
        $booking->save();

        return redirect()->route('bookings.index')->with('success', 'Booking created successfully.');
    }

    /* public function show */
    public function show($id)
    {
        $booking = Booking::findOrFail($id);
        return inertia('Bookings/Show', ['booking' => $booking]);
    }

    /* public function edit */
    public function edit($id)
    {
        $booking = Booking::findOrFail($id);
        return inertia('Bookings/Edit', ['booking' => $booking]);
    }

    /* public function update */
    public function update(Request $request, $id)
    {
        $request->validate([
            'user_id' => 'required',
            'room_id' => 'required',
            'check_in' => 'required',
            'check_out' => 'required',
            'status' => 'required',
            'payment_status' => 'required',
            'payment_method' => 'required',
            'cost' => 'required',
        ]);

        $booking = Booking::findOrFail($id);
        $booking->user_id = $request->user_id;
        $booking->room_id = $request->room_id;
        $booking->check_in = $request->check_in;
        $booking->check_out = $request->check_out;
        $booking->status = $request->status;
        $booking->payment_status = $request->payment_status;
        $booking->payment_method = $request->payment_method;
        $booking->cost = $request->cost;
        $booking->save();

        return redirect()->back()->with('success', 'Booking updated successfully.');
    }

    /* public function destroy */
    public function destroy($id)
    {
        $booking = Booking::findOrFail($id);
        $booking->delete();
        return redirect()->back()->with('success', 'Booking deleted successfully.');
    }
}
