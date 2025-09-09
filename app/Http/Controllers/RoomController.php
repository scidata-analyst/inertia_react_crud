<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use Illuminate\Support\Facades\Auth;

class RoomController extends Controller
{
    /* public function index() */
    public function index(Request $request)
    {
        $currentHotel = Auth::user()->current_hotel;
        $name = $request->query('name');
        $capacity = $request->query('capacity');
        $price = $request->query('price');
        $type = $request->query('type');
        $per_page = $request->query('per_page') ?? 8;

        $query = Room::query();

        if ($currentHotel !== null) {
            $query->where('hotel_id', $currentHotel);
        }

        if ($name) {
            $query->where('name', 'like', "%{$name}%");
        }

        if ($capacity) {
            $query->where('capacity', $capacity);
        }

        if ($price) {
            $query->where('price', $price);
        }

        if ($type) {
            $query->where('room_type', 'like', "%{$type}%");
        }

        $rooms = $query->paginate($per_page)->withQueryString();

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
            'name' => 'required|string|max:255',
            'room_type' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'image' => 'nullable|string|max:2048',
            'is_available' => 'required|boolean',
        ]);

        $room = new Room();
        $room->hotel_id = 1;
        $room->name = $validated['name'];
        $room->room_type = $validated['room_type'];
        $room->capacity = $validated['capacity'];
        $room->price = $validated['price'];
        $room->description = $validated['description'];
        $room->image = $validated['image'];
        $room->is_available = $validated['is_available'];
        $room->save();

        return redirect()->back()->with('success', 'Room created successfully.');
    }

    /* public function edit(Room $room) */
    public function edit(Room $room)
    {
        return inertia('Rooms/Edit', ['room' => $room]);
    }

    /* public function update(Request $request, Room $room) */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'hotel_id' => 'required|exists:hotels,id',
            'name' => 'required|string|max:255',
            'room_type' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'image' => 'nullable|string|max:2048',
            'is_available' => 'required|boolean',
        ]);

        $room = Room::findOrFail($id);
        $room->name = $validated['name'];
        $room->room_type = $validated['room_type'];
        $room->capacity = $validated['capacity'];
        $room->price = $validated['price'];
        $room->description = $validated['description'];
        $room->image = $validated['image'];
        $room->is_available = $validated['is_available'];
        $room->save();

        if ($request->ajax()) {
            return response()->json(['message' => 'Room updated successfully.']);
        }

        return redirect()->back()->with('success', 'Room updated successfully.');
    }

    /* public function destroy(Room $room) */
    public function destroy(Room $room)
    {
        $room->delete();
        return redirect()->route('rooms.index')->with('success', 'Room deleted successfully.');
    }
}
