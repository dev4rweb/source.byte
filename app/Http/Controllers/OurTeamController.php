<?php

namespace App\Http\Controllers;

use App\Models\OurTeam;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OurTeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        try {
            $ourTeam = OurTeam::all();
            $response['message'] = 'Our Team';
            $response['success'] = true;
            $response['models'] = $ourTeam;
        } catch (Exception $exception) {
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
        try {
            $ourTeam = OurTeam::create($request->all());

            if ($request->hasFile('photo')) {
                $response['hasPhoto'] = 'Has Photo';
                $this->saveFile($request, $ourTeam);
            } else {
                $response['hasPhoto'] = 'No any file to download';
            }

            $response['message'] = 'Team item created';
            $response['success'] = true;
            $response['models'] = OurTeam::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    public function saveFile(Request $request, OurTeam $ourTeam)
    {
        $file = $request->file('photo');
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $picture = date('His') . '-' . $filename;
        $file->move(public_path('img'), $picture);

//        $ourTeam->update(['photo' => '/img' . '/' . $picture]);
        $ourTeam->update(['photo' => '/lsapp/public/img/' . $picture]); //host storage
//        $ourTeam->update(['photo' => '/img/' . $picture]); //with local storage
    }

    /**
     * Display the specified resource.
     *
     * @param OurTeam $ourTeam
     * @return Response
     */
    public function show(OurTeam $ourTeam)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param OurTeam $ourTeam
     * @return Response
     */
    public function edit(OurTeam $ourTeam)
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
            $ourTeam = OurTeam::find($request['id']);
            $ourTeam->update($request->all());

            if ($request->hasFile('photo')) {
                $response['hasPhoto'] = 'Has Photo';
                $this->saveFile($request, $ourTeam);
            } else {
                $response['hasPhoto'] = 'No any file to download';
            }

            $response['message'] = 'Record changed';
            $response['success'] = true;
            $response['models'] = OurTeam::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return Response
     */
    public function destroy($id)
    {
        try {
            $ourTeam = OurTeam::find($id);
            $ourTeam->delete();
            $response['message'] = 'record was deleted';
            $response['success'] = true;
            $response['models'] = OurTeam::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
