-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-03-2021 a las 10:03:47
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `quiz`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `humedad`
--

CREATE TABLE `humedad` (
  `id` smallint(6) DEFAULT NULL,
  `ENG` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `humedad`
--

INSERT INTO `humedad` (`id`, `ENG`) VALUES
(0, '66,49'),
(1, '67,56'),
(2, '67,27'),
(3, '65,05'),
(4, '65,05'),
(5, '65,05'),
(6, '65,92'),
(7, '65,92'),
(8, '64,88'),
(9, '62,81'),
(10, '62,81'),
(11, '61,05'),
(12, '60,45'),
(13, '60,01'),
(14, '60,01'),
(15, '59,28'),
(16, '62,07'),
(17, '62,07'),
(18, '61,33'),
(19, '60,89'),
(20, '60,89'),
(21, '60,89'),
(22, '59,2'),
(23, '59,2'),
(24, '58,11'),
(25, '58,11'),
(26, '55,75'),
(27, '55,31'),
(28, '54,46'),
(29, '54,46'),
(30, '54,46'),
(31, '54,46'),
(32, '53,84'),
(33, '53,84'),
(34, '53,83'),
(35, '51,78'),
(36, '51,78'),
(37, '56,2'),
(38, '56,2'),
(39, '60,59'),
(40, '60,59'),
(41, '59,58'),
(42, '59,58'),
(43, '58,72'),
(44, '58,72'),
(45, '58,72'),
(46, '59,28'),
(47, '59,28'),
(48, '58,26'),
(49, '58,26'),
(50, '57,38'),
(51, '57,38'),
(52, '57,09'),
(53, '57,09'),
(54, '55,32'),
(55, '55,32'),
(56, '53,99'),
(57, '53,99'),
(58, '53,56'),
(59, '53,56'),
(60, '55,47'),
(61, '55,47'),
(62, '57,97'),
(63, '57,97'),
(64, '56,38'),
(65, '56,38'),
(66, '55,32'),
(67, '55,32'),
(68, '58,12'),
(69, '58,12'),
(70, '60,45'),
(71, '60,45'),
(72, '63,1'),
(73, '63,1'),
(74, '60,45'),
(75, '60,45'),
(76, '63,1'),
(77, '63,55'),
(78, '63,55'),
(79, '59,13'),
(80, '59,13'),
(81, '57,98'),
(82, '57,98'),
(83, '57,83'),
(84, '57,83'),
(85, '59,12'),
(86, '59,12'),
(87, '59,42'),
(88, '59,12'),
(89, '59,12'),
(90, '58,71'),
(91, '58,71'),
(92, '60,6'),
(93, '60,6'),
(94, '63,69'),
(95, '63,69'),
(96, '63,55'),
(97, '63,55'),
(98, '66,05'),
(99, '66,05'),
(100, '66,49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `indiceambiental`
--

CREATE TABLE `indiceambiental` (
  `id` smallint(6) NOT NULL,
  `indice` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `indiceambiental`
--

INSERT INTO `indiceambiental` (`id`, `indice`) VALUES
(1, 42.25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel`
--

CREATE TABLE `nivel` (
  `id` smallint(6) DEFAULT NULL,
  `ENG` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `nivel`
--

INSERT INTO `nivel` (`id`, `ENG`) VALUES
(1, '95,0173'),
(2, '95,3836'),
(3, '93,7186'),
(4, '93,7186'),
(5, '92,1868'),
(6, '92,1868'),
(7, '92,1868'),
(8, '93,0526'),
(9, '93,0526'),
(10, '93,0526'),
(11, '91,8205'),
(12, '91,8205'),
(13, '92,0536'),
(14, '92,0536'),
(15, '92,0536'),
(16, '92,0536'),
(17, '92,0536'),
(18, '92,0536'),
(19, '92,0536'),
(20, '92,0536'),
(21, '90,8215'),
(22, '90,8215'),
(23, '88,7569'),
(24, '91,1212'),
(25, '91,3876'),
(26, '91,3876'),
(27, '91,3876'),
(28, '91,3876'),
(29, '91,3876'),
(30, '91,3876'),
(31, '91,3876'),
(32, '91,3876'),
(33, '91,3876'),
(34, '91,3876'),
(35, '91,3876'),
(36, '89,7226'),
(37, '87,2584'),
(38, '88,8235'),
(39, '88,1908'),
(40, '89,7226'),
(41, '89,7226'),
(42, '89,1565'),
(43, '89,5894'),
(44, '89,5894'),
(45, '86,5591'),
(46, '88,2574'),
(47, '88,0909'),
(48, '88,0909'),
(49, '88,0909'),
(50, '88,0909'),
(51, '88,8901'),
(52, '88,8568'),
(53, '85,8598'),
(54, '85,8598'),
(55, '85,8598'),
(56, '86,4259'),
(57, '86,4259'),
(58, '86,9587'),
(59, '86,9587'),
(60, '86,4259'),
(61, '86,4259'),
(62, '86,4259'),
(63, '83,6287'),
(64, '83,6287'),
(65, '83,6287'),
(66, '83,6287'),
(67, '83,6287'),
(68, '83,6287'),
(69, '85,1272'),
(70, '85,1272'),
(71, '85,1272'),
(72, '85,1272'),
(73, '85,66'),
(74, '85,66'),
(75, '86,0263'),
(76, '83,8285'),
(77, '81,8971'),
(78, '83,2291'),
(79, '83,2291'),
(80, '83,2291'),
(81, '82,5964'),
(82, '82,5964'),
(83, '82,1968'),
(84, '82,1968'),
(85, '84,1948'),
(86, '84,1948'),
(87, '84,1948'),
(88, '81,7639'),
(89, '81,7639'),
(90, '82,996'),
(91, '83,1958'),
(92, '82,4965'),
(93, '82,4965'),
(94, '82,4965'),
(95, '82,4965'),
(96, '82,4965'),
(97, '82,4965'),
(98, '83,3956'),
(99, '83,3956'),
(100, '84,0949');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sqlite_sequence`
--

CREATE TABLE `sqlite_sequence` (
  `name` varchar(11) DEFAULT NULL,
  `seq` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sqlite_sequence`
--

INSERT INTO `sqlite_sequence` (`name`, `seq`) VALUES
('Humedad', 104),
('Temperatura', 100),
('Nivel', 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temperatura`
--

CREATE TABLE `temperatura` (
  `id` smallint(6) DEFAULT NULL,
  `ENG` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `temperatura`
--

INSERT INTO `temperatura` (`id`, `ENG`) VALUES
(1, '16,5954'),
(2, '16,5954'),
(3, '16,5954'),
(4, '16,5954'),
(5, '16,5954'),
(6, '16,6155'),
(7, '16,5752'),
(8, '16,5752'),
(9, '16,5954'),
(10, '16,5954'),
(11, '16,5551'),
(12, '16,5551'),
(13, '16,5752'),
(14, '16,5551'),
(15, '16,5954'),
(16, '16,5148'),
(17, '16,5551'),
(18, '16,5349'),
(19, '16,5551'),
(20, '16,5349'),
(21, '16,5349'),
(22, '16,5349'),
(23, '16,5349'),
(24, '16,5551'),
(25, '16,5349'),
(26, '16,4947'),
(27, '16,5349'),
(28, '16,5349'),
(29, '16,5551'),
(30, '16,5551'),
(31, '16,5148'),
(32, '16,5551'),
(33, '16,5148'),
(34, '16,5349'),
(35, '16,5349'),
(36, '16,5551'),
(37, '16,5148'),
(38, '16,5148'),
(39, '16,5551'),
(40, '16,5752'),
(41, '16,5752'),
(42, '16,5349'),
(43, '16,5349'),
(44, '16,5349'),
(45, '16,5148'),
(46, '16,5148'),
(47, '16,4947'),
(48, '16,5148'),
(49, '16,4947'),
(50, '16,5148'),
(51, '16,5349'),
(52, '16,5349'),
(53, '16,5148'),
(54, '16,4745'),
(55, '16,5148'),
(56, '16,5148'),
(57, '16,4947'),
(58, '16,5148'),
(59, '16,5148'),
(60, '16,4745'),
(61, '16,5148'),
(62, '16,4947'),
(63, '16,4947'),
(64, '16,4745'),
(65, '16,5148'),
(66, '16,4745'),
(67, '16,5148'),
(68, '16,5148'),
(69, '16,4745'),
(70, '16,4947'),
(71, '16,4947'),
(72, '16,4947'),
(73, '16,4947'),
(74, '16,4947'),
(75, '16,4544'),
(76, '16,4544'),
(77, '16,4745'),
(78, '16,4745'),
(79, '16,4947'),
(80, '16,4544'),
(81, '16,4544'),
(82, '16,4745'),
(83, '16,4544'),
(84, '16,4544'),
(85, '16,4544'),
(86, '16,4745'),
(87, '16,4544'),
(88, '16,4544'),
(89, '16,4745'),
(90, '16,4745'),
(91, '16,4745'),
(92, '16,4745'),
(93, '16,4947'),
(94, '16,5148'),
(95, '16,4745'),
(96, '16,4544'),
(97, '16,4544'),
(98, '16,4745'),
(99, '16,4745'),
(100, '16,4342');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `indiceambiental`
--
ALTER TABLE `indiceambiental`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `indiceambiental`
--
ALTER TABLE `indiceambiental`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
