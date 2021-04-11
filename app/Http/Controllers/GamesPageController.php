<?php

namespace App\Http\Controllers;

use App\Models\GamesPage;
use Illuminate\Http\Request;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GamesPage  $gamesPage
     * @return \Illuminate\Http\Response
     */
    public function show(GamesPage $gamesPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GamesPage  $gamesPage
     * @return \Illuminate\Http\Response
     */
    public function edit(GamesPage $gamesPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GamesPage  $gamesPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GamesPage $gamesPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GamesPage  $gamesPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(GamesPage $gamesPage)
    {
        //
    }
}
