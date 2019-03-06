using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SweepingManagement.Models
{
    public class BasicModel
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "active")]
        public bool Active { get; set; }
        public DateTime EditedOn { get; set; }
    }
}