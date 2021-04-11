<?php

namespace App\Http\Controllers;

use App\Models\MainCarousel;
use Illuminate\Http\Request;

class MainCarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mainCarousel = MainCarousel::all();
        return response()->json($mainCarousel);
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
     * @param  \App\Models\MainCarousel  $mainCarousel
     * @return \Illuminate\Http\Response
     */
    public function show(MainCarousel $mainCarousel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MainCarousel  $mainCarousel
     * @return \Illuminate\Http\Response
     */
    public function edit(MainCarousel $mainCarousel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MainCarousel  $mainCarousel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MainCarousel $mainCarousel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MainCarousel  $mainCarousel
     * @return \Illuminate\Http\Response
     */
    public function destroy(MainCarousel $mainCarousel)
    {
        //
    }
}
