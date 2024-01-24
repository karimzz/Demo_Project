-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2024 at 12:51 AM
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
-- Database: `hosptest`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `age` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `verifyEmail` tinyint(1) NOT NULL DEFAULT 0,
  `gender` varchar(255) NOT NULL,
  `activation_token` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `age`, `name`, `verifyEmail`, `gender`, `activation_token`) VALUES
(9, 'faorukkhaled@gmail.com', 'breakingbad123', 0, '', 1, '', 0),
(10, 'karimmohamed@gmail.com', 'breakingbad123', 0, '', 1, '', 0),
(11, 'karimmohame@gmail.com', 'breakingbad123', 0, '', 1, '', 0),
(12, 'rabeamohame@gmail.com', 'breakingbad1dgd23', 0, '', 1, '', 0),
(13, 'rabeamohamefd@gmail.com', 'breakingbad1dgd23', 0, '', 1, '', 0),
(14, 'rabeamohamvfdfefd@gmail.com', '$2b$08$5VwPXmJ5m1stA8SxxHlOOewDI5AL7a8TDjtHVzZmhc3z2TGPxW.rO', 0, '', 1, '', 0),
(15, 'marwanKarwan@gmail.com', '$2b$08$brTFWwAL2Whu7JjG62srb.d19qTtWulqSpASq1hUtwf/fmPfIOcuq', 0, '', 1, '', 0),
(16, 'faorukzzzz@gmail.com', '$2b$08$gI9aYpxseHyPUVgTWhBnbe9r73wD5GP5qQ9wiyPBoZD0ReDBnVuua', 20, 'Farouk Khalid', 1, 'male', 0),
(17, 'faorukkhaled654@gmail.com', '$2b$08$LIR.CumynXh.T6PJMVNUHOJLUQnFpJjTmeLM0tM3MwnY7uMHzoicS', 20, 'Farouk Khalid', 1, 'male', 0),
(18, 'faorukkhaled12@gmail.com', '$2b$08$1FXaExEJPLm9fUBZCfwOcej3jTeTUlV1/fPU72XX7nEBSP28nMViG', 20, 'Farouk Khalid', 1, 'male', 0),
(19, 'faorukkhaled123@gmail.com', '$2b$08$l4Gb/qLohz0aarxfS1qxMezhg6Lz.asaqvoW3/9so2yIM6Pb7duvK', 20, 'Farouk Khalid', 1, 'male', 0),
(20, 'faorukkhaled1235@gmail.com', '$2b$08$DK1p19UAPsOwf.wej7au7OFTRDLCwI65yiIz/MMySkhIh.rirNgfS', 20, 'Farouk Khalid', 1, 'male', 0),
(21, 'faorukkhaled12835@gmail.com', '$2b$08$iYWrva0JVNyUUKwTJpvErOFVUu.OCDQ0UpTdDgwLH7yslckRKNgIi', 20, 'Farouk Khalid', 1, 'male', 0),
(22, 'faorukkhaled128535@gmail.com', '$2b$08$a.87BCLiU8Ka.Nl28QiXGebQAP3eK.vKx7iuu58373G1dLHis.EY.', 20, 'Farouk Khalid', 1, 'male', 0),
(23, 'faorukkhaled128978535@gmail.com', '$2b$08$qNnybXFXjTGGXeXqBYAOSuUw9zBMn9PCdmA05m.N9zmSPJOHxi2Pu', 20, 'Farouk Khalid', 1, 'male', 0),
(24, 'faorukkhaled12896578535@gmail.com', '$2b$08$6/R.n1/Dc4G6gGBjJvxUZeuYa4L73rvU1pMIamRMCRmZoXjKy/P6i', 20, 'Farouk Khalid', 1, 'male', 0),
(25, 'faorukkhaled128fs96578535@gmail.com', '$2b$08$ClUR07ebyQa.AkdAJD/Xd.pFSPQG3e1yBlYayVGAwQnwRwSYKxzvG', 18, 'Farouk Khalid', 1, 'male', 0),
(26, 'hanymustafa@gmail.com', '$2b$08$/jN0GGffUO9jHyvjNFcbwuEkvJbCcMq/U5GjDCXdKzJ.Qb6ISv9iS', 18, 'Farouk Khalid', 1, 'male', 0),
(27, 'hanymustaf2020a@gmail.com', '$2b$08$aDrTKK8Hfn8vPVUUaB1pqOH9T37IjMSvGOSYxA7FOLU3.kwX1Cdie', 18, 'Farouk Khalid', 1, 'male', 0),
(28, 'hanymustaf2024@gmail.com', '$2b$08$KqsTFrO09yePpkamjAixwOSaw94o6Q7rMqAl2rdePi1pPCtfw./UK', 18, 'Farouk Khalid', 1, 'male', 0),
(29, 'hanymustaf2024@fci.helwan.edu.eg', '$2b$08$LDmcGVcJ1U.tHHTIq6/yRuAEDapqUFWOaQ1HwCpREmv2rUNy7tTb.', 18, 'Farouk Khalid', 1, 'male', 0),
(30, 'hanymustaf2024@fci.helwan.eg', '$2b$08$pMFkF.sjQST6ekmKlKZnuuVYagUs9z8ypYXuH8tCkpFt2CmXepqbC', 18, 'Farouk Khalid', 1, 'male', 0),
(31, 'hanymustaf2024@helwan.eg', '$2b$08$THbgyj5/3jfgfK/6kiEjqOLbZqmEYhstOd85Vb8P3ldEQ7nBHIODq', 18, 'Farouk Khalid', 1, 'male', 0),
(78, 'Rabae_Mohamed_5006@fci.helwan.edu.eg', '$2b$08$fiBJBoMA9fjMf66.8PVgleubS2ZJd9KO6EStq8Ukw3O75KzXhEopq', 18, 'DODO', 0, 'male', 0),
(80, 'farouk_khaled_1397@fci.helwan.edu.eg', '$2b$08$1mUu5pBO.28vp1L4tHqX9OSb72mjg/Uuy4yy0BBwx3Jb9RLPVwhDS', 18, 'Farouk Khalid', 1, 'male', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
