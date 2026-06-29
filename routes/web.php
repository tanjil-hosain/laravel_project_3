<?php

use App\Http\Controllers\CatagoryController;
use App\Http\Controllers\CategoryAjaxController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('backend.dasboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('admin')-> middleware('auth')->group(function () {
    Route::resource('product', ProductController::class);
    Route::resource('catagory',CatagoryController::class);
    Route::resource('category-ajax-crud', CategoryAjaxController::class);
});

// Route::prefix('admin')->middleware('auth')->group(function (){
//     Route::resource('catagory',CatagoryController::class);
// });



require __DIR__.'/auth.php';
