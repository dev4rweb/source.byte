<?php

namespace App\Http\Controllers;

use App\Models\DetailGamePage;
use App\Models\GamesRequirements;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class DetailGamePageController extends Controller
{

    public function index()
    {
        $detailGamePage = DetailGamePage::all();
        return Inertia::render('DetailGamePage/DetailGamePage', [
            'detailGamePage' => $detailGamePage
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
     * @param DetailGamePage $detailGamePage
     * @return Response
     */
    public function show(DetailGamePage $detailGamePage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param DetailGamePage $detailGamePage
     * @return Response
     */
    public function edit(DetailGamePage $detailGamePage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param DetailGamePage $detailGamePage
     * @return Response
     */
    public function update(Request $request, DetailGamePage $detailGamePage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param DetailGamePage $detailGamePage
     * @return Response
     */
    public function destroy(DetailGamePage $detailGamePage)
    {
        //
    }
}
