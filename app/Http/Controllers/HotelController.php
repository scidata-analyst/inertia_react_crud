<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;

class HotelController extends Controller
{
    /* public function index() */
    public function index()
    {
        $hotels = Hotel::all();
        return inertia('Hotels/Index', ['hotels' => $hotels]);
    }

    /* public function show(Hotel $hotel) */
    public function show(Hotel $hotel)
    {
        return inertia('Hotels/Show', ['hotel' => $hotel]);
    }

    /* public function create() */
    public function create()
    {
        return inertia('Hotels/Create');
    }

    /* public function store(Request $request) */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'rating' => 'required|integer|min:1|max:5',
        ]);

        $hotel = Hotel::create($request->all());
        return redirect()->route('hotels.index')->with('success', 'Hotel created successfully.');
    }

    /* public function edit(Hotel $hotel) */
    public function edit(Hotel $hotel)
    {
        return inertia('Hotels/Edit', ['hotel' => $hotel]);
    }

    /* public function update(Request $request, Hotel $hotel) */
    public function update(Request $request, Hotel $hotel)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'rating' => 'required|integer|min:1|max:5',
        ]);

        $hotel->update($request->all());
        return redirect()->route('hotels.index')->with('success', 'Hotel updated successfully.');
    }

    /* public function destroy(Hotel $hotel) */
    public function destroy(Hotel $hotel)
    {
        $hotel->delete();
        return redirect()->route('hotels.index')->with('success', 'Hotel deleted successfully.');
    }
}
