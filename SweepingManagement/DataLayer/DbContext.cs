using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Core.Objects;
using System.Linq;
using SweepingManagement.Entities;
using SweepingManagement.DataLayer.Mapping;

namespace SweepingManagement.DataLayer
{
    public class SweepingEntities : DbContext
    {
        public SweepingEntities()
            : base("name=SweepingConnectionString")
        {
        }

        public static SweepingEntities Create()
        {
            return new SweepingEntities();
        }

        public virtual DbSet<CompanyEntity> Companies { get; set; }
        public virtual DbSet<UserEntity> Users { get; set; }
        public virtual DbSet<CustomerEntity> Customers { get; set; }
        public virtual DbSet<InvoiceEntity> Invoices { get; set; }
        public virtual DbSet<InvoiceDetailEntity> InvoiceDetailEntities { get; set; }
        public virtual DbSet<PlaceEntity> Places { get; set; }

        protected override void OnModelCreating(DbModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Configurations.Add(new UserMap());
            builder.Configurations.Add(new CompanyMap());
            builder.Configurations.Add(new CustomerMap());
            builder.Configurations.Add(new InvoiceMap());
            builder.Configurations.Add(new InvoiceDetailsMap());
            builder.Configurations.Add(new PlaceMap());
        }

    }
}