<?php

namespace App\Http\Controllers;

use App\Models\GameCarousel;
use App\Models\SecondCarousel;
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
        try {
            $gameCarousel = GameCarousel::create($request->all());

            if ($request->hasFile('image')) {
                $response['hasFile'] = 'Has image';
                $this->saveFile($request, $gameCarousel);
            } else {
                $response['hasFile'] = 'No file to download';
            }
            $response['message'] = 'Carousel Item created';
            $response['success'] = true;
            $response['models'] = GameCarousel::where('gameId', '=', $request['gameId'])->get();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    public function saveFile(Request $request, GameCarousel $gameCarousel)
    {
        $file = $request->file('image');
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $picture = date('His') . '-' . $filename;
        //move image to public/img folder
        $file->move(public_path('img'), $picture);
//        $file->move('/img', $picture);

//        $this->filePath = public_path('img');

        $gameCarousel->update(['image' => '/lsapp/public/img/' . $picture]); //with local storage
//        $gameCarousel->update(['image' => '/img/' . $picture]); //with local storage
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
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $gameCarousel = GameCarousel::find($id);
            $gameCarousel->delete();
            $response['message'] = 'record was deleted';
            $response['success'] = true;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
