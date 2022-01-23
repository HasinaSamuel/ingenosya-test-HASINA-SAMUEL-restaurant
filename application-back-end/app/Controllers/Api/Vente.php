<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\VenteModel;

class Vente extends ResourceController
{
	protected $venteModel;

    public function __construct()
    {
        $this->venteModel = new VenteModel();
    }

    public function list_vente(){
        $result = $this->venteModel->findAll();
        $data['status'] = true;
        $data['message'] = "";
        if ($result) {                
            $data['vente'] = (array)$result;
        }else{
            $data['vente'] = [];
        }
        return $this->respond($data, 200);
    }
}
