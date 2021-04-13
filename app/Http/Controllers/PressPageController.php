<?php

namespace App\Http\Controllers;

use App\Models\PressPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
     * @param PressPage $pressPage
     * @return Response
     */
    public function show(PressPage $pressPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param PressPage $pressPage
     * @return Response
     */
    public function edit(PressPage $pressPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param PressPage $pressPage
     * @return Response
     */
    public function update(Request $request, PressPage $pressPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param PressPage $pressPage
     * @return Response
     */
    public function destroy(PressPage $pressPage)
    {
        //
    }
}
