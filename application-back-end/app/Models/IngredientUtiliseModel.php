<?php

namespace App\Models;

use CodeIgniter\Model;

class IngredientUtiliseModel extends Model
{
	protected $DBGroup              = 'default';
	protected $table                = 'ingredient_utilise';
	protected $primaryKey           = 'IdIngredientUtilise';
	protected $useAutoIncrement     = true;
	protected $insertID             = 0;
	protected $returnType           = 'array';
	protected $useSoftDeletes       = false;
	protected $protectFields        = true;
	protected $allowedFields        = ['IdIngredient', 'Quantite', 'Unite', 'PrixRevient','DateFabrication'];

	// Dates
	protected $useTimestamps        = true;
	protected $dateFormat           = 'datetime';
	protected $createdField         = 'created_at';
	protected $updatedField         = 'updated_at';
	protected $deletedField         = '';

	// Validation
	protected $validationRules      = [];
	protected $validationMessages   = [];
	protected $skipValidation       = false;
	protected $cleanValidationRules = true;

	// Callbacks
	protected $allowCallbacks       = true;
	protected $beforeInsert         = [];
	protected $afterInsert          = [];
	protected $beforeUpdate         = [];
	protected $afterUpdate          = [];
	protected $beforeFind           = [];
	protected $afterFind            = ['format_date'];
	protected $beforeDelete         = [];
	protected $afterDelete          = [];

	protected function format_date($data=array()){
		$dateColonne = ['created_at','updated_at'];
		$dateFormat = "d-m-Y"; 
		if(!empty($data['data']))
		{
			if(isset($data['data'][0])){
				//multidimentional
				foreach($data['data'] as $k => $d){
					foreach($dateColonne as $v){
						if(isset($data['data'][$k][$v])){
							$data['data'][$k][$v] = date($dateFormat,strtotime($data['data'][$k][$v]));
						}
					}
				}
			}else{
				//single
				foreach($dateColonne as $v){
					if(isset($data['data'][$v])){
						$data['data'][$v] = date($dateFormat,strtotime($data['data'][$v]));
					}
				}
			}
		}
		return $data;
	}
}
