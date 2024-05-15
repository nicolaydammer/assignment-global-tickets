<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Http\Requests\DashboardStoreRequest;
use App\Http\Requests\DashboardUpdateRequest;
use App\Models\Url;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;


class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $userUrls = $request->user('web')->urls()->get()->toArray();

        return Inertia::render('Dashboard', ['urlData' => $userUrls]);
    }

    public function create(Request $request)
    {
        return Inertia::render('DashboardCreate');
    }

    public function edit(Request $request, int $id): Response|RedirectResponse
    {
        $currentUser = Auth::guard('web')->user();

        $url = Url::query()
            ->where('id', '=', $id)
            ->where('user_id', '=', $currentUser['id'])->first()->toArray();

        if (empty($url)) {
            return to_route('dashboard')->withErrors(['edit' => 'No shortened url has been found with id ' . $id]);
        }

        return Inertia::render('DashboardEdit', ['urlData' => $url]);
    }

    public function store(DashboardStoreRequest $request): RedirectResponse
    {
        $user = Auth::guard('web')->user();
        $urlData = $request->validated();

        $url = new Url($urlData);
        $url['shortened_url'] = Str::random(7);

        $url->user()->associate($user);
        $url->save();

        $userUrls = $user->urls()->get()->all();

        return to_route('dashboard')->with(['urlData' => $userUrls]);
    }

    public function update(DashboardUpdateRequest $request, int $id): RedirectResponse
    {
        $currentUser = Auth::guard('web')->user();
        $editedUrlData = $request->validated();

        $url = Url::query()
            ->where('id', '=', $id)
            ->where('user_id', '=', $currentUser['id']);

        $url->update(['redirect_url' => $editedUrlData['redirect_url']]);

        return to_route('dashboard');
    }

    public function delete(Request $request, int $id): RedirectResponse
    {
        $url = Auth::guard('web')->user()->urls()->find($id);

        if (!$url) {
            return to_route('dashboard')->withErrors(['delete' => 'Could not delete URL']);
        }

        $url->delete();

        return to_route('dashboard');
    }
}
