﻿using SweepingManagement.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Configuration;
using System.Linq;
using System.Web;

namespace SweepingManagement.DataLayer.Mapping
{
    public class InvoiceDetailsMap : EntityTypeConfiguration<InvoiceDetailEntity>
    {
        public InvoiceDetailsMap()
        {
            this.ToTable("InvoiceDetails");
        }
    }
}