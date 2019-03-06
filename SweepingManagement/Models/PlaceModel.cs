﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SweepingManagement.Models
{
    public class PlaceModel : AddressModel
    {
        public string Code { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public virtual CustomerModel Customer { get; set; }
        public decimal? Latitude { get; set; }
        public decimal? Longitude { get; set; }

    }
}