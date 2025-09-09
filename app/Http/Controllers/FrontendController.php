<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;

class FrontendController extends Controller
{
    /* public function index */
    public function index()
    {
        return inertia('Frontend/Index');
    }

    /* public function all rooms */
    public function rooms()
    {
        return inertia('Frontend/Rooms');
    }

    /* public function specific room */
    public function room($id)
    {
        return inertia('Frontend/SpecificRoom');
    }

    /* public function sepcific room by type */
    public function roomType($type)
    {
        $rooms = Room::where('room_type', $type)->limit(20)->get();
        return response()->json($rooms);
    }

    /* public function fetch all rooms */
    public function fetchRooms()
    {
        $rooms = Room::paginate(9);
        return response()->json($rooms);
    }
}
