<?php

namespace App\Http\Controllers\api\web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Support\Facades\Input;
class PostController extends Controller
{
    public function index()
    {
        $skip = Input::get('skip');
        $take = Input::get('take');
        if (!isset($skip) || !isset($take)) {
            return response()->json(['error' => 'need more info, hombre'], 400);
        }
        if ($take > 10) {
            return response()->json(['error' => 'yo cant ask for more than 10 in one request homies'], 400);
        }
        $posts = Post::skip($skip)->take($take)->get();
        return response()->json(['posts'=>$posts]);
    }
    public function getPost($post_id)
    {
        $post = Post::where('id', $post_id);
        return response()->json(['post'=>$post]);
    }
}
