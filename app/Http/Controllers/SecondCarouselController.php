<?php

namespace App\Http\Controllers;

use App\Models\SecondCarousel;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SecondCarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $secondCarousel = SecondCarousel::all();
        return response()->json($secondCarousel);
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
     * @param SecondCarousel $secondCarousel
     * @return Response
     */
    public function show(SecondCarousel $secondCarousel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param SecondCarousel $secondCarousel
     * @return Response
     */
    public function edit(SecondCarousel $secondCarousel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param SecondCarousel $secondCarousel
     * @return Response
     */
    public function update(Request $request, SecondCarousel $secondCarousel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param SecondCarousel $secondCarousel
     * @return Response
     */
    public function destroy(SecondCarousel $secondCarousel)
    {
        //
    }
}
