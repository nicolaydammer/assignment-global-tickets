<?php

use App\Http\Controllers\AuthController;
use App\Http\Middleware\RedirectIfLoggedIn;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//homepage
Route::get('/', function () {
    return Inertia::render('Homepage');
})->name('home');

//authentication routes
Route::middleware([RedirectIfLoggedIn::class])->group(function () {
    Route::get('/login', [AuthController::class, 'loginPage'])->name('login-page');
    Route::get('/register', [AuthController::class, 'registerPage'])->name('register-page');

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});

Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
