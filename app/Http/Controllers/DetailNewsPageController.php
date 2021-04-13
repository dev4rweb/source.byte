<?php

namespace App\Http\Controllers;

use App\Models\DetailNewsPage;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class DetailNewsPageController extends Controller
{

    public function index()
    {
        $detailNewsPage = DetailNewsPage::all();
        return Inertia::render('DetailNewsPage/DetailNewsPage', [
            'detailNewsPage' => $detailNewsPage,
            'totalCount' => count($detailNewsPage),
        ]);
    }

    public function getThreeLastPosts()
    {
        try {
            $detailNewsPage = DetailNewsPage::orderBy('id', 'desc')->take(3)->get();
            $response['message'] = '3 last records';
            $response['success'] = true;
            $response['models'] = $detailNewsPage;
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
     * @param DetailNewsPage $detailNewsPage
     * @return Response
     */
    public function show(DetailNewsPage $detailNewsPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param DetailNewsPage $detailNewsPage
     * @return Response
     */
    public function edit(DetailNewsPage $detailNewsPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param DetailNewsPage $detailNewsPage
     * @return Response
     */
    public function update(Request $request, DetailNewsPage $detailNewsPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param DetailNewsPage $detailNewsPage
     * @return Response
     */
    public function destroy(DetailNewsPage $detailNewsPage)
    {
        //
    }
}
