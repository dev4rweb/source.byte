<?php

namespace App\Http\Controllers;

use App\Models\ContactForm;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ContactFormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        try {
            $data = ContactForm::all();
            $response['message'] = 'Incoming mails all';
            $response['success'] = true;
            $response['models'] = $data;
        } catch (\Exception $exception) {
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
        try {
            $contacForm = ContactForm::create($request->all());

            $response['message'] = 'Contact Form saved';
            $response['success'] = true;
            $response['model'] = $contacForm;


        } catch (Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param ContactForm $contactForm
     * @return Response
     */
    public function show(ContactForm $contactForm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param ContactForm $contactForm
     * @return Response
     */
    public function edit(ContactForm $contactForm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param ContactForm $contactForm
     * @return Response
     */
    public function update(Request $request, ContactForm $contactForm)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return Response
     */
    public function destroy($id)
    {
        try {
            $contactForm = ContactForm::find($id);
            $contactForm->delete();
            $response['message'] = 'mail deleted';
            $response['success'] = true;
            $response['models'] = ContactForm::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }
}
