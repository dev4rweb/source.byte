<?php

use App\Http\Controllers\AboutPageController;
use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\ApplyJobPageController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\ContactsPageController;
use App\Http\Controllers\DetailGamePageController;
use App\Http\Controllers\DetailNewsPageController;
use App\Http\Controllers\ErrorPageController;
use App\Http\Controllers\GameCarouselController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\GamePurchaseController;
use App\Http\Controllers\GamesPageController;
use App\Http\Controllers\GamesRequirementsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\JobsPageController;
use App\Http\Controllers\LookingJobController;
use App\Http\Controllers\MainCarouselController;
use App\Http\Controllers\NewsController;
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
Route::get('/socials/getSplit', [SocialsController::class, 'getSpit'])->name('socials.getSplit');

Route::get('/about', [AboutPageController::class, 'index'])->name('about.index');

Route::get('/ourTeam', [OurTeamController::class, 'index'])->name('ourTeam.index');

Route::get('/games', [GamesPageController::class, 'index'])->name('games.index');

Route::get('/news', [NewsPageController::class, 'index'])->name('news.index');

Route::get('/jobs', [JobsPageController::class, 'index'])->name('jobs.index');


Route::get('/contacts', [ContactsPageController::class, 'index'])->name('contacts.index');

Route::post('/contactForm/store', [ContactFormController::class, 'store'])->name('contactForm.store');

Route::post('/send-email/sendEmail', [SendMailController::class, 'sendEmail'])->name('send.email');
Route::post('/send-email/sendEmailContact', [SendMailController::class, 'sendEmailContact'])->name('send-email.contact');
Route::post('/send-email/sendEmailJob', [SendMailController::class, 'sendEmailJobForm'])->name('send-email.job');

Route::get('/press', [PressPageController::class, 'index'])->name('press.index');

Route::get('/submit', [SubmitPageController::class, 'index'])->name('submit.index');

Route::get('/submit-game-form', [SubmitGameFormController::class, 'index'])->name('submit-form.index');
Route::post('/submit-game-form/store', [SubmitGameFormController::class, 'store'])->name('submit-form.store');


Route::post('/looking-job-form/store', [LookingJobController::class, 'store'])->name('looking-job.store');

Route::get('/jobs/apply-job', [ApplyJobPageController::class, 'index'])->name('apply-job.index');
Route::get('/apply-job/{id}', [JobController::class, 'show'])->name('apply-job.show');

Route::get('/news/newsId', [DetailNewsPageController::class, 'index'])->name('newsId.index');
Route::get('/news/{id}', [NewsController::class, 'show'])->name('news-id.show');
Route::get('/news-all', [NewsController::class, 'index'])->name('news-all.index');

/*https://youtu.be/CNGCelC8n24?t=4982*/
Route::get('/games/gameId', [DetailGamePageController::class, 'index'])->name('gameId.index');
Route::get('/games/{id}', [GameController::class, 'show'])->name('game-id.show');
Route::get('/game-carousel', [GameCarouselController::class, 'index'])->name('game-carousel.index');
Route::get('/game-carousel/{id}', [GameCarouselController::class, 'getCarouselById'])->name('game-carousel-byId.index');

Route::get('/games-all', [GameController::class, 'index'])->name('games-all.index');
Route::get('/games-requirements', [GamesRequirementsController::class, 'index'])->name('games-requirements.index');
Route::get('/games-requirements/{id}', [GamesRequirementsController::class, 'show'])->name('games-requirements.show');

Route::get('/game-purchase', [GamePurchaseController::class, 'index'])->name('game-purchase.index');
Route::get('/game-purchase/{id}', [GamePurchaseController::class, 'show'])->name('game-purchase.show');

