-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : Dim 23 jan. 2022 à 22:10
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `conception`
--

-- --------------------------------------------------------

--
-- Structure de la table `element_necessaire`
--

DROP TABLE IF EXISTS `element_necessaire`;
CREATE TABLE IF NOT EXISTS `element_necessaire` (
  `IdElement` int(10) NOT NULL AUTO_INCREMENT,
  `IdIngredient` int(10) NOT NULL,
  `IdMenu` int(10) NOT NULL,
  `Quantite` float NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`IdElement`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `element_necessaire`
--

INSERT INTO `element_necessaire` (`IdElement`, `IdIngredient`, `IdMenu`, `Quantite`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 0.4, NULL, NULL),
(2, 2, 3, 0.5, NULL, NULL),
(3, 3, 3, 1.5, '2022-01-23 11:22:53', '2022-01-23 11:22:53'),
(4, 3, 3, 3.2, '2022-01-23 12:01:43', '2022-01-23 12:01:43'),
(5, 3, 3, 100000, '2022-01-23 12:02:18', '2022-01-23 12:02:18'),
(6, 16, 3, 344, '2022-01-23 12:29:52', '2022-01-23 12:29:52'),
(7, 2, 3, 500, '2022-01-23 12:31:12', '2022-01-23 12:31:12'),
(8, 20, 3, 33, '2022-01-23 12:32:44', '2022-01-23 12:32:44'),
(9, 20, 11, 333, '2022-01-23 12:45:30', '2022-01-23 12:45:30'),
(10, 19, 12, 2, '2022-01-23 13:35:33', '2022-01-23 13:35:33'),
(11, 18, 12, 3, '2022-01-23 13:35:55', '2022-01-23 13:35:55'),
(12, 17, 1, 34, '2022-01-23 13:36:49', '2022-01-23 13:36:49'),
(13, 17, 3, 44, '2022-01-23 13:43:27', '2022-01-23 13:43:27'),
(14, 24, 14, 0.5, '2022-01-23 15:14:27', '2022-01-23 15:14:27'),
(15, 18, 14, 0.14, '2022-01-23 15:14:45', '2022-01-23 15:14:45'),
(16, 1, 13, 19, '2022-01-23 15:47:25', '2022-01-23 15:47:25'),
(17, 22, 13, 1, '2022-01-23 15:47:35', '2022-01-23 15:47:35'),
(18, 17, 13, 5, '2022-01-23 15:47:47', '2022-01-23 15:47:47'),
(19, 23, 13, 1, '2022-01-23 15:48:14', '2022-01-23 15:48:14');

-- --------------------------------------------------------

--
-- Structure de la table `fourniture`
--

DROP TABLE IF EXISTS `fourniture`;
CREATE TABLE IF NOT EXISTS `fourniture` (
  `IdFourniture` int(11) NOT NULL AUTO_INCREMENT,
  `NomFourniture` varchar(100) NOT NULL,
  `PrixUnitaire` float NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`IdFourniture`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `fourniture`
--

INSERT INTO `fourniture` (`IdFourniture`, `NomFourniture`, `PrixUnitaire`, `created_at`, `updated_at`) VALUES
(1, 'ambalage', 100, NULL, NULL),
(2, 'serviette', 100, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `ingredient`
--

DROP TABLE IF EXISTS `ingredient`;
CREATE TABLE IF NOT EXISTS `ingredient` (
  `IdIngredient` int(5) NOT NULL AUTO_INCREMENT,
  `NomIngredient` varchar(100) NOT NULL,
  `QteStock` float NOT NULL,
  `Unite` varchar(10) NOT NULL,
  `Prix_unitaire` float NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`IdIngredient`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ingredient`
--

INSERT INTO `ingredient` (`IdIngredient`, `NomIngredient`, `QteStock`, `Unite`, `Prix_unitaire`, `created_at`, `updated_at`) VALUES
(1, 'Farine', 50, 'Kg', 300, NULL, '2022-01-23 14:43:09'),
(2, 'Pomme de terre', 25, 'Kg', 1500, NULL, '2022-01-23 14:42:33'),
(16, 'Poulet de chair', 38, 'Pièces', 11000, '2022-01-23 07:05:01', '2022-01-23 14:40:38'),
(13, 'Oeufs', 100, 'Pièces', 600, '2022-01-23 06:22:08', '2022-01-23 14:41:35'),
(9, 'Salade', 10, 'Pièces', 500, '2022-01-22 11:32:22', '2022-01-23 14:42:05'),
(14, 'Tomates', 15, 'Kg', 5000, '2022-01-23 06:22:34', '2022-01-23 14:41:08'),
(17, 'Mortadelle', 12, 'Kg', 20000, '2022-01-23 07:17:55', '2022-01-23 14:39:47'),
(18, 'Sucre', 20, 'Kg', 1200, '2022-01-23 07:22:12', '2022-01-23 14:17:31'),
(19, 'Yaourt Nature', 15, 'L', 3000, '2022-01-23 07:22:34', '2022-01-23 14:16:52'),
(20, 'Lait', 10, 'L', 2500, '2022-01-23 08:15:29', '2022-01-23 14:16:09'),
(21, 'Oignon', 100, 'Pieces', 100, '2022-01-23 08:17:55', '2022-01-23 14:15:43'),
(22, 'Fromage', 10, 'Kg', 3, '2022-01-23 14:43:50', '2022-01-23 14:43:50'),
(23, 'Sauce', 4, 'Boites', 4000, '2022-01-23 14:44:43', '2022-01-23 14:44:43'),
(24, 'Corossol', 3, 'Pièces', 1000, '2022-01-23 14:45:34', '2022-01-23 14:45:34');

-- --------------------------------------------------------

--
-- Structure de la table `ingredient_utilise`
--

DROP TABLE IF EXISTS `ingredient_utilise`;
CREATE TABLE IF NOT EXISTS `ingredient_utilise` (
  `IdIngredientUtilise` int(11) NOT NULL AUTO_INCREMENT,
  `IdIngredient` int(10) NOT NULL,
  `Quantite` float NOT NULL,
  `Unite` varchar(10) NOT NULL,
  `PrixRevient` float NOT NULL,
  `DateFabrication` date NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`IdIngredientUtilise`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ingredient_utilise`
--

INSERT INTO `ingredient_utilise` (`IdIngredientUtilise`, `IdIngredient`, `Quantite`, `Unite`, `PrixRevient`, `DateFabrication`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'Litre', 3400, '2022-01-21', NULL, NULL),
(2, 2, 0.5, 'Kg', 2500, '2022-01-22', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `IdMenu` int(10) NOT NULL AUTO_INCREMENT,
  `NomMenu` varchar(100) NOT NULL,
  `NomRecette` varchar(100) DEFAULT NULL,
  `PrixUnitMenu` float NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`IdMenu`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `menu`
--

INSERT INTO `menu` (`IdMenu`, `NomMenu`, `NomRecette`, `PrixUnitMenu`, `created_at`, `updated_at`) VALUES
(1, 'Frite', 'Recette Frites', 3000, NULL, '2022-01-23 15:50:02'),
(2, 'Yaourt', 'Recette Yaourt', 3000, NULL, '2022-01-23 15:49:51'),
(3, 'Kebab', 'Recette Kebab', 11000, '2022-01-22 14:25:07', '2022-01-23 15:49:40'),
(11, 'Tacos', 'Recette Tacos', 10000, '2022-01-23 07:32:17', '2022-01-23 15:49:31'),
(14, 'Jus', 'Recette Jus', 2000, '2022-01-23 14:13:25', '2022-01-23 15:48:44'),
(12, 'Hamburger', 'Recette Hamburger', 6000, '2022-01-23 09:55:43', '2022-01-23 15:49:21'),
(13, 'Pizza', 'Recette Pizza', 12000, '2022-01-23 12:24:04', '2022-01-23 15:49:01');

-- --------------------------------------------------------

--
-- Structure de la table `produit_fabrique`
--

DROP TABLE IF EXISTS `produit_fabrique`;
CREATE TABLE IF NOT EXISTS `produit_fabrique` (
  `IdFabrication` int(10) NOT NULL AUTO_INCREMENT,
  `IdMenu` int(10) NOT NULL,
  `DateFabrication` date NOT NULL,
  `QteFabrique` float NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`IdFabrication`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `produit_fabrique`
--

INSERT INTO `produit_fabrique` (`IdFabrication`, `IdMenu`, `DateFabrication`, `QteFabrique`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-01-22', 4, NULL, NULL),
(2, 1, '2022-01-22', 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `vente`
--

DROP TABLE IF EXISTS `vente`;
CREATE TABLE IF NOT EXISTS `vente` (
  `IdVente` int(10) NOT NULL AUTO_INCREMENT,
  `CodeClient` varchar(10) NOT NULL,
  `IdFabrication` int(10) DEFAULT NULL,
  `IdFourniture` int(11) DEFAULT NULL,
  `DateOperation` date NOT NULL,
  `Quantite` float NOT NULL,
  `PrixDeVent` float NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`IdVente`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vente`
--

INSERT INTO `vente` (`IdVente`, `CodeClient`, `IdFabrication`, `IdFourniture`, `DateOperation`, `Quantite`, `PrixDeVent`, `created_at`, `updated_at`) VALUES
(1, 'CLI01', 1, NULL, '2022-01-28', 2, 3400, NULL, NULL),
(2, 'CLI02', 0, 2, '2022-01-29', 5, 2000, NULL, NULL),
(3, 'CLI03', NULL, 2, '2022-01-28', 2, 3400, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
