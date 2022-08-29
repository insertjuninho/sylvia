-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Ago-2022 às 08:07
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sylvia`
--
CREATE DATABASE IF NOT EXISTS `sylvia` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sylvia`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `drogas`
--

CREATE TABLE `drogas` (
  `id` int(11) NOT NULL,
  `tipo_droga` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `drogas`
--

INSERT INTO `drogas` (`id`, `tipo_droga`) VALUES
(1, '0,678'),
(2, 'cocaina0,678'),
(3, 'THC0,1'),
(4, 'cocaina: 0,678'),
(5, 'THC: 0,1'),
(6, 'cocaina: 0,678'),
(7, 'anfetamina: 0,1'),
(8, 'metanfetamina: 0,1'),
(9, 'mda: 0,1'),
(10, 'mdma: 0'),
(11, 'THC: 0,1'),
(12, 'morfina: 0,1'),
(13, 'codeina: 0,1'),
(14, 'heroina: 0,1'),
(15, 'benzoilecgonina: 0'),
(16, 'cocaetileno: 0'),
(17, 'norcocaina: 0'),
(18, 'cocaina: 0,678'),
(19, 'anfetamina: 0,1'),
(20, 'metanfetamina: 0,1'),
(21, 'mda: 0,1'),
(22, 'mdma: 0'),
(23, 'THC: 0,1'),
(24, 'morfina: 0,1'),
(25, 'codeina: 0,1'),
(26, 'heroina: 0,1'),
(27, 'benzoilecgonina: 0'),
(28, 'cocaetileno: 0'),
(29, 'norcocaina: 0');

-- --------------------------------------------------------

--
-- Estrutura da tabela `laudo`
--

CREATE TABLE `laudo` (
  `id` int(11) NOT NULL,
  `tipo_droga` varchar(60) DEFAULT NULL,
  `resultado` varchar(20) DEFAULT NULL,
  `codigo_amostra` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `laudo`
--

INSERT INTO `laudo` (`id`, `tipo_droga`, `resultado`, `codigo_amostra`) VALUES
(1, NULL, 'POSITIVO', NULL),
(2, NULL, 'POSITIVO', '12345678'),
(3, NULL, 'POSITIVO', '12345678'),
(4, NULL, 'POSITIVO', '12345678'),
(5, NULL, 'POSITIVO', '12345678'),
(6, NULL, 'POSITIVO', '12345678');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `email`, `senha`) VALUES
(1, 'junior@gmail.com', '12345678'),
(2, 'junior@gmail.com', '$2a$10$HjMPNBXzVNKvMauHFXSl6.RDmWuzdzEPYWCTS3bl.WDoGT9B6.YIG'),
(3, 'junior@gmail.com', '$2a$10$QRH9dd8kA0dL0EXxhQjBUuiXDTxJ0GZk1H2KS14X/B.tbd54QC6KS'),
(4, 'junio1r@gmail.com', '$2a$10$fo7CFl1wmr83InA1tVGOGuxYslhLYEC8nfdEkACmV9ccaOIzN87tK'),
(5, 'junior1@gmail.com', '$2a$10$cTgYOL5aqFee9Id47eCwMe.uongZVB70XIH9gmVVPEUXEun1fEDeO');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `drogas`
--
ALTER TABLE `drogas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `laudo`
--
ALTER TABLE `laudo`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `drogas`
--
ALTER TABLE `drogas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `laudo`
--
ALTER TABLE `laudo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
