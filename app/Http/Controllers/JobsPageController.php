<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\JobsPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class JobsPageController extends Controller
{

    public function index()
    {
        $jobsPage = JobsPage::all();
        $jobs = Job::all();
        return Inertia::render('JobsPage/JobsPage', [
            'jobsPage' => $jobsPage,
            'jobs' => $jobs
        ]);
    }

    public function getAll()
    {
        try {
            $jobsPage = JobsPage::all();
            $response['message'] = 'All contents Jobs Page';
            $response['success'] = true;
            $response['models'] = $jobsPage;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
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
     * @return Response
     */
    public function update($id, Request $request)
    {
        try {
            $jobsPage = JobsPage::find($request['id']);
            $jobsPage->update($request->all());
            $response['message'] = 'Jobs Page updated';
            $response['success'] = true;
            $response['model'] = $jobsPage;
        }  catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
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
