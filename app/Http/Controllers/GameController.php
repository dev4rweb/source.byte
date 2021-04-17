<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\GameCarousel;
use App\Models\GamePurchase;
use App\Models\GamesRequirements;
use App\Models\OurTeam;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $games = Game::all();
            $response['message'] = 'All Games';
            $response['success'] = true;
            $response['models'] = $games;
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $game = Game::create($request->all());

            if ($request->hasFile('mainImage')) {
                $response['hasPhoto'] = 'Has a photo';
                $this->saveFile($request, $game);
            } else {
                $response['hasPhoto'] = 'No photo';
            }

            $response['message'] = 'Game created';
            $response['success'] = true;
            $response['models'] = Game::all();
            $response['createdModel'] = $game;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    public function saveFile(Request $request, Game $game)
    {
        $file = $request->file('mainImage');
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $picture = date('His') . '-' . $filename;
        $file->move(public_path('img'), $picture);

        $game->update(['mainImage' => '/lsapp/public/img/' . $picture]); //host storage
//        $game->update(['mainImage' => '/img/' . $picture]); //with local storage
    }

    /**
     * Display the specified resource.

     */
    public function show($id)
    {
        $gamePage = Game::find($id);
        $gamesRequirements = GamesRequirements::where('gameId', '=', $id)->get();
        $gamePurchase = GamePurchase::where('gameId', '=', $id)->get();
        return Inertia::render('DetailGamePage/DetailGamePage', [
            'detailGamePage' => $gamePage,
            'gamesRequirements' => $gamesRequirements,
            'gamePurchase' => $gamePurchase
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function edit(Game $game)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        try {
            $game = Game::find($request['id']);
            $game->update($request->all());

            if ($request->hasFile('mainImage')) {
                $response['hasPhoto'] = 'Has main Image';
                $this->saveFile($request, $game);
            } else {
                $response['hasPhoto'] = 'No Photo';
            }

            $response['message'] = 'Game Changed';
            $response['success'] = true;
            $response['models'] = Game::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $game = Game::find($id);
            $game->delete();
            $response['message'] = 'Game was deleted';
            $response['success'] = true;
            $response['models'] = Game::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
