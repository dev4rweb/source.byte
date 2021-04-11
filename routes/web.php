<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\MainCarouselController;
use App\Http\Controllers\SecondCarouselController;
use App\Http\Controllers\SocialsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/laravel', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/', [HomePageController::class, 'index'])->name('home.index');

Route::get('/mainCarousel', [MainCarouselController::class, 'index'])->name('mainCarousel.index');

Route::get('/secondCarousel', [SecondCarouselController::class, 'index'])->name('secondCarousel.index');

Route::get('/socials', [SocialsController::class, 'index'])->name('socials.index');
