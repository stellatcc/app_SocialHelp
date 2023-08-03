-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.1.33-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para tcc
CREATE DATABASE IF NOT EXISTS `tcc` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tcc`;

-- Copiando estrutura para tabela tcc.anuncio
CREATE TABLE IF NOT EXISTS `anuncio` (
  `anuncio_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nome_anuciante` varchar(50) DEFAULT NULL,
  `descr` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`anuncio_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tcc.anuncio: ~0 rows (aproximadamente)
DELETE FROM `anuncio`;
/*!40000 ALTER TABLE `anuncio` DISABLE KEYS */;
INSERT INTO `anuncio` (`anuncio_codigo`, `nome_anuciante`, `descr`) VALUES
	(1, 'Vinicius', NULL);
/*!40000 ALTER TABLE `anuncio` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `nome` varchar(250) NOT NULL,
  `senha` varchar(50) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nome`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tcc.usuarios: ~0 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`nome`, `senha`, `email`, `numero`, `tipo`) VALUES
	('ViniciusF\r\n', '1234', 'v@v', NULL, 'voluntario');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc.usuario_ong
CREATE TABLE IF NOT EXISTS `usuario_ong` (
  `nome_ong` varchar(200) NOT NULL,
  `senha` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `contato` int(11) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `endereço` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`nome_ong`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tcc.usuario_ong: ~1 rows (aproximadamente)
DELETE FROM `usuario_ong`;
/*!40000 ALTER TABLE `usuario_ong` DISABLE KEYS */;
INSERT INTO `usuario_ong` (`nome_ong`, `senha`, `email`, `contato`, `tipo`, `endereço`) VALUES
	('ONG exemplo\r\n', 0, 'ong123@mail.com', 99954541, 'Comida', 'rua rei 123 bairro centro');
/*!40000 ALTER TABLE `usuario_ong` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
