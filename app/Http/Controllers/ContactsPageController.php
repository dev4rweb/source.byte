<?php

namespace App\Http\Controllers;

use App\Models\ContactsPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class ContactsPageController extends Controller
{

    public function index()
    {
        $contactsPage = ContactsPage::all();
        return Inertia::render('ContactsPage/ContactsPage', [
            'contactsPage' => $contactsPage
        ]);
    }

    public function getAll()
    {
        try {
            $response['message'] = 'Get all data from Contact';
            $response['success'] = true;
            $response['model'] = ContactsPage::all();
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return \response()->json($response);
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
     * @param ContactsPage $contactsPage
     * @return Response
     */
    public function show(ContactsPage $contactsPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param ContactsPage $contactsPage
     * @return Response
     */
    public function edit(ContactsPage $contactsPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function update($id, Request $request)
    {
        try {
            $contact = ContactsPage::find($request['id']);
            $contact->update($request->all());
            $response['message'] = 'Contacts updated';
            $response['success'] = true;
            $response['model'] = $contact;
        } catch (\Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ContactsPage $contactsPage
     * @return Response
     */
    public function destroy(ContactsPage $contactsPage)
    {
        //
    }
}
