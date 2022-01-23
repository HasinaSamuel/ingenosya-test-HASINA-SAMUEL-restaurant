<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\IngredientUtiliseModel;

class IngredientUtilise extends ResourceController
{
	protected $ingredientUtiliseModel;

    public function __construct()
    {
        $this->ingredientUtiliseModel = new IngredientUtiliseModel();
    }

    public function list_ingredient_utilise(){
        $result = $this->ingredientUtiliseModel->findAll();
        $data['status'] = true;
        $data['message'] = "";
        if ($result) {                
            $data['ingredient_utilise'] = (array)$result;
        }else{
            $data['ingredient_utilise'] = [];
        }
        return $this->respond($data, 200);
    }
}
