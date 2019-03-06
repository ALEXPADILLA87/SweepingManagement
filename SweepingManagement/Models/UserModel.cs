using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SweepingManagement.Models
{
    public class UserModel : BasicModel
    {
        [JsonProperty(PropertyName = "firstName")]
        public string FirstName { get; set; }
        [JsonProperty(PropertyName = "lastName")]
        public string LastName { get; set; }
        [JsonProperty(PropertyName = "email")]
        public string Email { get; set; }
        [JsonProperty(PropertyName = "password")]
        public string Password { get; set; }
        public string EmailPassword { get; set; }
        [JsonProperty(PropertyName = "company_name")]
        public string Company_Name { get; set; }
        [JsonProperty(PropertyName = "company_id")]
        public int Company_Id { get; set; }
    }
}