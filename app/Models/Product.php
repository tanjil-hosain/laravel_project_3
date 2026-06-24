<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [ 'name', 'catagories','price', 'status'];
    public function catagory(){
        return $this->belongsTo(Catagory::class);
    }
}
