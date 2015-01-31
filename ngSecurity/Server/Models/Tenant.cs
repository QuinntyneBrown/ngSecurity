using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Models
{
    public class Tenant
    {
        public Tenant()
        {
            
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<User> Users { get; set; } 
    }
}