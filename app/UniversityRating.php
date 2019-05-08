<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UniversityRating extends Model
{
    public $timestamps = false;
    protected $table = 'university_ratings';
    public function university()
    {
        return $this->belongsTo('App\University');
    }
}
