<?php

namespace App\Http\Controllers;

use App\Models\NewsPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class NewsPageController extends Controller
{

    public function index()
    {
        $newsPage = NewsPage::all();
        return Inertia::render('NewsPage/NewsPage', [
            'newsPage' => $newsPage
        ]);
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
     * @param NewsPage $newsPage
     * @return Response
     */
    public function show(NewsPage $newsPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param NewsPage $newsPage
     * @return Response
     */
    public function edit(NewsPage $newsPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param NewsPage $newsPage
     * @return Response
     */
    public function update(Request $request, NewsPage $newsPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param NewsPage $newsPage
     * @return Response
     */
    public function destroy(NewsPage $newsPage)
    {
        //
    }
}
