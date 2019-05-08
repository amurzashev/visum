<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    public $timestamps = false;
    public function professor()
    {
        return $this->belongsTo('App\Professor');
    }
    public function university()
    {
      return $this->belongsTo('App\University');
    }
}
