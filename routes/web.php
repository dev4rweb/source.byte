<?php

use App\Http\Controllers\AboutPageController;
use App\Http\Controllers\ContactsPageController;
use App\Http\Controllers\DetailNewsPageController;
use App\Http\Controllers\GamesPageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\JobsPageController;
use App\Http\Controllers\MainCarouselController;
use App\Http\Controllers\NewsPageController;
use App\Http\Controllers\OurTeamController;
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

Route::get('/detailNewsPage/getThreeLast', [DetailNewsPageController::class, 'getThreeLastPosts'])->name('detailNews.getThreeLastPosts');

Route::get('/socials', [SocialsController::class, 'index'])->name('socials.index');
Route::get('//socials/getSplit', [SocialsController::class, 'getSpit'])->name('socials.getSplit');

Route::get('/about', [AboutPageController::class, 'index'])->name('about.index');

Route::get('/ourTeam', [OurTeamController::class, 'index'])->name('ourTeam.index');

Route::get('/games', [GamesPageController::class, 'index'])->name('games.index');

Route::get('/news', [NewsPageController::class, 'index'])->name('news.index');

Route::get('/jobs', [JobsPageController::class, 'index'])->name('jobs.index');

Route::get('/contacts', [ContactsPageController::class, 'index'])->name('contacts.index');
