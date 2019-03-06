using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SweepingManagement.Models
{
    public class InvoiceModel : BasicModel
    {
        public string Code { get; set; }
        public int CustomerId { get; set; }
        public int CompanyId { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public virtual List<InvoiceDetailModel> Details { get; set; }
    }
}