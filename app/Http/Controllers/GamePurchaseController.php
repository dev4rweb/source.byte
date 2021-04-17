<?php

namespace App\Http\Controllers;

use App\Models\GamePurchase;
use Illuminate\Http\Request;

class GamePurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $gamePusrchases = GamePurchase::all();
            $response['message'] = 'Game Purchases All';
            $response['success'] = true;
            $response['models'] = $gamePusrchases;
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
    public function create($gameId)
    {
        try {
            $gamePurchase = GamePurchase::create([
                'gameId' => $gameId,
                'price' => '$10.00',
                'xBox' => true,
                'ps' => true,
                'microsoft' => true,
                'steam' => true,
                'released' => '17/10/21',
                'publisher' => 'Studios',
                'rating' => 'ESRBA',
                'fileSize' => '8 GB',
            ]);
            $response['message'] = 'Game Purchase created';
            $response['success'] = true;
            $response['model'] = $gamePurchase;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
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
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $gamePurchase = GamePurchase::where('gameId', '=', $id)->get();
            $response['message'] = 'Game Purchase found';
            $response['success'] = true;
            $response['model'] = $gamePurchase;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GamePurchase  $gamePurchase
     * @return \Illuminate\Http\Response
     */
    public function edit(GamePurchase $gamePurchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GamePurchase  $gamePurchase
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        try {
            $gamePurchase = GamePurchase::find($request['id']);
            $gamePurchase->update($request->all());
            $response['message'] = 'Record updated';
            $response['success'] = true;
            $response['model'] = $gamePurchase;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GamePurchase  $gamePurchase
     * @return \Illuminate\Http\Response
     */
    public function destroy($gameId)
    {
        try {
            $gamePurchase = GamePurchase::where('gameId', '=', $gameId);
            $gamePurchase->delete();
            $response['message'] = 'Records deleted';
            $response['success'] = true;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
