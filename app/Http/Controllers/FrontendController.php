<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
