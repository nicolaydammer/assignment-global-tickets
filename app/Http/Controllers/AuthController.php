<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

// controller that handles all authentication requests
class AuthController extends Controller
{
    //show register page
    public function registerPage(): Response
    {
        return Inertia::render('Register');
    }

    //show login page
    public function loginPage(): Response
    {
        return Inertia::render('Login');
    }

    //handle registering of new user
    public function register(RegisterRequest $request): RedirectResponse
    {
        $credentials = $request->validated();

        $user = new User($credentials);
        $user->save();

        Auth::guard('web')->login($user);

        return to_route('home')->with(['success' => ['Registered successfully and logged in']]);
    }

    //handle login of a user
    public function login(LoginRequest $request): RedirectResponse
    {
        $credentials = $request->validated();

        if (!Auth::guard('web')->attempt($credentials)) {
            return to_route('login-page')->withErrors(['email' => 'The provided credentials do not match our records']);
        }

        return to_route('home')->with(['success' => ['Login successful']]);
    }

    //logout user
    public function logout(): RedirectResponse
    {
        Auth::guard('web')->logout();
        return to_route('home')->with(['success' => ['Logout successful']]);
    }
}
