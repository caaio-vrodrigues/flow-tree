-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2025 at 11:34 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sflowtree`
--

-- --------------------------------------------------------

--
-- Table structure for table `cidades`
--

CREATE TABLE `cidades` (
  `id` int(11) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contato_fornecedores`
--

CREATE TABLE `contato_fornecedores` (
  `id` int(11) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `cel` varchar(255) NOT NULL,
  `tel_recado` varchar(255) NOT NULL,
  `e-mail` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(255) NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `endereco_fornecedores`
--

CREATE TABLE `endereco_fornecedores` (
  `id` int(11) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `cidade` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(255) NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `endereco_obras`
--

CREATE TABLE `endereco_obras` (
  `id` int(11) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `cidade` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(255) NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `estados`
--

CREATE TABLE `estados` (
  `id` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `sigla` varchar(2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fluxo_pagamentos`
--

CREATE TABLE `fluxo_pagamentos` (
  `id` int(11) NOT NULL,
  `fornecedor` int(11) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `parcelas_totais` int(4) NOT NULL,
  `parcela_atual` int(4) NOT NULL,
  `forma_pagamentos` varchar(255) NOT NULL,
  `situacao` varchar(255) NOT NULL,
  `tipo_gasto` varchar(255) NOT NULL,
  `orcamento` int(11) NOT NULL,
  `docs` int(11) NOT NULL,
  `observacoes` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fornecedores`
--

CREATE TABLE `fornecedores` (
  `id` int(11) NOT NULL,
  `cnpj` varchar(255) NOT NULL,
  `nome_fantasia` varchar(255) NOT NULL,
  `contato` int(11) NOT NULL,
  `endereco` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(255) NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `obras`
--

CREATE TABLE `obras` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `endereco` int(11) NOT NULL,
  `contato` int(11) NOT NULL,
  `inicio_obra` date NOT NULL,
  `previsao_termino_obra` date NOT NULL,
  `valor_fechado` decimal(10,2) NOT NULL,
  `situacao` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orcamentos`
--

CREATE TABLE `orcamentos` (
  `id` int(11) NOT NULL,
  `num_orcamento` varchar(255) NOT NULL,
  `situacao` varchar(255) NOT NULL,
  `obra` int(11) NOT NULL,
  `valor_fechado` decimal(10,2) NOT NULL,
  `data_emissao` date NOT NULL,
  `pdf_orcamento` blob NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(255) NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cidades`
--
ALTER TABLE `cidades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cidades_estados` (`estado`);

--
-- Indexes for table `contato_fornecedores`
--
ALTER TABLE `contato_fornecedores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `endereco_fornecedores`
--
ALTER TABLE `endereco_fornecedores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_enderecoFornecedores_cidades` (`cidade`);

--
-- Indexes for table `endereco_obras`
--
ALTER TABLE `endereco_obras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_enderecoObras_cidades` (`cidade`);

--
-- Indexes for table `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fluxo_pagamentos`
--
ALTER TABLE `fluxo_pagamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_flxPagamentos_fornecedores` (`fornecedor`),
  ADD KEY `fk_flxPagamentos_orcamentos` (`orcamento`);

--
-- Indexes for table `fornecedores`
--
ALTER TABLE `fornecedores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_fornecedores_contatoFornecedores` (`contato`),
  ADD KEY `fk_fornecedores_enderecoFornecedores` (`endereco`);

--
-- Indexes for table `obras`
--
ALTER TABLE `obras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_obras_enderecoObras` (`endereco`);

--
-- Indexes for table `orcamentos`
--
ALTER TABLE `orcamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orcamentos_obras` (`obra`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cidades`
--
ALTER TABLE `cidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contato_fornecedores`
--
ALTER TABLE `contato_fornecedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `endereco_fornecedores`
--
ALTER TABLE `endereco_fornecedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `endereco_obras`
--
ALTER TABLE `endereco_obras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `estados`
--
ALTER TABLE `estados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fluxo_pagamentos`
--
ALTER TABLE `fluxo_pagamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fornecedores`
--
ALTER TABLE `fornecedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `obras`
--
ALTER TABLE `obras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orcamentos`
--
ALTER TABLE `orcamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cidades`
--
ALTER TABLE `cidades`
  ADD CONSTRAINT `fk_cidades_estados` FOREIGN KEY (`estado`) REFERENCES `estados` (`id`);

--
-- Constraints for table `endereco_fornecedores`
--
ALTER TABLE `endereco_fornecedores`
  ADD CONSTRAINT `fk_enderecoFornecedores_cidades` FOREIGN KEY (`cidade`) REFERENCES `cidades` (`id`);

--
-- Constraints for table `endereco_obras`
--
ALTER TABLE `endereco_obras`
  ADD CONSTRAINT `fk_enderecoObras_cidades` FOREIGN KEY (`cidade`) REFERENCES `cidades` (`id`);

--
-- Constraints for table `fluxo_pagamentos`
--
ALTER TABLE `fluxo_pagamentos`
  ADD CONSTRAINT `fk_flxPagamentos_fornecedores` FOREIGN KEY (`fornecedor`) REFERENCES `fornecedores` (`id`),
  ADD CONSTRAINT `fk_flxPagamentos_orcamentos` FOREIGN KEY (`orcamento`) REFERENCES `orcamentos` (`id`);

--
-- Constraints for table `fornecedores`
--
ALTER TABLE `fornecedores`
  ADD CONSTRAINT `fk_fornecedores_contatoFornecedores` FOREIGN KEY (`contato`) REFERENCES `contato_fornecedores` (`id`),
  ADD CONSTRAINT `fk_fornecedores_enderecoFornecedores` FOREIGN KEY (`endereco`) REFERENCES `endereco_fornecedores` (`id`);

--
-- Constraints for table `obras`
--
ALTER TABLE `obras`
  ADD CONSTRAINT `fk_obras_enderecoObras` FOREIGN KEY (`endereco`) REFERENCES `endereco_obras` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orcamentos`
--
ALTER TABLE `orcamentos`
  ADD CONSTRAINT `fk_orcamentos_obras` FOREIGN KEY (`obra`) REFERENCES `obras` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
