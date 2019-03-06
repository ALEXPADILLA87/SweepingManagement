using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SweepingManagement.Entities
{
    public class InvoiceEntity : BasicEntity
    {
        public string Code { get; set; }
        public int CustomerId { get; set; }
        public int CompanyId { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public virtual List<InvoiceDetailEntity> Details { get; set; }
    }
}