<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\FournitureModel;

class Fourniture extends ResourceController
{
	protected $fournitureModel;

    public function __construct()
    {
        $this->fournitureModel = new FournitureModel();
    }

    public function list_fourniture(){
        $result = $this->fournitureModel->findAll();
        $data['status'] = true;
        $data['message'] = "";
        if ($result) {                
            $data['fourniture'] = (array)$result;
        }else{
            $data['fourniture'] = [];
        }
        return $this->respond($data, 200);
    }
}
