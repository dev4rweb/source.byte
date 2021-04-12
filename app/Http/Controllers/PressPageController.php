<?php

namespace App\Http\Controllers;

use App\Models\PressPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PressPageController extends Controller
{

    public function index()
    {
        $pressPage = PressPage::all();
        return Inertia::render('PressPage/PressPage', [
            'pressPage' => $pressPage
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
     * @param  \App\Models\PressPage  $pressPage
     * @return \Illuminate\Http\Response
     */
    public function show(PressPage $pressPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PressPage  $pressPage
     * @return \Illuminate\Http\Response
     */
    public function edit(PressPage $pressPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PressPage  $pressPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PressPage $pressPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PressPage  $pressPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(PressPage $pressPage)
    {
        //
    }
}
