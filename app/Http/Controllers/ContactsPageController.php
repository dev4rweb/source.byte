<?php

namespace App\Http\Controllers;

use App\Models\ContactsPage;
use Illuminate\Http\Request;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ContactsPage  $contactsPage
     * @return \Illuminate\Http\Response
     */
    public function show(ContactsPage $contactsPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ContactsPage  $contactsPage
     * @return \Illuminate\Http\Response
     */
    public function edit(ContactsPage $contactsPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ContactsPage  $contactsPage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContactsPage $contactsPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContactsPage  $contactsPage
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContactsPage $contactsPage)
    {
        //
    }
}
