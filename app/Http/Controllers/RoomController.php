<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Room;

class RoomController extends Controller
{
    /* public function index() */
    public function index()
    {
        $rooms = Room::with('hotel')->get();
        return inertia('Rooms/Index', ['rooms' => $rooms]);
    }

    /* public function show(Room $room) */
    public function show(Room $room)
    {
        return inertia('Rooms/Show', ['room' => $room]);
    }

    /* public function create() */
    public function create()
    {
        return inertia('Rooms/Create');
    }

    /* public function store(Request $request) */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'hotel_id' => 'required|exists:hotels,id',
            'name' => 'required|string|max:255',
            'room_type' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'is_available' => 'required|boolean',
        ]);

        $room = Room::create($validated);
        return redirect()->route('rooms.index')->with('success', 'Room created successfully.');
    }

    /* public function edit(Room $room) */
    public function edit(Room $room)
    {
        return inertia('Rooms/Edit', ['room' => $room]);
    }

    /* public function update(Request $request, Room $room) */
    public function update(Request $request, Room $room)
    {
        $validated = $request->validate([
            'hotel_id' => 'required|exists:hotels,id',
            'name' => 'required|string|max:255',
            'room_type' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'is_available' => 'required|boolean',
        ]);

        $room->update($validated);
        return redirect()->route('rooms.index')->with('success', 'Room updated successfully.');
    }

    /* public function destroy(Room $room) */
    public function destroy(Room $room)
    {
        $room->delete();
        return redirect()->route('rooms.index')->with('success', 'Room deleted successfully.');
    }
}
