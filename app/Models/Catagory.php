<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Catagory extends Model
{
    protected $fillable = ['cat_name'];
    public function products(){
    return $this->hasMany(Product::class);
    }

}

