<?php

namespace App\Http\Controllers;

use App\Models\AdminPage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class AdminPageController extends Controller
{

    public function index()
    {
        $adminPage = AdminPage::all();
        return Inertia::render('AdminPage/AdminPage', [
            'adminPage' => $adminPage
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
     * @param AdminPage $adminPage
     * @return Response
     */
    public function show(AdminPage $adminPage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param AdminPage $adminPage
     * @return Response
     */
    public function edit(AdminPage $adminPage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param AdminPage $adminPage
     * @return Response
     */
    public function update(Request $request, AdminPage $adminPage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param AdminPage $adminPage
     * @return Response
     */
    public function destroy(AdminPage $adminPage)
    {
        //
    }
}
