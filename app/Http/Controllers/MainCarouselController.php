<?php

namespace App\Http\Controllers;

use App\Models\MainCarousel;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MainCarouselController extends Controller
{
    private $filePath = '';
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $mainCarousel = MainCarousel::all();
        return response()->json($mainCarousel);
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
            $mainCarousel = MainCarousel::create($request->all());

            if ($request->hasFile('image')) {
                $response['hasFile'] = 'Has file image';
            } else {
                $response['hasFile'] = 'No file to download';
            }
            $this->saveFile($request, $mainCarousel);

            $response['message'] = 'Carousel Item created';
            $response['model'] = $mainCarousel;
        } catch (Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    public function saveFile(Request $request, MainCarousel $mainCarousel)
    {
        $file = $request->file('image');
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $picture = date('His') . '-' . $filename;
        //move image to public/img folder
        $file->move(public_path('img'), $picture);
//        $file->move('/img', $picture);

        $this->filePath = public_path('img');

        $mainCarousel->update(['image' => '/lsapp/public/img/' . $picture]); //with local storage
//        $mainCarousel->update(['image' => '/img/' . $picture]); //with local storage
    }

    /**
     * Display the specified resource.
     *
     * @param MainCarousel $mainCarousel
     * @return Response
     */
    public function show(MainCarousel $mainCarousel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param MainCarousel $mainCarousel
     * @return Response
     */
    public function edit(MainCarousel $mainCarousel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param MainCarousel $mainCarousel
     * @return Response
     */
    public function update($id, Request $request)
    {
        try {
            $carouselItem = MainCarousel::find($request['id']);
            $carouselItem->update($request->all());

            if ($request->hasFile('image')) {
                $response['hasFile'] = 'Has file image';
                $this->saveFile($request, $carouselItem);
            } else
                $response['hasFile'] = 'No any file';

            $response['message'] = 'Record changed';
            $response['success'] = true;
            $response['models'] = MainCarousel::all();
            $response['req'] = $request['title'];
        } catch (Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param MainCarousel $mainCarousel
     * @return Response
     */
    public function destroy($id)
    {
        try {
            $carouselItem = MainCarousel::find($id);
            $carouselItem->delete();
            $response['message'] = 'item deleted';
            $response['success'] = true;
            $response['models'] = MainCarousel::all();

        } catch (Exception $exception) {
            $response['message'] = 'Something wrong';
            $response['success'] = false;
        }
        return response()->json($response);
    }
}
