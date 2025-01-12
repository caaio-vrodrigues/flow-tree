-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2025 at 10:59 AM
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
-- Table structure for table `boletos`
--

CREATE TABLE `boletos` (
  `id` int(11) NOT NULL,
  `num_boleto` varchar(255) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `data_emissao` date NOT NULL,
  `pdf` blob NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cidades`
--

CREATE TABLE `cidades` (
  `id` int(11) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `estado` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `cnpj` varchar(255) NOT NULL,
  `nome_fantasia` varchar(255) NOT NULL,
  `contato` int(11) NOT NULL,
  `endereco` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contato_clientes`
--

CREATE TABLE `contato_clientes` (
  `id` int(11) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `cel` varchar(255) NOT NULL,
  `tel_recado` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
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
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contato_obras`
--

CREATE TABLE `contato_obras` (
  `id` int(11) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `cel` varchar(255) NOT NULL,
  `tel_recado` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contato_usuarios`
--

CREATE TABLE `contato_usuarios` (
  `id` int(11) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `cel` varchar(255) NOT NULL,
  `tel_recado` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contratos`
--

CREATE TABLE `contratos` (
  `id` int(11) NOT NULL,
  `num_contrato` varchar(255) NOT NULL,
  `valor_fechado` decimal(10,2) NOT NULL,
  `data_emissao` date NOT NULL,
  `pdf` blob NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `docs_pagamentos`
--

CREATE TABLE `docs_pagamentos` (
  `id` int(11) NOT NULL,
  `nota_fiscal` int(11) NOT NULL,
  `fatura` int(11) NOT NULL,
  `boleto` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `endereco_clientes`
--

CREATE TABLE `endereco_clientes` (
  `id` int(11) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `cidades` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
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
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
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
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `endereco_usuarios`
--

CREATE TABLE `endereco_usuarios` (
  `id` int(11) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `cidade` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
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
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faturas`
--

CREATE TABLE `faturas` (
  `id` int(11) NOT NULL,
  `num_fatura` varchar(255) NOT NULL,
  `tipo_fatura` varchar(255) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `data_emissao` date NOT NULL,
  `pdf` blob NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
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
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
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
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nf_fornecedores`
--

CREATE TABLE `nf_fornecedores` (
  `id` int(11) NOT NULL,
  `num_nota` varchar(255) NOT NULL,
  `tipo_nota` varchar(255) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `data_emissao` date NOT NULL,
  `pdf` blob NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
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
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orcamentos`
--

CREATE TABLE `orcamentos` (
  `id` int(11) NOT NULL,
  `num_orcamento` varchar(255) NOT NULL,
  `cliente` int(11) NOT NULL,
  `situacao` varchar(255) NOT NULL,
  `contrato` int(11) NOT NULL,
  `obra` int(11) NOT NULL,
  `valor_fechado` decimal(10,2) NOT NULL,
  `data_emissao` date NOT NULL,
  `pdf` blob NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `data_nascimento` date NOT NULL,
  `endereco` int(11) NOT NULL,
  `contato` int(11) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `boletos`
--
ALTER TABLE `boletos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_boletos_usuarios` (`created_by`),
  ADD KEY `fk2_boletos_usuarios` (`updated_by`);

--
-- Indexes for table `cidades`
--
ALTER TABLE `cidades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cidades_estados` (`estado`),
  ADD KEY `fk_cidades_usuarios` (`created_by`),
  ADD KEY `fk2_cidades_usuarios` (`updated_by`);

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_clientes_contatoClientes` (`contato`),
  ADD KEY `fk_clientes_enderecoClientes` (`endereco`),
  ADD KEY `fk_clientes_usuarios` (`created_by`),
  ADD KEY `fk2_clientes_usuarios` (`updated_by`);

--
-- Indexes for table `contato_clientes`
--
ALTER TABLE `contato_clientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_contatoClientes_usuarios` (`created_by`),
  ADD KEY `fk2_contatoClientes_usuarios` (`updated_by`);

--
-- Indexes for table `contato_fornecedores`
--
ALTER TABLE `contato_fornecedores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_contatoFornecedores_usuarios` (`created_by`),
  ADD KEY `fk2_contatoFornecedores_usuarios` (`updated_by`);

--
-- Indexes for table `contato_obras`
--
ALTER TABLE `contato_obras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_contatoObras_usuarios` (`created_by`),
  ADD KEY `fk2_contatoObras_usuarios` (`updated_by`);

--
-- Indexes for table `contato_usuarios`
--
ALTER TABLE `contato_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_contatoUsuarios_usuarios` (`created_by`),
  ADD KEY `fk2_contatoUsuarios_usuarios` (`updated_by`);

--
-- Indexes for table `contratos`
--
ALTER TABLE `contratos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_contratos_usuarios` (`created_by`),
  ADD KEY `fk2_contratos_usuarios` (`updated_by`);

--
-- Indexes for table `docs_pagamentos`
--
ALTER TABLE `docs_pagamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_docsPagamentos_nfFornecedores` (`nota_fiscal`),
  ADD KEY `fk_docsPagamentos_faturas` (`fatura`),
  ADD KEY `fk_docsPagamentos_boletos` (`boleto`),
  ADD KEY `fk_docsPagamentos_usuarios` (`created_by`),
  ADD KEY `fk2_docsPagamentos_usuarios` (`updated_by`);

--
-- Indexes for table `endereco_clientes`
--
ALTER TABLE `endereco_clientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_enderecoClientes_cidades` (`cidades`),
  ADD KEY `fk_enderecoClientes_usuarios` (`created_by`),
  ADD KEY `fk2_enderecoClientes_usuarios` (`updated_by`);

--
-- Indexes for table `endereco_fornecedores`
--
ALTER TABLE `endereco_fornecedores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_enderecoFornecedores_cidades` (`cidade`),
  ADD KEY `fk_enderecoFornecedores_usuarios` (`created_by`),
  ADD KEY `fk2_enderecoFornecedores_usuarios` (`updated_by`);

--
-- Indexes for table `endereco_obras`
--
ALTER TABLE `endereco_obras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_enderecoObras_cidades` (`cidade`),
  ADD KEY `fk_enderecoObras_usuarios` (`created_by`),
  ADD KEY `fk2_enderecoObras_usuarios` (`updated_by`);

--
-- Indexes for table `endereco_usuarios`
--
ALTER TABLE `endereco_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_enderecoUsuarios_cidades` (`cidade`),
  ADD KEY `fk_enderecoUsuarios_usuarios` (`created_by`),
  ADD KEY `fk2_enderecoUsuarios_usuarios` (`updated_by`);

--
-- Indexes for table `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_estados_usuarios` (`created_by`),
  ADD KEY `fk2_estados_usuarios` (`updated_by`);

--
-- Indexes for table `faturas`
--
ALTER TABLE `faturas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_faturas_usuarios` (`created_by`),
  ADD KEY `fk2_faturas_usuarios` (`updated_by`);

--
-- Indexes for table `fluxo_pagamentos`
--
ALTER TABLE `fluxo_pagamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_flxPagamentos_fornecedores` (`fornecedor`),
  ADD KEY `fk_flxPagamentos_orcamentos` (`orcamento`),
  ADD KEY `fk_flxPagamentos_docsPagamentos` (`docs`),
  ADD KEY `fk_flxPagamentos_usuarios` (`created_by`),
  ADD KEY `fk2_flxPagamentos_usuarios` (`updated_by`);

--
-- Indexes for table `fornecedores`
--
ALTER TABLE `fornecedores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_fornecedores_contatoFornecedores` (`contato`),
  ADD KEY `fk_fornecedores_enderecoFornecedores` (`endereco`),
  ADD KEY `fk_fornecedores_usuarios` (`created_by`),
  ADD KEY `fk2_fornecedores_usuarios` (`updated_by`);

--
-- Indexes for table `nf_fornecedores`
--
ALTER TABLE `nf_fornecedores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_nfFornecedores_usuarios` (`created_by`),
  ADD KEY `fk2_nfFornecedores_usuarios` (`updated_by`);

--
-- Indexes for table `obras`
--
ALTER TABLE `obras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_obras_enderecoObras` (`endereco`),
  ADD KEY `fk_obras_contatoObras` (`contato`),
  ADD KEY `fk_obras_usuarios` (`created_by`),
  ADD KEY `fk2_obras_usuarios` (`updated_by`);

--
-- Indexes for table `orcamentos`
--
ALTER TABLE `orcamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orcamentos_obras` (`obra`),
  ADD KEY `fk_orcamentos_clientes` (`cliente`),
  ADD KEY `fk_orcamentos_contratos` (`contrato`),
  ADD KEY `fk_orcamentos_usuarios` (`created_by`),
  ADD KEY `fk2_orcamentos_usuarios` (`updated_by`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuarios_enderecoUsuarios` (`endereco`),
  ADD KEY `fk_usuarios_contatoUsuarios` (`contato`),
  ADD KEY `fk_usuarios_usuarios` (`created_by`),
  ADD KEY `fk2_usuarios_usuarios` (`updated_by`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `boletos`
--
ALTER TABLE `boletos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cidades`
--
ALTER TABLE `cidades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contato_clientes`
--
ALTER TABLE `contato_clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contato_fornecedores`
--
ALTER TABLE `contato_fornecedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contato_obras`
--
ALTER TABLE `contato_obras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contato_usuarios`
--
ALTER TABLE `contato_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contratos`
--
ALTER TABLE `contratos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `docs_pagamentos`
--
ALTER TABLE `docs_pagamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `endereco_clientes`
--
ALTER TABLE `endereco_clientes`
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
-- AUTO_INCREMENT for table `endereco_usuarios`
--
ALTER TABLE `endereco_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `estados`
--
ALTER TABLE `estados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faturas`
--
ALTER TABLE `faturas`
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
-- AUTO_INCREMENT for table `nf_fornecedores`
--
ALTER TABLE `nf_fornecedores`
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
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `boletos`
--
ALTER TABLE `boletos`
  ADD CONSTRAINT `fk2_boletos_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_boletos_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `cidades`
--
ALTER TABLE `cidades`
  ADD CONSTRAINT `fk2_cidades_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_cidades_estados` FOREIGN KEY (`estado`) REFERENCES `estados` (`id`),
  ADD CONSTRAINT `fk_cidades_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `fk2_clientes_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_clientes_contatoClientes` FOREIGN KEY (`contato`) REFERENCES `contato_clientes` (`id`),
  ADD CONSTRAINT `fk_clientes_enderecoClientes` FOREIGN KEY (`endereco`) REFERENCES `endereco_clientes` (`id`),
  ADD CONSTRAINT `fk_clientes_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `contato_clientes`
--
ALTER TABLE `contato_clientes`
  ADD CONSTRAINT `fk2_contatoClientes_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_contatoClientes_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `contato_fornecedores`
--
ALTER TABLE `contato_fornecedores`
  ADD CONSTRAINT `fk2_contatoFornecedores_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_contatoFornecedores_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `contato_obras`
--
ALTER TABLE `contato_obras`
  ADD CONSTRAINT `fk2_contatoObras_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_contatoObras_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `contato_usuarios`
--
ALTER TABLE `contato_usuarios`
  ADD CONSTRAINT `fk2_contatoUsuarios_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_contatoUsuarios_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `contratos`
--
ALTER TABLE `contratos`
  ADD CONSTRAINT `fk2_contratos_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_contratos_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `docs_pagamentos`
--
ALTER TABLE `docs_pagamentos`
  ADD CONSTRAINT `fk2_docsPagamentos_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_docsPagamentos_boletos` FOREIGN KEY (`boleto`) REFERENCES `boletos` (`id`),
  ADD CONSTRAINT `fk_docsPagamentos_faturas` FOREIGN KEY (`fatura`) REFERENCES `faturas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_docsPagamentos_nfFornecedores` FOREIGN KEY (`nota_fiscal`) REFERENCES `nf_fornecedores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_docsPagamentos_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `endereco_clientes`
--
ALTER TABLE `endereco_clientes`
  ADD CONSTRAINT `fk2_enderecoClientes_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_enderecoClientes_cidades` FOREIGN KEY (`cidades`) REFERENCES `cidades` (`id`),
  ADD CONSTRAINT `fk_enderecoClientes_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `endereco_fornecedores`
--
ALTER TABLE `endereco_fornecedores`
  ADD CONSTRAINT `fk2_enderecoFornecedores_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_enderecoFornecedores_cidades` FOREIGN KEY (`cidade`) REFERENCES `cidades` (`id`),
  ADD CONSTRAINT `fk_enderecoFornecedores_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `endereco_obras`
--
ALTER TABLE `endereco_obras`
  ADD CONSTRAINT `fk2_enderecoObras_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_enderecoObras_cidades` FOREIGN KEY (`cidade`) REFERENCES `cidades` (`id`),
  ADD CONSTRAINT `fk_enderecoObras_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `endereco_usuarios`
--
ALTER TABLE `endereco_usuarios`
  ADD CONSTRAINT `fk2_enderecoUsuarios_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_enderecoUsuarios_cidades` FOREIGN KEY (`cidade`) REFERENCES `cidades` (`id`),
  ADD CONSTRAINT `fk_enderecoUsuarios_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `estados`
--
ALTER TABLE `estados`
  ADD CONSTRAINT `fk2_estados_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_estados_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `faturas`
--
ALTER TABLE `faturas`
  ADD CONSTRAINT `fk2_faturas_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_faturas_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `fluxo_pagamentos`
--
ALTER TABLE `fluxo_pagamentos`
  ADD CONSTRAINT `fk2_flxPagamentos_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_flxPagamentos_docsPagamentos` FOREIGN KEY (`docs`) REFERENCES `docs_pagamentos` (`id`),
  ADD CONSTRAINT `fk_flxPagamentos_fornecedores` FOREIGN KEY (`fornecedor`) REFERENCES `fornecedores` (`id`),
  ADD CONSTRAINT `fk_flxPagamentos_orcamentos` FOREIGN KEY (`orcamento`) REFERENCES `orcamentos` (`id`),
  ADD CONSTRAINT `fk_flxPagamentos_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `fornecedores`
--
ALTER TABLE `fornecedores`
  ADD CONSTRAINT `fk2_fornecedores_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_fornecedores_contatoFornecedores` FOREIGN KEY (`contato`) REFERENCES `contato_fornecedores` (`id`),
  ADD CONSTRAINT `fk_fornecedores_enderecoFornecedores` FOREIGN KEY (`endereco`) REFERENCES `endereco_fornecedores` (`id`),
  ADD CONSTRAINT `fk_fornecedores_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `nf_fornecedores`
--
ALTER TABLE `nf_fornecedores`
  ADD CONSTRAINT `fk2_nfFornecedores_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_nfFornecedores_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `obras`
--
ALTER TABLE `obras`
  ADD CONSTRAINT `fk2_obras_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_obras_contatoObras` FOREIGN KEY (`contato`) REFERENCES `contato_obras` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_obras_enderecoObras` FOREIGN KEY (`endereco`) REFERENCES `endereco_obras` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_obras_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `orcamentos`
--
ALTER TABLE `orcamentos`
  ADD CONSTRAINT `fk2_orcamentos_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_orcamentos_clientes` FOREIGN KEY (`cliente`) REFERENCES `clientes` (`id`),
  ADD CONSTRAINT `fk_orcamentos_contratos` FOREIGN KEY (`contrato`) REFERENCES `contratos` (`id`),
  ADD CONSTRAINT `fk_orcamentos_obras` FOREIGN KEY (`obra`) REFERENCES `obras` (`id`),
  ADD CONSTRAINT `fk_orcamentos_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk2_usuarios_usuarios` FOREIGN KEY (`updated_by`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `fk_usuarios_contatoUsuarios` FOREIGN KEY (`contato`) REFERENCES `contato_usuarios` (`id`),
  ADD CONSTRAINT `fk_usuarios_enderecoUsuarios` FOREIGN KEY (`endereco`) REFERENCES `endereco_usuarios` (`id`),
  ADD CONSTRAINT `fk_usuarios_usuarios` FOREIGN KEY (`created_by`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
