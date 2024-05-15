<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\RedirectIfLoggedIn;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//homepage
Route::get('/', function () {
    return Inertia::render('Homepage');
})->name('home');

//routes you cant be logged in for
Route::middleware([RedirectIfLoggedIn::class])->group(function () {
    Route::get('/login', [AuthController::class, 'loginPage'])->name('login');
    Route::get('/register', [AuthController::class, 'registerPage'])->name('register');

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});

// routes you need to be logged in for
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/create', [DashboardController::class, 'create'])->name('dashboard.create');
    Route::get('/dashboard/{id}', [DashboardController::class, 'edit'])->name('dashboard.edit');

    Route::post('/dashboard', [DashboardController::class, 'store']);
    Route::put('/dashboard/{id}', [DashboardController::class, 'update']);
    Route::delete('/dashboard/{id}', [DashboardController::class, 'delete']);
});
