<?php

namespace App\Http\Controllers;

use App\Models\JobsPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
     * @param JobsPage $jobsPage
     * @return Response
     */
    public function show(JobsPage $jobsPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param JobsPage $jobsPage
     * @return Response
     */
    public function edit(JobsPage $jobsPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param JobsPage $jobsPage
     * @return Response
     */
    public function update(Request $request, JobsPage $jobsPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param JobsPage $jobsPage
     * @return Response
     */
    public function destroy(JobsPage $jobsPage)
    {
        //
    }
}
