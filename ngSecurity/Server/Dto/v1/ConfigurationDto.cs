using ngSecurity.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Dto.v1
{
    public class ConfigurationDto
    {
        public ConfigurationDto()
        {

        }

        public string Name { get; set; }
        public string Theme { get; set; }
        public string ApiVersion { get; set; }
        public string Host { get; set; }
        public ModuleDto Default { get; set; }
        public ICollection<ModuleDto> Modules { get; set; } 
    }
}