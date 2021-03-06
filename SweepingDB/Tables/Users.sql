﻿CREATE TABLE [dbo].[Users]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	[FirstName] VARCHAR(50) NOT NULL,
	[LastName] VARCHAR(50) NOT NULL,
	[Email] NVARCHAR(50),
	[Password] NVARCHAR(50),
	[EmailPassword] NVARCHAR(50),
	[CompanyId] INT NOT NULL FOREIGN KEY REFERENCES Companies(Id),
	[Active] BIT NOT NULL,
	[CreatedOn] DATETIME NOT NULL DEFAULT(GETDATE()),
	[EditedOn] DATETIME NOT NULL DEFAULT(GETDATE())
)
GO