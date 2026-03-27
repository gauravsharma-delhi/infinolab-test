<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\ContactSetting;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function home()
    {  
        $contact = ContactSetting::first();

        return Inertia::render('Frontend/Pages/Home', [
            'contact' => $contact
        ]);
    }

    public function contact()
    {   
        $contact = ContactSetting::first();
        return Inertia::render('Frontend/Pages/Contact', [
            'contact' => $contact
        ]);
    }
}
