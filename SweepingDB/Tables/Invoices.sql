﻿CREATE TABLE [dbo].[Invoices]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	[Code] VARCHAR(50) NOT NULL,
	[CustomerId] INT NOT NULL FOREIGN KEY REFERENCES Customers(Id),
	[CompanyId] INT NOT NULL,
	[Active] BIT NOT NULL,
	[InvoiceDate] DATETIME NULL,
	[StartDate] DATETIME NULL,
	[EndDate] DATETIME NULL,
	[CreatedOn] DATETIME NOT NULL DEFAULT(GETDATE()),
	[EditedOn] DATETIME NOT NULL DEFAULT(GETDATE())
)
