<?php

namespace App\Http\Controllers;

use App\Models\SubmitGameForm;
use App\Models\SubmitPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
     * @param SubmitPage $submitPage
     * @return Response
     */
    public function show(SubmitPage $submitPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param SubmitPage $submitPage
     * @return Response
     */
    public function edit(SubmitPage $submitPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param SubmitPage $submitPage
     * @return Response
     */
    public function update(Request $request, SubmitPage $submitPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param SubmitPage $submitPage
     * @return Response
     */
    public function destroy(SubmitPage $submitPage)
    {
        //
    }
}
