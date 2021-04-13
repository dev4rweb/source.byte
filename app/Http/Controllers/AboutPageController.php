<?php

namespace App\Http\Controllers;

use App\Models\AboutPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class AboutPageController extends Controller
{

    public function index()
    {
        $aboutPage = AboutPage::all();
        return Inertia::render('AboutPage/AboutPage', [
            'aboutPage' => $aboutPage
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
     * @return Response
     */
    public function show()
    {
        try {
            $aboutPage = AboutPage::all();
            $response['message'] = 'About Page';
            $response['success'] = true;
            $response['model'] = $aboutPage;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param AboutPage $aboutPage
     * @return Response
     */
    public function edit(AboutPage $aboutPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param AboutPage $aboutPage
     * @return Response
     */
    public function update($id, Request $request)
    {
        try {
            $aboutPage = AboutPage::find($request['id']);
            $aboutPage->update($request->all());

            if ($request->hasFile('mainImage')) {
                $response['has main Image'] = 'Has main Image';
                $this->saveFile($request, $aboutPage, 'mainImage');
            } else {
                $response['has main Image'] = 'No main Image';
            }

            if ($request->hasFile('cardOneImage')) {
                $response['has card One Image'] = 'has card One Image';
                $this->saveFile($request, $aboutPage, 'cardOneImage');
            } else {
                $response['has card One Image'] = 'NO card One Image';
            }

            if ($request->hasFile('cardTwoImage')) {
                $response['has card Two Image'] = 'has card Two Image';
                $this->saveFile($request, $aboutPage, 'cardTwoImage');
            } else {
                $response['has card Two Image'] = 'NO card Two Image';
            }

            $response['message'] = 'Record changed';
            $response['success'] = true;
            $response['models'] = AboutPage::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    public function saveFile(Request $request, AboutPage $aboutPage, $key)
    {
        $file = $request->file($key);
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $picture = date('His') . '-' . $filename;
        $file->move(public_path('img'), $picture);

        $aboutPage->update([$key => '/lsapp/public/img/' . $picture]); //with local storage
//        $aboutPage->update([$key => '/img/' . $picture]); //with local storage
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param AboutPage $aboutPage
     * @return Response
     */
    public function destroy(AboutPage $aboutPage)
    {
        //
    }
}
