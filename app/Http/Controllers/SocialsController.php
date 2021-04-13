<?php

namespace App\Http\Controllers;

use App\Models\Socials;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SocialsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $socials = Socials::all();

        return response()->json($socials);
    }

    public function getSpit()
    {
        try {
            $follow = Socials::all()->where('category', 'follow');
            $write = Socials::all()->where('category', 'write');
            $response['message'] = 'Get Social link';
            $response['success'] = true;
            $response['categoryFollow'] = $follow;
            $response['categoryWrite'] = $write;
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
     * @param Socials $socials
     * @return Response
     */
    public function show(Socials $socials)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Socials $socials
     * @return Response
     */
    public function edit(Socials $socials)
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
            $socialItem = Socials::find($request['id']);
            $socialItem->update($request->all());

            $response['message'] = 'Url changed';
            $response['success'] = true;
            $response['socials'] = Socials::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Socials $socials
     * @return Response
     */
    public function destroy(Socials $socials)
    {
        //
    }
}
