using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Models
{
    public class Session: BaseEntity
    {
        public int? UserId { get; set; }
        public bool IsExpired { get; set; }
        public DateTime? Start { get; set; }
        public DateTime? Expires { get; set; }
    }
}