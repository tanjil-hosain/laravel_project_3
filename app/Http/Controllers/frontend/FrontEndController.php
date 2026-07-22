<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
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

    public function login(){
        return Inertia::render('Login');
    }
    
    public function products(){
        $products= Product::all();
        return Inertia::render('Product', ['products'=>$products]);
    }
    public function sendMsg(Request $request){

    dd($request);
    }

}
