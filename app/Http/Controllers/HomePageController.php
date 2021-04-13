<?php

namespace App\Http\Controllers;

use App\Models\HomePage;
use App\Models\MainCarousel;
use App\Models\Socials;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use shweshi\OpenGraph\OpenGraph;

class HomePageController extends Controller
{

    public function index()
    {
        $homePage = HomePage::all();
//        $mainCarousel = MainCarousel::all();

//        \logger($homePage);
        return Inertia::render('HomePage/HomePage', [
            'homePage' => $homePage,
//            'mainCarousel' => $mainCarousel
        ]);
    }

    public function indexApi()
    {
        try {
            $homePage = HomePage::all();
            $response['message'] = 'All get';
            $response['success'] = true;
            $response['models'] = $homePage;
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
     * @param HomePage $homePage
     * @return Response
     */
    public function show(HomePage $homePage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param HomePage $homePage
     * @return Response
     */
    public function edit(HomePage $homePage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function update(Request $request)
    {
        try {
            $homePage = HomePage::find($request['id']);
            $homePage->update($request->all());
            $response['message'] = $request;
            $response['success'] = true;
            $response['model'] = $homePage;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param HomePage $homePage
     * @return Response
     */
    public function destroy(HomePage $homePage)
    {
        //
    }
}
