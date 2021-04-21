<?php

namespace App\Http\Controllers;

use App\Models\LookingJob;
use App\Models\SubmitGameForm;
use Exception;
use Illuminate\Http\Request;

class LookingJobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $lookingJob = LookingJob::all();
            $response['message'] = 'Incoming All Jobs';
            $response['success'] = true;
            $response['models'] = $lookingJob;
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
            $lookingJobForm = LookingJob::create($request->all());
            if ($request->hasFile('uploadFile')) {
                $response['hasFile'] = 'Has file sup';
                $this->saveFile($request, $lookingJobForm);
            } else {
                $response['hasFile'] = "Select image first.";
            }

            $response['message'] = 'looking job form created';
            $response['success'] = true;
            $response['model'] = $lookingJobForm;
        } catch (Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    public function saveFile(Request $request, LookingJob $lookingJob)
    {
        $file = $request->file('uploadFile');
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $picture = date('His') . '-' . $filename;
        $file->move(public_path('img'), $picture);

        $lookingJob->update(['uploadFile' => '/lsapp/public/img/' . $picture]); //with website storage
//        $lookingJob->update(['image' => '/img/' . $picture]); //with local storage
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $lookingJob = LookingJob::find($id);
            $response['message'] = 'CV found';
            $response['success'] = true;
            $response['model'] = $lookingJob;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
         return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LookingJob  $lookingJob
     * @return \Illuminate\Http\Response
     */
    public function edit(LookingJob $lookingJob)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LookingJob  $lookingJob
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LookingJob $lookingJob)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LookingJob  $lookingJob
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $lookingJob = LookingJob::find($id);
            $lookingJob->delete();
            $response['message'] = 'CV Deleted';
            $response['success'] = true;
            $response['models'] = LookingJob::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
