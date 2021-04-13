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
        //
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
     * @param OurTeam $ourTeam
     * @return Response
     */
    public function update(Request $request, OurTeam $ourTeam)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param OurTeam $ourTeam
     * @return Response
     */
    public function destroy(OurTeam $ourTeam)
    {
        //
    }
}
