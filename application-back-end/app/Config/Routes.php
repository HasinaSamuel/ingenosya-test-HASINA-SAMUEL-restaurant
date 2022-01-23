<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');

$routes->group('/', ['namespace' => 'App\Controllers\Api'], function ($routes) {
    $routes->match(['get', 'post'], 'list-ingredient', 'Ingredient::list_ingredient');
    $routes->match(['get', 'post'], 'add-ingredient', 'Ingredient::add_ingredient');
    $routes->match(['get', 'post'], 'update-ingredient', 'Ingredient::maj_ingredient');
    $routes->match(['get', 'post'], 'delete-ingredient', 'Ingredient::delete_ingredient');
    $routes->match(['get', 'post'], 'ingredient-necessaire', 'ElementNecessaire::list_element_necessaire');
    $routes->match(['get', 'post'], 'add-ingredient-necessaire', 'ElementNecessaire::add_element_necessaire');   
    $routes->match(['get', 'post'], 'list-menu', 'Menu::list_menu');
    $routes->match(['get', 'post'], 'add-menu', 'Menu::add_menu');
    $routes->match(['get', 'post'], 'update-menu', 'Menu::maj_menu');
    $routes->match(['get', 'post'], 'delete-menu', 'Menu::delete_menu');

    $routes->match(['get', 'post'], 'list-ingredient-utilise', 'IngredientUtilise::list_ingredient_utilise');
    $routes->match(['get', 'post'], 'list-produitFabrique', 'ProduitFabrique::list_produitFabrique');
    $routes->match(['get', 'post'], 'list-fourniture', 'Fourniture::list_fourniture');
    $routes->match(['get', 'post'], 'list-vente', 'Vente::list_vente');
});

/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
