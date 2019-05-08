<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Cookie;

class CustomAuthenticate
{
    // should check if token
    // 1 -> exists
    // -> valid
    // -> invalid
    // 2 -> doesn't exist
    public function checkToken($request, Closure $next)
    {
        return $next($request);
    }
}
