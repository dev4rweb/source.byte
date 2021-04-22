<?php

namespace App\Http\Controllers;

use App\Models\FooterLinks;
use Illuminate\Http\Request;

class FooterLinksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $response['message'] = 'Get all footer links';
            $response['success'] = true;
            $response['model'] = FooterLinks::all();
        }catch (\Exception $exception) {
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FooterLinks  $footerLinks
     * @return \Illuminate\Http\Response
     */
    public function show(FooterLinks $footerLinks)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FooterLinks  $footerLinks
     * @return \Illuminate\Http\Response
     */
    public function edit(FooterLinks $footerLinks)
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
            $footerLinks = FooterLinks::find($request['id']);
            $footerLinks->update($request->all());
            $response['message'] = 'Footer links updated';
            $response['success'] = true;
            $response['model'] = $footerLinks;
        }catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FooterLinks  $footerLinks
     * @return \Illuminate\Http\Response
     */
    public function destroy(FooterLinks $footerLinks)
    {
        //
    }
}
