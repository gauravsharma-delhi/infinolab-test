<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\Auth\CustomLoginController;
use App\Http\Controllers\Auth\CustomRegisterController;

use App\Http\Controllers\FrontendController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EnquiryController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware(['role:admin|superadmin'])->group(function () {
            Route::get('/items', [ItemController::class, 'index'])->name('items.index');
            Route::get('/items/create', [ItemController::class, 'create'])->name('items.create');
            Route::post('/items', [ItemController::class, 'store'])->name('items.store');
            Route::get('/items/{item}/edit', [ItemController::class, 'edit'])->name('items.edit');
            Route::put('/items/{item}', [ItemController::class, 'update'])->name('items.update');
            Route::delete('/items/{item}', [ItemController::class, 'destroy'])->name('items.destroy');
    });

    Route::middleware(['auth', 'role:admin|superadmin'])
        ->prefix('admin')
        ->group(function () {

            Route::get('/dashboard', function () {
                return "Admin Dashboard";
            });

    });

});

// Route::get('/test', function () {
//     return Inertia::render('Test');
// });

Route::get('/test', function () {
    return Inertia::render('Test', [
        'name' => 'Gaurav'
    ]);
});


// custom login,register and logout routes

Route::get('/custom-login', [CustomLoginController::class, 'showLogin'])->name('custom.login');
Route::post('/custom-login', [CustomLoginController::class, 'login']);

Route::get('/custom-register', fn() => Inertia::render('Auth/CustomRegister'));
Route::post('/custom-register', [CustomRegisterController::class, 'register']);

Route::get('/logout', [CustomLoginController::class, 'logout'])->middleware('auth');





// FRONTEND
Route::get('/', [FrontendController::class, 'home']);
Route::get('/contact', [FrontendController::class, 'contact']);
Route::post('/contact-submit', [EnquiryController::class, 'store']);

// ADMIN
Route::middleware(['auth'])->prefix('admin')->group(function () {

    Route::get('/dashboard', [AdminController::class, 'dashboard']);

    Route::get('/contact-settings', [AdminController::class, 'contactSettings']);
    Route::post('/contact-settings', [AdminController::class, 'updateContact']);

    Route::get('/enquiries', [AdminController::class, 'enquiries']);
});






require __DIR__.'/auth.php';
