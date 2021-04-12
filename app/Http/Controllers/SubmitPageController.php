<?php

namespace App\Http\Controllers;

use App\Models\SubmitGameForm;
use App\Models\SubmitPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubmitPageController extends Controller
{

    public function index()
    {
        $submitPage = SubmitPage::all();
        return Inertia::render('SubmitPage/SubmitPage', [
            'submitPage' => $submitPage
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
     * @param  \App\Models\SubmitPage  $submitPage
     * @return \Illuminate\Http\Response
     */
    public function show(SubmitPage $submitPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SubmitPage  $submitPage
     * @return \Illuminate\Http\Response
     */
    public function edit(SubmitPage $submitPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubmitPage  $submitPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubmitPage $submitPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubmitPage  $submitPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubmitPage $submitPage)
    {
        //
    }
}
