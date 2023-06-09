USE [master]
GO
/****** Object:  Database [Covid19]    Script Date: 5/15/2023 7:55:06 PM ******/
CREATE DATABASE [Covid19]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Covid19', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\Covid19.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Covid19_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\Covid19_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [Covid19] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Covid19].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Covid19] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Covid19] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Covid19] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Covid19] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Covid19] SET ARITHABORT OFF 
GO
ALTER DATABASE [Covid19] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Covid19] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Covid19] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Covid19] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Covid19] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Covid19] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Covid19] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Covid19] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Covid19] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Covid19] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Covid19] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Covid19] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Covid19] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Covid19] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Covid19] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Covid19] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Covid19] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Covid19] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Covid19] SET  MULTI_USER 
GO
ALTER DATABASE [Covid19] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Covid19] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Covid19] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Covid19] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Covid19] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Covid19] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Covid19] SET QUERY_STORE = ON
GO
ALTER DATABASE [Covid19] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [Covid19]
GO
/****** Object:  Table [dbo].[CoronaDetails]    Script Date: 5/15/2023 7:55:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CoronaDetails](
	[HMOmemberID] [nchar](9) NOT NULL,
	[DateOfVaccines1] [date] NULL,
	[VManufacturer1] [nchar](50) NULL,
	[DateOfVaccines2] [date] NULL,
	[VManufacturer2] [nchar](50) NULL,
	[DateOfVaccines3] [date] NULL,
	[VManufacturer3] [nchar](50) NULL,
	[DateOfVaccines4] [date] NULL,
	[VManufacturer4] [nchar](50) NULL,
	[TimeOfPositiveAnswer] [date] NULL,
	[RecoveryDate] [date] NULL,
 CONSTRAINT [PK_CoronaDetails696] PRIMARY KEY CLUSTERED 
(
	[HMOmemberID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HMOmember]    Script Date: 5/15/2023 7:55:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HMOmember](
	[ID] [nchar](9) NOT NULL,
	[LastName] [nvarchar](50) NULL,
	[FirstName] [nvarchar](50) NULL,
	[BurnDate] [date] NULL,
	[City] [nvarchar](50) NULL,
	[Street] [nvarchar](50) NULL,
	[HouseNumber] [int] NULL,
	[FoneNumber] [nchar](9) NULL,
	[MobileFone] [nchar](10) NULL,
 CONSTRAINT [PK_HMOmember41] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[CoronaDetails] ([HMOmemberID], [DateOfVaccines1], [VManufacturer1], [DateOfVaccines2], [VManufacturer2], [DateOfVaccines3], [VManufacturer3], [DateOfVaccines4], [VManufacturer4], [TimeOfPositiveAnswer], [RecoveryDate]) VALUES (N'017885351', CAST(N'2023-05-10' AS Date), N'p-hiser                                           ', CAST(N'2023-05-10' AS Date), N'Buss1                                             ', CAST(N'2023-05-11' AS Date), N'Booso6                                            ', NULL, NULL, CAST(N'2019-09-10' AS Date), CAST(N'2019-09-24' AS Date))
INSERT [dbo].[CoronaDetails] ([HMOmemberID], [DateOfVaccines1], [VManufacturer1], [DateOfVaccines2], [VManufacturer2], [DateOfVaccines3], [VManufacturer3], [DateOfVaccines4], [VManufacturer4], [TimeOfPositiveAnswer], [RecoveryDate]) VALUES (N'054267778', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[CoronaDetails] ([HMOmemberID], [DateOfVaccines1], [VManufacturer1], [DateOfVaccines2], [VManufacturer2], [DateOfVaccines3], [VManufacturer3], [DateOfVaccines4], [VManufacturer4], [TimeOfPositiveAnswer], [RecoveryDate]) VALUES (N'315177402', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[CoronaDetails] ([HMOmemberID], [DateOfVaccines1], [VManufacturer1], [DateOfVaccines2], [VManufacturer2], [DateOfVaccines3], [VManufacturer3], [DateOfVaccines4], [VManufacturer4], [TimeOfPositiveAnswer], [RecoveryDate]) VALUES (N'325565273', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, CAST(N'2023-05-03' AS Date), CAST(N'2023-05-17' AS Date))
GO
INSERT [dbo].[HMOmember] ([ID], [LastName], [FirstName], [BurnDate], [City], [Street], [HouseNumber], [FoneNumber], [MobileFone]) VALUES (N'017885351', N'barzilay', N'yoav', CAST(N'1996-10-04' AS Date), N'tel aviv', N'ahgana', 16, N'046753974', N'0507618995')
INSERT [dbo].[HMOmember] ([ID], [LastName], [FirstName], [BurnDate], [City], [Street], [HouseNumber], [FoneNumber], [MobileFone]) VALUES (N'054267778', N'levi', N'noa', CAST(N'2020-12-09' AS Date), N'ranana', N'narkis', 16, N'046488423', N'0523351418')
INSERT [dbo].[HMOmember] ([ID], [LastName], [FirstName], [BurnDate], [City], [Street], [HouseNumber], [FoneNumber], [MobileFone]) VALUES (N'315177402', NULL, NULL, CAST(N'0001-01-01' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[HMOmember] ([ID], [LastName], [FirstName], [BurnDate], [City], [Street], [HouseNumber], [FoneNumber], [MobileFone]) VALUES (N'325565273', N'wiener', N'tehila', CAST(N'2003-05-14' AS Date), N'haifa', N'hcalanit', 36, N'043625973', N'0583299325')
GO
USE [master]
GO
ALTER DATABASE [Covid19] SET  READ_WRITE 
GO
