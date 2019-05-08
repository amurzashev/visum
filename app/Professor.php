<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    public $timestamps = false;
    public function university()
    {
        return $this->belongsTo('App\University');
    }
    public function ratings()
    {
        return $this->hasMany('App\ProfessorRating');
    }
}
