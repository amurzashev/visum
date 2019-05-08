<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    public $timestamps = false;
    public function city()
    {
        return $this->belongsTo('App\City');
    }
}
