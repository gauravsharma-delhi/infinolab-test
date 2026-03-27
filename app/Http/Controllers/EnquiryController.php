<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enquiry;

class EnquiryController extends Controller
{
    public function store(Request $request)
    {
        Enquiry::create($request->all());

        return back()->with('success', 'Enquiry submitted');
    }
}
