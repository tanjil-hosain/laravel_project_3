<?php

use App\Http\Controllers\CatagoryController;
use App\Http\Controllers\CategoryAjaxController;
use App\Http\Controllers\frontend\FrontEndController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/',[FrontEndController::class, 'index']);
Route::get('/about',[FrontEndController::class, 'about']);
Route::get('/contact',[FrontEndController::class, 'contact']);
Route::get('/login',[FrontEndController::class, 'login']);
Route::get('/products',[FrontEndController::class, 'products']);
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard', function () {
    return view('backend.dasboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::prefix('admin')-> middleware('auth')->group(function () {
    Route::resource('product', ProductController::class);
    Route::resource('catagory',CatagoryController::class);
    Route::resource('category-ajax-crud', CategoryAjaxController::class);
});

Route::controller(GoogleController::class)->group(function(){
    Route::get('auth/google', 'redirectToGoogle')->name('auth.google');
    Route::get('auth/google/callback', 'handleGoogleCallback');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
