<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\ProduitFabriqueModel;

class ProduitFabrique extends ResourceController
{
	protected $produitFabriqueModel;

    public function __construct()
    {
        $this->produitFabriqueModel = new ProduitFabriqueModel();
    }

    public function list_produitFabrique(){
        $result = $this->produitFabriqueModel->findAll();
        $data['status'] = true;
        $data['message'] = "";
        if ($result) {                
            $data['produit_fabrique'] = (array)$result;
        }else{
            $data['produit_fabrique'] = [];
        }
        return $this->respond($data, 200);
    }
}
