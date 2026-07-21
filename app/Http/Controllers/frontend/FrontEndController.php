<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontEndController extends Controller
{
    public function index(){
        return Inertia::render('Home');
    }
     public function about(){
        return Inertia::render('About');
    }

 public function contact(){
        return Inertia::render('Contact');
    }

}
