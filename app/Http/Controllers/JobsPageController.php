<?php

namespace App\Http\Controllers;

use App\Models\JobsPage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobsPageController extends Controller
{

    public function index()
    {
        $jobsPage = JobsPage::all();
        return Inertia::render('JobsPage/JobsPage', [
            'jobsPage' => $jobsPage
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
     * @param  \App\Models\JobsPage  $jobsPage
     * @return \Illuminate\Http\Response
     */
    public function show(JobsPage $jobsPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\JobsPage  $jobsPage
     * @return \Illuminate\Http\Response
     */
    public function edit(JobsPage $jobsPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\JobsPage  $jobsPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, JobsPage $jobsPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobsPage  $jobsPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(JobsPage $jobsPage)
    {
        //
    }
}
