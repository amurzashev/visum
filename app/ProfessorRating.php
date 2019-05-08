<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProfessorRating extends Model
{
    public $timestamps = false;
    protected $table = 'professor_ratings';
    public function professor()
    {
        return $this->belongsTo('App\Professor');
    }
}
