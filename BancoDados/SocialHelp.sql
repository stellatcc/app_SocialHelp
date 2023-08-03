-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 03/08/2023 às 02:10
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `SocialHelp`
--
CREATE DATABASE IF NOT EXISTS `SocialHelp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `SocialHelp`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Cadastro Necessitados`
--

CREATE TABLE `Cadastro Necessitados` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `formaAjuda` int(255) NOT NULL,
  `nome usuario` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `qtd integrantes` int(255) NOT NULL,
  `familia` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Cadastro Ongs`
--

CREATE TABLE `Cadastro Ongs` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `nome Ong` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contato` int(255) NOT NULL,
  `formaAjuda` int(255) NOT NULL,
  `nome usuario` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Cadastro Pessoas`
--

CREATE TABLE `Cadastro Pessoas` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `formaAjuda` int(255) NOT NULL,
  `nome usuario` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `Cadastro Necessitados`
--
ALTER TABLE `Cadastro Necessitados`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Cadastro Ongs`
--
ALTER TABLE `Cadastro Ongs`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Cadastro Pessoas`
--
ALTER TABLE `Cadastro Pessoas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `Cadastro Necessitados`
--
ALTER TABLE `Cadastro Necessitados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Cadastro Ongs`
--
ALTER TABLE `Cadastro Ongs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Cadastro Pessoas`
--
ALTER TABLE `Cadastro Pessoas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
