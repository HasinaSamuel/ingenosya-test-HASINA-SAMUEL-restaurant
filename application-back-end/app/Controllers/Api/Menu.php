<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\MenuModel;

class Menu extends ResourceController
{
	protected $menuModel;

    public function __construct()
    {
        $this->menuModel = new MenuModel();
    }

    public function list_menu(){
        $result = $this->menuModel->orderBy('IdMenu','desc')->findAll();
        $data['status'] = true;
        $data['message'] = "";
        if ($result) {                
            $data['menu'] = (array)$result;
        }else{
            $data['menu'] = [];
        }
        return $this->respond($data, 200);
    }

    public function add_menu(){
        $validation =  \Config\Services::validation();
		$menu_create  = $validation->getRuleGroup('menu_create');
		if (!$this->validate($menu_create)) {
			$errors = error_to_string($this->validator->getErrors());
			$data['success'] = false;
			$data['message'] = $errors;
		} else {
			$db_data = [
				'NomMenu' => $this->request->getVar('NomMenu'),
				'PrixUnitMenu' => $this->request->getVar('PrixUnitMenu'),
                'NomRecette' => $this->request->getVar('NomRecette')
			];
			$id = $this->menuModel->insert($db_data);
			$data['success'] = true;
			$data['message'] = '';
		}
		return $this->respond($data, 200);
    }

    public function maj_menu(){
        $validation =  \Config\Services::validation();
		$menu_create  = $validation->getRuleGroup('menu_create');
		if (!$this->validate($menu_create)) {
			$errors = error_to_string($this->validator->getErrors());
			$data['success'] = false;
			$data['message'] = $errors;
		} else {            
			$db_data = [
				'NomMenu' => $this->request->getVar('NomMenu'),
				'PrixUnitMenu' => $this->request->getVar('PrixUnitMenu'),
                'NomRecette' => $this->request->getVar('NomRecette')
			];

            if($this->request->getVar('IdMenu') && $this->request->getVar('IdMenu') != 0){
                $id = $this->request->getVar('IdMenu');
                $this->menuModel->where(['IdMenu' => $id])->set($db_data)->update();
            }else{
                $this->menuModel->insert($db_data);
            }		
			$data['success'] = true;
			$data['message'] = '';
		}
		return $this->respond($data, 200);
    }

    public function delete_menu(){
        if($this->request->getVar('IdMenu') && $this->request->getVar('IdMenu') != 0){
            $id = $this->request->getVar('IdMenu');
            $this->menuModel->where(['IdMenu' => $id])->delete();
            $data['success'] = true;
        $data['message'] = '';
        }else{
            $data['success'] = false;
            $data['message'] = 'id vide';
        }		       
        return $this->respond($data, 200);
    }
}
