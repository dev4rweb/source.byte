<?php

namespace App\Http\Controllers;

use App\Models\ApplyJobPage;
use App\Models\Job;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $jobs = Job::all();
            $response['message'] = 'All Jobs';
            $response['success'] = true;
            $response['models'] = $jobs;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
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
        try {
            $job = Job::create($request->all());
            $response['message'] = 'Job Created';
            $response['success'] = true;
            $response['models'] = Job::all();
            $response['job'] = $job;
        }  catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     */
    public function show($id)
    {
        $job = Job::find($id);
        $applyJobPage = ApplyJobPage::all();
        return Inertia::render('ApplyJobPage/ApplyJobPage', [
            'applyJobPage' => $applyJobPage,
            'job' => $job
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function edit(Job $job)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        try {
            $job = Job::find($request['id']);
            $job->update($request->all());
            $response['message'] = 'Job updated';
            $response['success'] = true;
            $response['models'] = Job::all();
        }   catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $job = Job::find($id);
            $job->delete();
            $response['message'] = 'Job deleted';
            $response['success'] = true;
            $response['models'] = Job::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
    }
}
