<?php

namespace App\Http\Controllers;

use App\Models\AboutPage;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $news = News::all();
            $response['message'] = 'All News';
            $response['success'] = true;
            $response['models'] = $news;
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
            $news = News::create($request->all());

            if ($request->hasFile('mainImage')) {
                $response['has main Image'] = 'Has main Image';
                $this->saveFile($request, $news, 'mainImage');
            } else {
                $response['has main Image'] = 'No main Image';
            }

            if ($request->hasFile('lastImage')) {
                $response['has last Image'] = 'Has last Image';
                $this->saveFile($request, $news, 'lastImage');
            }else {
                $response['has last Image'] = 'No last Image';
            }

            $response['message'] = 'News created';
            $response['success'] = true;
            $response['models'] = News::all();
            $response['createdNews'] = $news;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    public function saveFile(Request $request, News $news, $key)
    {
        $file = $request->file($key);
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $picture = date('His') . '-' . $filename;
        $file->move(public_path('img'), $picture);

        $news->update([$key => '/lsapp/public/img/' . $picture]); //with local storage
//        $news->update([$key => '/img/' . $picture]); //with local storage
    }

    /**
     * Display the specified resource.
     *
     */
    public function show($id)
    {
        $newsPage = News::find($id);

        return Inertia::render('DetailNewsPage/DetailNewsPage', [
            'detailNewsPage' => $newsPage,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
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
            $news = News::find($request['id']);
            $news->update($request->all());

            if ($request->hasFile('mainImage')) {
                $response['has main Image'] = 'Has main Image';
                $this->saveFile($request, $news, 'mainImage');
            } else {
                $response['has main Image'] = 'No main Image';
            }

            if ($request->hasFile('lastImage')) {
                $response['has last Image'] = 'Has last Image';
                $this->saveFile($request, $news, 'lastImage');
            }else {
                $response['has last Image'] = 'No last Image';
            }

            $response['message'] = 'News updated';
            $response['success'] = true;
            $response['models'] = News::all();
        }  catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $news = News::find($id);
            $news->delete();
            $response['message'] = 'News deleted';
            $response['success'] = true;
            $response['models'] = News::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
