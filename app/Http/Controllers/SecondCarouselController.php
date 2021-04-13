<?php

namespace App\Http\Controllers;

use App\Models\MainCarousel;
use App\Models\SecondCarousel;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SecondCarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $secondCarousel = SecondCarousel::all();
        return response()->json($secondCarousel);
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
        try {
            $secondCarousel = SecondCarousel::create($request->all());

            if ($request->hasFile('image')) {
                $response['hasFile'] = 'Has file image';
                $this->saveFile($request, $secondCarousel);
            } else {
                $response['hasFile'] = 'No file to download';
            }
            $response['message'] = 'Carousel Item created';
            $response['success'] = true;
            $response['model'] = $secondCarousel;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    public function saveFile(Request $request, SecondCarousel $secondCarousel)
    {
        $file = $request->file('image');
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $picture = date('His') . '-' . $filename;
        //move image to public/img folder
        $file->move(public_path('img'), $picture);
//        $file->move('/img', $picture);

        $this->filePath = public_path('img');

        $secondCarousel->update(['image' => '/lsapp/public/img/' . $picture]); //with local storage
//        $secondCarousel->update(['image' => '/img/' . $picture]); //with local storage
    }

    /**
     * Display the specified resource.
     *
     * @param SecondCarousel $secondCarousel
     * @return Response
     */
    public function show(SecondCarousel $secondCarousel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param SecondCarousel $secondCarousel
     * @return Response
     */
    public function edit(SecondCarousel $secondCarousel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param SecondCarousel $secondCarousel
     * @return Response
     */
    public function update($id, Request $request)
    {
        try {
            $itemCarousel = SecondCarousel::find($request['id']);
            $itemCarousel->update($request->all());

            if ($request->hasFile('image')) {
                $response['has File'] = 'Has file image';
                $this->saveFile($request, $itemCarousel);
            } else {
                $response['has File'] = 'No any file';
            }

            $response['message'] = 'Record changed';
            $response['success'] = true;
            $response['models'] = SecondCarousel::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param SecondCarousel $secondCarousel
     * @return Response
     */
    public function destroy($id)
    {
        try {
            $itemCarousel = SecondCarousel::find($id);
            $itemCarousel->delete();
            $response['message'] = 'item deleted';
            $response['success'] = true;
            $response['models'] = SecondCarousel::all();
        } catch (\Exception $exception) {
            $response['message'] = 'Something wrong';
            $response['success'] = false;
        }
        return response()->json($response);
    }
}
