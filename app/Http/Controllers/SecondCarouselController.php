<?php

namespace App\Http\Controllers;

use App\Models\SecondCarousel;
use Illuminate\Http\Request;

class SecondCarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $secondCarousel = SecondCarousel::all();
        return response()->json($secondCarousel);
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
     * @param  \App\Models\SecondCarousel  $secondCarousel
     * @return \Illuminate\Http\Response
     */
    public function show(SecondCarousel $secondCarousel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SecondCarousel  $secondCarousel
     * @return \Illuminate\Http\Response
     */
    public function edit(SecondCarousel $secondCarousel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SecondCarousel  $secondCarousel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SecondCarousel $secondCarousel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SecondCarousel  $secondCarousel
     * @return \Illuminate\Http\Response
     */
    public function destroy(SecondCarousel $secondCarousel)
    {
        //
    }
}
