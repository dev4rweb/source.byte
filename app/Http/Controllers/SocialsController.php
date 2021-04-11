<?php

namespace App\Http\Controllers;

use App\Models\Socials;
use Illuminate\Http\Request;

class SocialsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $socials = Socials::all();

        return response()->json($socials);
    }

    public function getSpit()
    {
        try {
            $follow = Socials::all()->where('category', 'follow');
            $write = Socials::all()->where('category', 'write');
            $response['message'] = 'Get Social link';
            $response['success'] = true;
            $response['categoryFollow'] = $follow;
            $response['categoryWrite'] = $write;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Socials  $socials
     * @return \Illuminate\Http\Response
     */
    public function show(Socials $socials)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Socials  $socials
     * @return \Illuminate\Http\Response
     */
    public function edit(Socials $socials)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Socials  $socials
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Socials $socials)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Socials  $socials
     * @return \Illuminate\Http\Response
     */
    public function destroy(Socials $socials)
    {
        //
    }
}
