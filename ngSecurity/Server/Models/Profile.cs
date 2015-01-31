using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Models
{
    public class Profile: BaseEntity
    {
        public Profile()
        {
            
        }

        public int? AccountId { get; set; }

        public string Name { get; set; }

        public Account Account { get; set; }
    }
}