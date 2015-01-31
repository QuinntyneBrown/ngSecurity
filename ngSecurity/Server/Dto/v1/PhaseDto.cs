using ngSecurity.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Dto.v1
{
    public class PhaseDto
    {
        public PhaseDto()
        {

        }

        public int? DevelopmentProgramId { get; set; }

        public string Name { get; set; }

        public string ShortName { get; set; }

        public string Slug { get; set; }
        
    }
}