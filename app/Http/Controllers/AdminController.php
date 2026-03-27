<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enquiry;
use App\Models\ContactSetting;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Admin/Pages/Dashboard', [
            'total' => Enquiry::count(),
            'today' => Enquiry::whereDate('created_at', today())->count(),
        ]);
    }

    public function contactSettings()
    {
        return Inertia::render('Admin/Pages/ContactSettings', [
            'data' => ContactSetting::first()
        ]);
    }

    public function updateContact(Request $request)
    {
        ContactSetting::updateOrCreate(
            ['id' => 1],
            $request->only('email', 'mobile')
        );

        return back();
    }

    public function enquiries()
    {
        return Inertia::render('Admin/Pages/Enquiries', [
            'enquiries' => Enquiry::latest()->get()
        ]);
    }
}
