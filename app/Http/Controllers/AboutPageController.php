<?php

namespace App\Http\Controllers;

use App\Models\AboutPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutPageController extends Controller
{

    public function index()
    {
        $aboutPage = AboutPage::all();
        return Inertia::render('AboutPage/AboutPage', [
            'aboutPage' => $aboutPage
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
     * @param  \App\Models\AboutPage  $aboutPage
     * @return \Illuminate\Http\Response
     */
    public function show(AboutPage $aboutPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AboutPage  $aboutPage
     * @return \Illuminate\Http\Response
     */
    public function edit(AboutPage $aboutPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AboutPage  $aboutPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AboutPage $aboutPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AboutPage  $aboutPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(AboutPage $aboutPage)
    {
        //
    }
}
