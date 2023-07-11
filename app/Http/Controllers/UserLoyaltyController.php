<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
class UserLoyaltyController extends Controller
{
    public function index()
    {
        return view('lookup-loyalty-points');
    }
    public function loyaltyLookup()
    {
        $user_id = Auth::user()->id;
        $table_data = DB::table('loyalty_points')->where('user_id', $user_id);
        $loyaltyTotal = DB::table('loyalty_points')->where('user_id',$user_id)->sum('points');
        return view('lookup-loyalty-points')->with(['loyaltyTotal' => $loyaltyTotal, 'tableData' => $table_data]);


        // return DB::table('loyalty_points')->where('user_id',$user_id)->sum('points');
    }
}
