<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\IngredientModel;

class Ingredient extends ResourceController
{
	protected $ingredientModel;

    public function __construct()
    {
        $this->ingredientModel = new IngredientModel();
    }

    public function list_ingredient(){
        $result = $this->ingredientModel->orderBy('IdIngredient','desc')->findAll();
        $data['status'] = true;
        if ($result) {                
            $data['ingredient'] = (array)$result;
        }else{
            $data['ingredient'] = [];
        }
        return $this->respond($data, 200);
    }

    public function add_ingredient(){
        $validation =  \Config\Services::validation();
		$ingredient_create  = $validation->getRuleGroup('ingredient_create');
		if (!$this->validate($ingredient_create)) {
			$errors = error_to_string($this->validator->getErrors());
			$data['success'] = false;
			$data['message'] = $errors;
		} else {
			$db_data = [
				'NomIngredient' => $this->request->getVar('NomIngredient'),
				'QteStock' => $this->request->getVar('QteStock'),
				'Unite' => $this->request->getVar('Unite'),
				'Prix_unitaire' => $this->request->getVar('Prix_unitaire')
			];
			$id = $this->ingredientModel->insert($db_data);
			$data['success'] = true;
			$data['message'] = '';
		}
		return $this->respond($data, 200);
    }

    public function maj_ingredient(){
        $validation =  \Config\Services::validation();
		$ingredient_create  = $validation->getRuleGroup('ingredient_create');
		if (!$this->validate($ingredient_create)) {
			$errors = error_to_string($this->validator->getErrors());
			$data['success'] = false;
			$data['message'] = $errors;
		} else {            
			$db_data = [
				'NomIngredient' => $this->request->getVar('NomIngredient'),
				'QteStock' => $this->request->getVar('QteStock'),
				'Unite' => $this->request->getVar('Unite'),
				'Prix_unitaire' => $this->request->getVar('Prix_unitaire')
			];

            if($this->request->getVar('IdIngredient') && $this->request->getVar('IdIngredient') != 0){
                $id = $this->request->getVar('IdIngredient');
                $this->ingredientModel->where(['IdIngredient' => $id])->set($db_data)->update();
            }else{
                $this->ingredientModel->insert($db_data);
            }		
			$data['success'] = true;
			$data['message'] = '';
		}
		return $this->respond($data, 200);
    }


    public function delete_ingredient(){
        if($this->request->getVar('IdIngredient') && $this->request->getVar('IdIngredient') != 0){
            $id = $this->request->getVar('IdIngredient');
            $this->ingredientModel->where(['IdIngredient' => $id])->delete();
            $data['success'] = true;
        $data['message'] = '';
        }else{
            $data['success'] = false;
            $data['message'] = 'id vide';
        }		       
        return $this->respond($data, 200);
    }


}
