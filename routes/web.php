<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     // before getting the view:
//         sleep(1);

//     return Inertia::render('Home', ['name' => 'jb']);
// });

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class);