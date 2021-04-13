<?php

use App\Http\Controllers\AboutPageController;
use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\ApplyJobPageController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\ContactsPageController;
use App\Http\Controllers\DetailGamePageController;
use App\Http\Controllers\DetailNewsPageController;
use App\Http\Controllers\GamesPageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\JobsPageController;
use App\Http\Controllers\MainCarouselController;
use App\Http\Controllers\NewsPageController;
use App\Http\Controllers\OurTeamController;
use App\Http\Controllers\PressPageController;
use App\Http\Controllers\SecondCarouselController;
use App\Http\Controllers\SendMailController;
use App\Http\Controllers\SocialsController;
use App\Http\Controllers\SubmitGameFormController;
use App\Http\Controllers\SubmitPageController;
use App\Http\Controllers\WelcomeController;
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

/*Route::get('/laravel', function () {
    return view('welcome');
});*/

Route::get('/welcome', [WelcomeController::class, 'index'])->name('welcome.index');

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

Route::post('/contactForm/store', [ContactFormController::class, 'store'])->name('contactForm.store');

Route::post('/send-email/sendEmail', [SendMailController::class, 'sendEmail'])->name('send.email');
Route::post('/send-email/sendEmailContact', [SendMailController::class, 'sendEmailContact'])->name('send-email.contact');

Route::get('/press', [PressPageController::class, 'index'])->name('press.index');

Route::get('/submit', [SubmitPageController::class, 'index'])->name('submit.index');

Route::get('/submit-game-form', [SubmitGameFormController::class, 'index'])->name('submit-form.index');
Route::post('/submit-game-form/store', [SubmitGameFormController::class, 'store'])->name('submit-form.store');

Route::get('/jobs/apply-job', [ApplyJobPageController::class, 'index'])->name('apply-job.index');

Route::get('/news/newsId', [DetailNewsPageController::class, 'index'])->name('newsId.index');
/*https://youtu.be/CNGCelC8n24?t=4982*/
Route::get('/games/gameId', [DetailGamePageController::class, 'index'])->name('gameId.index');



Route::group(['middleware' => ['auth']], function () {
    Route::get('/admin', [AdminPageController::class, 'index'])->name('admin.index');

    Route::get('/homePage/indexApi', [HomePageController::class, 'indexApi']);

    Route::get('/main-carousel', [MainCarouselController::class, 'index'])->name('main-carousel.index');
    Route::post('/main-carousel/store', [MainCarouselController::class, 'store'])->name('main-carousel.store');
    Route::post('/main-carousel/update/{id}', [MainCarouselController::class, 'update'])->name('main-carousel.update');
    Route::delete('/main-carousel/destroy/{id}', [MainCarouselController::class, 'destroy'])->name('main-carousel.delete');
});


