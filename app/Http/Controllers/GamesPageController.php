<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\GamesPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class GamesPageController extends Controller
{

    public function index()
    {
        $gamesPage = GamesPage::all();
        $games = Game::all();
        return Inertia::render('GamesPage/GamesPage', [
            'gamesPage' => $gamesPage,
            'games' => $games
        ]);
    }

    public function getAll()
    {
        try {
            $gamesPage = GamesPage::all();
            $games = Game::all();
            $response['message'] = 'Games All';
            $response['success'] = true;
            $response['models'] = $gamesPage;
            $response['games'] = $games;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param GamesPage $gamesPage
     * @return Response
     */
    public function show(GamesPage $gamesPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param GamesPage $gamesPage
     * @return Response
     */
    public function edit(GamesPage $gamesPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param GamesPage $gamesPage
     * @return Response
     */
    public function update(Request $request, GamesPage $gamesPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param GamesPage $gamesPage
     * @return Response
     */
    public function destroy(GamesPage $gamesPage)
    {
        //
    }
}
