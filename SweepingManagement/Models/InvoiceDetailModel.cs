using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SweepingManagement.Models
{
    public class InvoiceDetailModel : BasicModel
    {
        public string Code { get; set; }
        public virtual PlaceModel Place { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public bool IsExtraWork { get; set; }
    }
}