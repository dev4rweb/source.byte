<?php

namespace App\Http\Controllers;

use App\Models\ApplyJobPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplyJobPageController extends Controller
{

    public function index()
    {
        $applyJobPage = ApplyJobPage::all();
        return Inertia::render('ApplyJobPage/ApplyJobPage', [
            'applyJobPage' => $applyJobPage
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
     * @param  \App\Models\ApplyJobPage  $applyJobPage
     * @return \Illuminate\Http\Response
     */
    public function show(ApplyJobPage $applyJobPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ApplyJobPage  $applyJobPage
     * @return \Illuminate\Http\Response
     */
    public function edit(ApplyJobPage $applyJobPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ApplyJobPage  $applyJobPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ApplyJobPage $applyJobPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ApplyJobPage  $applyJobPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(ApplyJobPage $applyJobPage)
    {
        //
    }
}
