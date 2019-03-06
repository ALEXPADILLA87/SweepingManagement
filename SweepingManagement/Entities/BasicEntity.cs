using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SweepingManagement.Entities
{
    public class BasicEntity
    {
        public int Id { get; set; }
        public bool Active { get; set; }
        public DateTime EditedOn { get; set; }
    }
}