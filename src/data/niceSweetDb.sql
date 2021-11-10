-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: nice_sweetdb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nameCategory` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'golosinas');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nameProduct` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `subCategoryId` int(11) NOT NULL,
  `updated_at` date DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_e7ffebf7-251f-467a-884a-21ad62d6676e` (`subCategoryId`),
  CONSTRAINT `FK_e7ffebf7-251f-467a-884a-21ad62d6676e` FOREIGN KEY (`subCategoryId`) REFERENCES `subcategories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (28,'Chocolate Cofler Block',220,'Chocolate Cofler block con maní de 170 gr.',10,1,NULL,NULL),(29,'Alfajor MiniTorta Aguila',110,'Alfajor de dulce de leche y brownie 72gr.',15,2,NULL,NULL),(30,'Chocolate Aguila 100gr',125,'Chocolate en barra Aguila para taza 100 Gr.',20,1,NULL,NULL),(31,'Chocolate Arcor ',50,'Chocolate Arcor Negro 25gr',5,1,NULL,NULL),(32,'Chocolate Arcor Con Leche (Blanco)',50,'Chocolate Arcor blanco 25gr',5,1,NULL,NULL),(33,'Chocolate Cofler Aireado',220,'Chocolate Cofler Aireado con almendras 27gr',10,1,NULL,NULL),(34,'Alfajor Tita',48,'Alfajor TITA de 36gr',7,2,NULL,NULL),(35,'Alfajor B&N',95,'Alfajor B&N 70gr',5,2,NULL,NULL),(36,'Chocolate Bonafide',150,'Chocolate Bonafide 60% cacao 100gr',10,1,NULL,NULL),(37,'Bon O Bon',40,'Bombón relleno con maní 15gr',5,3,NULL,NULL),(38,'Chocolate Milka Leger',240,'Chocolate Arcor con maní de 25gr',15,1,NULL,NULL),(39,'Donuts Bonafide',120,'Donuts Bonafide 78gr',5,1,NULL,NULL),(40,'Dos Corazones',90,'Bombón Dos Corazones 26gr',5,3,NULL,NULL),(41,'Bombones Ferrero Rocher',640,'Bombones Ferrero Rocher 8unidades',17,3,NULL,NULL),(42,'Kinder Sorpresa',180,'Kinder Sorpresa 20gr',10,1,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_images`
--

DROP TABLE IF EXISTS `products_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_images_FK` (`productId`),
  CONSTRAINT `products_images_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_images`
--

LOCK TABLES `products_images` WRITE;
/*!40000 ALTER TABLE `products_images` DISABLE KEYS */;
INSERT INTO `products_images` VALUES (14,'1634411460578_img_.jpg',28),(15,'1634412064237_img_.jpg',29),(16,'1634412138515_img_.jpg',30),(17,'1634412193319_img_.jpg',31),(18,'1634412223965_img_.jpg',32),(19,'1634412489022_img_.jpg',33),(20,'1634412522748_img_.jpg',34),(21,'1634412631768_img_.jpg',35),(22,'1634412665347_img_.jpg',36),(23,'1634412711369_img_.jpg',37),(24,'1634412784882_img_.jpg',38),(25,'1634412833168_img_.jpg',39),(26,'1634412869637_img_.jpg',40),(27,'1634412901764_img_.jpg',41),(28,'1634413049563_img_.png',42);
/*!40000 ALTER TABLE `products_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nameSubcategory` varchar(50) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_bbcfe395-3714-4bd7-9608-5798bbf0f7f2` (`categoryId`),
  CONSTRAINT `FK_bbcfe395-3714-4bd7-9608-5798bbf0f7f2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'chocolates',1,NULL,NULL),(2,'alfajores',1,NULL,NULL),(3,'bombones',1,NULL,NULL);
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_product`
--

DROP TABLE IF EXISTS `user_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_product` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_68ad77de-2b41-4ecc-a94c-2c7b2dc59561` (`userId`),
  KEY `FK_61b57ac8-8644-4d5d-b225-ee80f015bc0e` (`productId`),
  CONSTRAINT `FK_61b57ac8-8644-4d5d-b225-ee80f015bc0e` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `FK_68ad77de-2b41-4ecc-a94c-2c7b2dc59561` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_product`
--

LOCK TABLES `user_product` WRITE;
/*!40000 ALTER TABLE `user_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(70) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `rol` varchar(20) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (12,'admin','nice','admin@gmail.com','$2a$10$gl0hUFccoKl0RX.V2CDP1eCjlLjDesw3LUHNz5llIVNYOn2eXu476',123456789,'1','default-image.png'),(14,'prueba','nice','prueba@gmail.com','$2a$10$IOrRnOQ2j/Knyt/hqWeum.TwHQCucdc4qkbelyte5ZVspj7XkrF4i',1234564,'0','1635375455020_img_.jpg'),(18,'ignacio','prueba','prueba3@gmail.com','$2a$10$GNSCAFhvV9nGrJpN2UMWiOyDcy1yWzjxqoi7ZoL9SKnWwjhVbV1ci',123456789,'0','default-image.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'nice_sweetdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-09 21:55:37
