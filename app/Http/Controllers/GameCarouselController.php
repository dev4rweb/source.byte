<?php

namespace App\Http\Controllers;

use App\Models\GameCarousel;
use Illuminate\Http\Request;

class GameCarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $gamesCarousel = GameCarousel::all();
            $response['message'] = 'All Data of game Carousels';
            $response['success'] = true;
            $response['models'] = $gamesCarousel;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    public function getCarouselById($id)
    {
        try {
            $carouselById = GameCarousel::where('gameId', '=', $id)
                ->get();
            $response['message'] = 'Found Carousel by Game id';
            $response['success'] = true;
            $response['models'] = $carouselById;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\GameCarousel $gameCarousel
     * @return \Illuminate\Http\Response
     */
    public function show(GameCarousel $gameCarousel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\GameCarousel $gameCarousel
     * @return \Illuminate\Http\Response
     */
    public function edit(GameCarousel $gameCarousel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\GameCarousel $gameCarousel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GameCarousel $gameCarousel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\GameCarousel $gameCarousel
     * @return \Illuminate\Http\Response
     */
    public function destroy(GameCarousel $gameCarousel)
    {
        //
    }
}
