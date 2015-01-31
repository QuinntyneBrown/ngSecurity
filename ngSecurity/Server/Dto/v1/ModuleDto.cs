using ngSecurity.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Dto.v1
{
    public class ModuleDto
    {
        public ModuleDto()
        {

        }

        public string Name { get; set; }
        public string Description { get; set; }
    }
}