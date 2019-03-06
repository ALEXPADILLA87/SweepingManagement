using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SweepingManagement.Entities
{
    public class InvoiceDetailEntity : BasicEntity
    {
        public string Code { get; set; }
        public virtual PlaceEntity Place { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public bool IsExtraWork { get; set; }
    }
}