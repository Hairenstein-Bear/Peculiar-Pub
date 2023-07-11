<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LoyaltyController;
use App\Http\Controllers\UserLoyaltyController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/addpoints', function () {
    return Inertia::render('AddPoints');
})->middleware(['auth', 'verified'])->name('addpoints');

Route::get('add-loyalty-points-form', [LoyaltyController::class, 'index']);
Route::post('store-form', [LoyaltyController::class, 'store']);

Route::get('/lookuppoints', function () {
    return Inertia::render('LookupPoints');
})->middleware(['auth', 'verified'])->name('lookuppoints');

Route::get('/redeempoints', function () {
    return Inertia::render('RedeemPoints');
})->middleware(['auth', 'verified'])->name('RedeemPoints');

// Route::get('/loyalty', [LoyaltyController::class, ''])->name('loyalty.index');

Route::get('lookup-loyalty-points', [UserLoyaltyController::class, 'loyaltyLookup']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
