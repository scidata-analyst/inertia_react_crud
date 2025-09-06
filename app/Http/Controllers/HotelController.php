<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;

class HotelController extends Controller
{
    /* public function index() */
    public function index(Request $request)
    {
        $name = $request->query('name');
        $zip_code = $request->query('zip_code');
        $city = $request->query('city');
        $state = $request->query('state');
        $country = $request->query('country');
        $rating = $request->query('rating');
        $per_page = $request->query('per_page') ?? 8;

        $query = Hotel::query();

        if ($name) {
            $query->where('name', 'like', "%{$name}%");
        }

        if ($zip_code) {
            $query->where('zip_code', $zip_code);
        }

        if ($city) {
            $query->where('city', 'like', "%{$city}%");
        }

        if ($state) {
            $query->where('state', 'like', "%{$state}%");
        }

        if ($country) {
            $query->where('country', 'like', "%{$country}%");
        }

        if ($rating) {
            $query->where('rating', $rating);
        }

        $hotels = $query->paginate($per_page);

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
            'description' => 'nullable|string',
            'address' => 'required|string|max:255',
            'city' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'zip_code' => 'nullable|string|max:20',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'rating' => 'required|integer|min:1|max:5',
            'latitude' => 'nullable|numeric|between:-90,90',
            'longitude' => 'nullable|numeric|between:-180,180',
            'image' => 'nullable|url|max:2048',
        ]);

        $hotel = new Hotel();
        $hotel->name = $request->name;
        $hotel->slug = str()->slug($request->name) . '-' . uniqid() . '-' . now()->timestamp;
        $hotel->description = $request->description;
        $hotel->address = $request->address;
        $hotel->city = $request->city;
        $hotel->state = $request->state;
        $hotel->country = $request->country;
        $hotel->zip_code = $request->zip_code;
        $hotel->phone = $request->phone;
        $hotel->email = $request->email;
        $hotel->rating = $request->rating;
        $hotel->latitude = $request->latitude;
        $hotel->longitude = $request->longitude;
        $hotel->image = $request->image;
        $hotel->save();

        return redirect()->back()->with('success', 'Hotel created successfully.');
    }

    /* public function edit(Hotel $hotel) */
    public function edit(Hotel $hotel)
    {
        return inertia('Hotels/Edit', ['hotel' => $hotel]);
    }

    /* public function update(Request $request, Hotel $hotel) */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'address' => 'required|string|max:255',
            'city' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'zip_code' => 'nullable|string|max:20',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'rating' => 'required|numeric|min:1|max:5',
            'latitude' => 'nullable|numeric|between:-90,90',
            'longitude' => 'nullable|numeric|between:-180,180',
            'image' => 'nullable|url|max:2048',
        ]);

        $hotel = Hotel::findOrFail($id);
        $hotel->name = $request->name;
        $hotel->slug = str()->slug($request->name) . '-' . $hotel->id;
        $hotel->description = $request->description;
        $hotel->address = $request->address;
        $hotel->city = $request->city;
        $hotel->state = $request->state;
        $hotel->country = $request->country;
        $hotel->zip_code = $request->zip_code;
        $hotel->phone = $request->phone;
        $hotel->email = $request->email;
        $hotel->rating = $request->rating;
        $hotel->latitude = $request->latitude;
        $hotel->longitude = $request->longitude;
        $hotel->image = $request->image;
        $hotel->save();

        if($request->ajax()){
            return response()->json(['message' => 'Hotel updated successfully.']);
        }

        return redirect()->back()->with('success', 'Hotel updated successfully.');
    }

    /* public function destroy(Hotel $hotel) */
    public function destroy(Hotel $hotel)
    {
        $hotel->delete();
        return redirect()->route('hotels.index')->with('success', 'Hotel deleted successfully.');
    }
}
