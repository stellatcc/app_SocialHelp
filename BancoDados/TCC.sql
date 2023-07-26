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

-- Copiando dados para a tabela tcc.anuncio: ~0 rows (aproximadamente)
DELETE FROM `anuncio`;
/*!40000 ALTER TABLE `anuncio` DISABLE KEYS */;
INSERT INTO `anuncio` (`anuncio_codigo`, `nome_anuciante`, `descr`) VALUES
	(1, 'Vinicius', NULL);
/*!40000 ALTER TABLE `anuncio` ENABLE KEYS */;

-- Copiando dados para a tabela tcc.usuarios: ~1 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`nome`, `senha`, `email`, `numero`, `tipo`, `id`) VALUES
	('ViniciusF\r\n', '1234', 'v@v', NULL, 'voluntario', 1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

-- Copiando dados para a tabela tcc.usuario_ong: ~1 rows (aproximadamente)
DELETE FROM `usuario_ong`;
/*!40000 ALTER TABLE `usuario_ong` DISABLE KEYS */;
INSERT INTO `usuario_ong` (`nome_ong`, `senha`, `email`, `contato`, `tipo`, `endereço`) VALUES
	('ONG exemplo\r\n', 0, 'ong123@mail.com', 99954541, 'Comida', 'rua rei 123 bairro centro');
/*!40000 ALTER TABLE `usuario_ong` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

