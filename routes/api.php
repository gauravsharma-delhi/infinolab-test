<?php

use Illuminate\Http\Request;
use App\Models\Item;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/items', function () {
    return Item::all();
});



Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->get('/secure-items', function () {
    return \App\Models\Item::all();
});
