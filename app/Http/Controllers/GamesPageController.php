<?php

namespace App\Http\Controllers;

use App\Models\GamesPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class GamesPageController extends Controller
{

    public function index()
    {$gamesPage = GamesPage::all();
        return Inertia::render('GamesPage/GamesPage', [
            'gamesPage' => $gamesPage
        ]);
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
