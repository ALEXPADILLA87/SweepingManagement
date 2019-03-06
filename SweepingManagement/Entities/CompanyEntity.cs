using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SweepingManagement.Entities
{
    public class CompanyEntity : AddressEntity
    {
        public virtual IList<UserEntity> Users { get; set; }
    }
}