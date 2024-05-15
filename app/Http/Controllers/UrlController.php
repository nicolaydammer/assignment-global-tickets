<?php

namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Http\Request;

class UrlController extends Controller
{
    public function index(Request $request, $shortenedUrl)
    {
        $url = Url::query()->where('shortened_url', '=', $shortenedUrl)->get()->first();

        if (empty($url)) {
            abort(404);
        }

        return redirect($url['redirect_url']);
    }
}
