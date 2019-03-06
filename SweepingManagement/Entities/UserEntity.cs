using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SweepingManagement.Entities
{
    public class UserEntity : BasicEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        [ForeignKey("Company")]
        public int CompanyId { get; set; }
        public virtual CompanyEntity Company { get; set; }
    }
}