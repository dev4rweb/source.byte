<?php

namespace App\Http\Controllers;

use App\Models\DetailGamePage;
use Illuminate\Http\Request;
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
     * @param  \App\Models\DetailGamePage  $detailGamePage
     * @return \Illuminate\Http\Response
     */
    public function show(DetailGamePage $detailGamePage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DetailGamePage  $detailGamePage
     * @return \Illuminate\Http\Response
     */
    public function edit(DetailGamePage $detailGamePage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DetailGamePage  $detailGamePage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DetailGamePage $detailGamePage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DetailGamePage  $detailGamePage
     * @return \Illuminate\Http\Response
     */
    public function destroy(DetailGamePage $detailGamePage)
    {
        //
    }
}
