<?php

namespace App\Http\Controllers;

use App\Models\GamesRequirements;
use Illuminate\Http\Request;

class GamesRequirementsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $gameReq = GamesRequirements::all();
            $response['message'] = 'Game Requirements all';
            $response['success'] = true;
            $response['models'] = $gameReq;
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
            $gameRequirementMin = GamesRequirements::create([
                'gameId' => $gameId,
                'minMax' => 'min',
                'OS'=> 'Windows ',
                'processor'=> 'Core i5-4590 (AMD FX 8350)',
                'memory'=> '5 GB RAM',
                'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
                'directX'=> 'Version 11',
                'storage'=> '1 GB available space',
            ]);
            $gameRequirementMax = GamesRequirements::create([
                'gameId' => $gameId,
                'minMax' => 'max',
                'OS'=> 'Windows xp',
                'processor'=> 'Core i5-4590 (AMD FX 8350)',
                'memory'=> '8 GB RAM',
                'graphics'=> 'NVIDIA GeForce GTX 970 or AMD RX480',
                'directX'=> 'Version 11',
                'storage'=> '20 GB available space',
            ]);

            $response['message'] = 'Game Requirements created';
            $response['success'] = true;
            $response['requirement_min'] = $gameRequirementMin;
            $response['requirement_max'] = $gameRequirementMax;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
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
            $gameRequirement = GamesRequirements::where('gameId', '=', $id)->get();
            $response['message'] = 'Record found';
            $response['success'] = true;
            $response['model'] = $gameRequirement;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\GamesRequirements $gamesRequirements
     * @return \Illuminate\Http\Response
     */
    public function edit(GamesRequirements $gamesRequirements)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\GamesRequirements $gamesRequirements
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GamesRequirements $gamesRequirements)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($gameId)
    {
        try {
            $requirements = GamesRequirements::where('gameId', '=', $gameId)->get();
            foreach ($requirements as $item) {
                $item->delete();
            }
            $response['message'] = 'Records deleted';
            $response['success'] = true;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
