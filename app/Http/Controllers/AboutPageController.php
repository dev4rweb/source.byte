<?php

namespace App\Http\Controllers;

use App\Models\AboutPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
     * @param AboutPage $aboutPage
     * @return Response
     */
    public function show(AboutPage $aboutPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param AboutPage $aboutPage
     * @return Response
     */
    public function edit(AboutPage $aboutPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param AboutPage $aboutPage
     * @return Response
     */
    public function update(Request $request, AboutPage $aboutPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param AboutPage $aboutPage
     * @return Response
     */
    public function destroy(AboutPage $aboutPage)
    {
        //
    }
}
