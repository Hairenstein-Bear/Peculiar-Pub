<?php

namespace App\Http\Controllers;

use App\Models\LoyaltyPoints;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class LoyaltyController extends Controller
{
    public function index()
    {
        return view('add-loyalty-points-form');
    }
    public function store(Request $request)
    {
        $user_id = Auth::user()->id;
        $post = new LoyaltyPoints;
        $post->points = $request->points;
        $post->user_id = $user_id;
        $post->save();
        return redirect('add-loyalty-points-form')->with('status','Points have been added');
    }
}