Route::group(['middleware' => ['auth']], function () {
    Route::get('/admin', [AdminPageController::class, 'index'])->name('admin.index');

    // Home Page Start
    Route::get('/homePage/indexApi', [HomePageController::class, 'indexApi']);

    Route::get('/main-carousel', [MainCarouselController::class, 'index'])->name('main-carousel.index');
    Route::post('/main-carousel/store', [MainCarouselController::class, 'store'])->name('main-carousel.store');
    Route::post('/main-carousel/update/{id}', [MainCarouselController::class, 'update'])->name('main-carousel.update');
    Route::delete('/main-carousel/destroy/{id}', [MainCarouselController::class, 'destroy'])->name('main-carousel.delete');

    Route::post('/homePage/update', [HomePageController::class, 'update'])->name('home-page.update');

    Route::post('/secondCarousel/create', [SecondCarouselController::class, 'store'])->name('second-carousel.index');
    Route::post('/secondCarousel/update/{id}', [SecondCarouselController::class, 'update'])->name('second-carousel.update');
    Route::delete('/secondCarousel/destroy/{id}', [SecondCarouselController::class, 'destroy'])->name('second-carousel.destroy');
    // Home Page End

    Route::post('/socials/{id}', [SocialsController::class, 'update'])->name('socials.update');

    // About Page START
    Route::get('/aboutPage/show', [AboutPageController::class, 'show'])->name('about.show');
    Route::post('/aboutPage/update/{id}', [AboutPageController::class, 'update'])->name('about.update');
    // About Page END

    // Our Team START
    Route::post('/ourTeam/store', [OurTeamController::class, 'store'])->name('outTeam.store');
    Route::post('/ourTeam/update/{id}', [OurTeamController::class, 'update'])->name('outTeam.update');
    Route::delete('/ourTeam/destroy/{id}', [OurTeamController::class, 'destroy'])->name('outTeam.destroy');
    // Our Team END

    // News page START
    Route::post('/news-store', [NewsController::class, 'store'])->name('news.store');
    Route::post('/news/update/{id}', [NewsController::class, 'update'])->name('news.update');
    Route::delete('/news/destroy/{id}', [NewsController::class, 'destroy'])->name('news.destroy');
    // News page END

    // GamesPage START
    Route::get('/gamesAll', [GamesPageController::class, 'getAll'])->name('games.all');
    Route::post('/game-store', [GameController::class, 'store'])->name('game.store');
    Route::post('/game/update/{id}', [GameController::class, 'update'])->name('game.update');
    Route::delete('/game/destroy/{id}', [GameController::class, 'destroy'])->name('game.destroy');
    // GamesPage END

    Route::post('/game-carousel/create', [GameCarouselController::class, 'store'])->name('game-carousel.store');
    Route::delete('/game-carousel/destroy/{id}', [GameCarouselController::class, 'destroy'])->name('game-carousel.destroy');

    Route::post('/games-requirements-create/{id}', [GamesRequirementsController::class, 'create'])->name('games-requirements.create');
    Route::delete('/games-requirements-delete/{id}', [GamesRequirementsController::class, 'destroy'])->name('/games-requirements.destroy');
    Route::post('/games-requirements-update/{id}', [GamesRequirementsController::class, 'update'])->name('games-requirements.update');

    Route::post('/game-purchase-create/{id}', [GamePurchaseController::class, 'create'])->name('game-purchase.create');
    Route::post('/game-purchase-update/{id}', [GamePurchaseController::class, 'update'])->name('game-purchase.update');
    Route::delete('/game-purchase-delete/{id}', [GamePurchaseController::class, 'destroy'])->name('game-purchase.destroy');

    Route::get('/jobs-page/all', [JobsPageController::class, 'getAll'])->name('jobs-page.getAll');
    Route::post('/jobs-page/update/{id}', [JobsPageController::class, 'update'])->name('jobs-page.update');

    Route::get('/jobsAll', [JobController::class, 'index'])->name('jobs-all.index');
    Route::post('/job-store', [JobController::class, 'store'])->name('job.store');
    Route::post('/job/update/{id}', [JobController::class, 'update'])->name('job.update');
    Route::delete('/job/destroy/{id}', [JobController::class, 'destroy'])->name('job.destroy');

    Route::get('/looking-job-all', [LookingJobController::class, 'index'])->name('looking-job.index');
    Route::get('/looking-job/{id}', [LookingJobController::class, 'show'])->name('looking-job.show');
    Route::delete('/looking-job/destroy/{id}', [LookingJobController::class, 'destroy'])->name('looking-job.destroy');
});

// Error Page Start
Route::any('{catchall}', [ErrorPageController::class, 'index'])->where('catchall', '.*')->name('error.page');
Route::fallback([ErrorPageController::class, 'index']);
// Error Page END

