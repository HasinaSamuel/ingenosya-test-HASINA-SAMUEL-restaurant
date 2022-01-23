<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\ElementNecessaireModel;

class ElementNecessaire extends ResourceController
{
	protected $elementNecessaireModel;

    public function __construct()
    {
        $this->elementNecessaireModel = new ElementNecessaireModel();
    }

    public function list_element_necessaire(){
        $id = $this->request->getVar('IdMenu');
        $result = $this->elementNecessaireModel
        ->where(['IdMenu' => $id])
        ->select('element_necessaire.IdElement,i.NomIngredient,element_necessaire.Quantite')
        ->join('ingredient as i', 'i.IdIngredient = element_necessaire.IdIngredient','left')       
        ->findAll();
        $data['status'] = true;
        $data['message'] = "";
        if ($result) {                
            $data['ingredient_necessaire'] = (array)$result;
        }else{
            $data['ingredient_necessaire'] = [];
        }
        return $this->respond($data, 200);
    }

    public function add_element_necessaire(){
			$db_data = [
				'IdIngredient' => $this->request->getVar('IdIngredient'),
				'IdMenu' => $this->request->getVar('IdMenu'),
                'Quantite' => $this->request->getVar('Quantite')
			];
			$id = $this->elementNecessaireModel->insert($db_data);
			$data['success'] = true;
			$data['message'] = '';		
		return $this->respond($data, 200);
    }
}
