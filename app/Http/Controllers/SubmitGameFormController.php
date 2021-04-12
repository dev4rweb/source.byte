<?php

namespace App\Http\Controllers;

use App\Models\SubmitGameForm;
use Illuminate\Http\Request;

class SubmitGameFormController extends Controller
{
    private $filePath = '';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = SubmitGameForm::all();
        return response()->json($data);
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
            $submitGameForm = SubmitGameForm::create($request->all());
            if ($request->hasFile('uploadFile')) {
                $response['hasFile'] = 'Has file sup';
            } else {
                $response['message'] = "Select image first.";
            }
            $this->saveFile($request, $submitGameForm);

            $response['message'] = "Image Uploaded Successful from try";
            $response['model'] = $submitGameForm;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    public function saveFile(Request $request, SubmitGameForm $submitGameForm)
    {
        $file = $request->file('uploadFile');
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $picture = date('His') . '-' . $filename;
        //move image to public/img folder
        $file->move(public_path('img'), $picture);
//        $file->move('/img', $picture);
        $this->filePath = public_path('img');

//        $submitGameForm->update(['uploadFile' => public_path('img'). '/' . $picture]);
//        $submitGameForm->update(['uploadFile' => 'http://dev4rweb.zzz.com.ua/lsapp/public/img/' . $picture]);
        $submitGameForm->update(['uploadFile' => '/img/' . $picture]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubmitGameForm  $submitGameForm
     * @return \Illuminate\Http\Response
     */
    public function show(SubmitGameForm $submitGameForm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SubmitGameForm  $submitGameForm
     * @return \Illuminate\Http\Response
     */
    public function edit(SubmitGameForm $submitGameForm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubmitGameForm  $submitGameForm
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubmitGameForm $submitGameForm)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubmitGameForm  $submitGameForm
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubmitGameForm $submitGameForm)
    {
        //
    }
}
