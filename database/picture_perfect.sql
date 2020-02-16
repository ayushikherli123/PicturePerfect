-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 04, 2018 at 10:33 PM
-- Server version: 5.7.19-0ubuntu0.17.04.1
-- PHP Version: 7.0.18-0ubuntu0.17.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `picture_perfect`
--

-- --------------------------------------------------------

--
-- Table structure for table `Booking_Detail`
--

CREATE TABLE `Booking_Detail` (
  `book_id` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `cust_name` varchar(50) NOT NULL,
  `cust_emailid` varchar(50) NOT NULL,
  `cust_contact` varchar(100) NOT NULL,
  `cust_address` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `pincode` varchar(50) NOT NULL,
  `booking_date` varchar(50) NOT NULL,
  `theme` varchar(50) NOT NULL,
  `service_amount` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `p_name` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'Booked'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Booking_Detail`
--

INSERT INTO `Booking_Detail` (`book_id`, `cust_id`, `cust_name`, `cust_emailid`, `cust_contact`, `cust_address`, `city`, `state`, `country`, `pincode`, `booking_date`, `theme`, `service_amount`, `p_id`, `p_name`, `status`) VALUES
(1, 1, 'dummy_name', 'dummy@gmail.com', '0000000000', 'dummy_address', 'abc', 'Kerala', 'India', '222222', '2020-01-31', 'Pre-Wedding', 25000, 13, 'Ayushi', 'Booked');

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `cid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(100) DEFAULT NULL,
  `password` varchar(200) NOT NULL,
  `confirm_password` varchar(200) NOT NULL,
  `houseno` varchar(50) DEFAULT NULL,
  `locality` varchar(50) DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `pincode` varchar(50) DEFAULT NULL,
  `col1` varchar(50) DEFAULT NULL,
  `col2` varchar(50) DEFAULT NULL,
  `col3` varchar(50) DEFAULT NULL,
  `col4` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Customer`
--

INSERT INTO `Customer` (`cid`, `name`, `email`, `mobile`, `password`, `confirm_password`, `houseno`, `locality`, `city`, `state`, `country`, `pincode`, `col1`, `col2`, `col3`, `col4`) VALUES
(1, 'dummy_name', 'dummy@gmail.com', '0000000000', '556bc45168acbad15de22e2290fd3083eca89ff6aa803d3d27b88a386e6b9734', '556bc45168acbad15de22e2290fd3083eca89ff6aa803d3d27b88a386e6b9734', 'dummy_address', 'abc', 'abc', 'Kerala', 'India', '222222', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedbackid` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `cust_name` varchar(50) NOT NULL,
  `p_id` int(11) NOT NULL,
  `p_name` varchar(50) NOT NULL,
  `ratings` varchar(50) NOT NULL,
  `feedback` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedbackid`, `cust_id`, `cust_name`, `p_id`, `p_name`, `ratings`, `feedback`) VALUES
(1, 1, 'dummy_name', 9, 'Tejaswini Gupta', '3', 'dummy feedback');

-- --------------------------------------------------------

--
-- Table structure for table `Photographer_Detail`
--

CREATE TABLE `Photographer_Detail` (
  `p_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `confirm_password` varchar(200) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `pincode` varchar(30) NOT NULL,
  `experience` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Photographer_Detail`
--

INSERT INTO `Photographer_Detail` (`p_id`, `name`, `email`, `mobile`, `password`, `confirm_password`, `address`, `city`, `state`, `country`, `pincode`, `experience`) VALUES
(1, 'dummy photograpger', 'pp@pp.com', '0000000000', 'a43236ac6dec1d3ac47658fe90de6b3616547f4292686b299d0a5786b2e22b81', 'a43236ac6dec1d3ac47658fe90de6b3616547f4292686b299d0a5786b2e22b81', 'dummy address', 'Pune', 'Maharashtra', 'India', '411029', 10);

-- --------------------------------------------------------

--
-- Table structure for table `Themes`
--

CREATE TABLE `Themes` (
  `theme_id` int(11) NOT NULL,
  `theme_name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `theme_img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Themes`
--

INSERT INTO `Themes` (`theme_id`, `theme_name`, `price`, `theme_img`) VALUES
(1, 'Pre-Wedding', 25000, 'prew.jpg'),
(2, 'Wedding', 60000, 'wedd.jpg'),
(3, 'Portfolio', 25000, 'portfolio.jpg'),
(4, 'Family Photography', 10000, 'family.jpg'),
(5, 'Inhouse Parties', 35000, 'party.jpg'),
(6, 'Wedding Fusion', 70000, 'weddingfusion.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `Themes_images`
--

CREATE TABLE `Themes_images` (
  `imgid` int(11) NOT NULL,
  `theme_name` varchar(50) NOT NULL,
  `image_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Themes_images`
--

INSERT INTO `Themes_images` (`imgid`, `theme_name`, `image_name`) VALUES
(1, 'Wedding Fusion', 'wf1.jpg'),
(2, 'Wedding Fusion', 'wf2.jpg'),
(3, 'Wedding Fusion', 'wf3.jpg'),
(4, 'Wedding Fusion', 'wf4.jpg'),
(5, 'Wedding Fusion', 'wf5.jpg'),
(6, 'Wedding Fusion', 'wf6.jpg'),
(7, 'Wedding Fusion', 'wf7.jpg'),
(11, 'Wedding', 'w1.jpg'),
(12, 'Wedding', 'w2.jpg'),
(13, 'Wedding', 'w3.jpg'),
(14, 'Wedding', 'w4.jpg'),
(15, 'Wedding', 'w5.jpg'),
(16, 'Wedding', 'w6.jpg'),
(18, 'Wedding', 'w8.jpg'),
(20, 'Pre-Wedding', 'pw1.jpg'),
(21, 'Pre-Wedding', 'pw2.jpg'),
(23, 'Pre-Wedding', 'pw4.jpg'),
(25, 'Pre-Wedding', 'pw6.jpg'),
(26, 'Pre-Wedding', 'pw7.jpg'),
(27, 'Pre-Wedding', 'pw8.jpg'),
(28, 'Pre-Wedding', 'pw9.jpg'),
(31, 'Portfolio', 'pf1.jpg'),
(32, 'Portfolio', 'pf2.jpg'),
(33, 'Portfolio', 'pf3.jpg'),
(34, 'Portfolio', 'pf4.jpg'),
(35, 'Portfolio', 'pf5.jpg'),
(38, 'Portfolio', 'pf8.jpg'),
(40, 'Inhouse Parties', 'p2.jpg'),
(41, 'Inhouse Parties', 'p3.jpg'),
(42, 'Inhouse Parties', 'p4.jpg'),
(43, 'Inhouse Parties', 'p5.jpg'),
(44, 'Inhouse Parties', 'p6.jpg'),
(46, 'Inhouse Parties', 'p8.jpg'),
(47, 'Family Photography', 'f1.jpg'),
(48, 'Family Photography', 'f2.jpg'),
(49, 'Family Photography', 'f3.jpg'),
(50, 'Family Photography', 'f4.jpg'),
(51, 'Family Photography', 'f5.jpg'),
(53, 'Family Photography', 'f7.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user_query`
--

CREATE TABLE `user_query` (
  `msgid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `message` varchar(100) NOT NULL,
  `col1` varchar(50) DEFAULT NULL,
  `col2` varchar(50) DEFAULT NULL,
  `col3` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_query`
--

INSERT INTO `user_query` (`msgid`, `name`, `email`, `phone`, `message`, `col1`, `col2`, `col3`) VALUES
(1, 'Ayushi jain', 'ayushi.kherli123@gmail.com', '0000000000', 'hi how are you', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Booking_Detail`
--
ALTER TABLE `Booking_Detail`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedbackid`);

--
-- Indexes for table `Photographer_Detail`
--
ALTER TABLE `Photographer_Detail`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `Themes`
--
ALTER TABLE `Themes`
  ADD PRIMARY KEY (`theme_id`);

--
-- Indexes for table `Themes_images`
--
ALTER TABLE `Themes_images`
  ADD PRIMARY KEY (`imgid`);

--
-- Indexes for table `user_query`
--
ALTER TABLE `user_query`
  ADD PRIMARY KEY (`msgid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Booking_Detail`
--
ALTER TABLE `Booking_Detail`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedbackid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `Photographer_Detail`
--
ALTER TABLE `Photographer_Detail`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `Themes`
--
ALTER TABLE `Themes`
  MODIFY `theme_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `Themes_images`
--
ALTER TABLE `Themes_images`
  MODIFY `imgid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
--
-- AUTO_INCREMENT for table `user_query`
--
ALTER TABLE `user_query`
  MODIFY `msgid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
