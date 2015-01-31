using ngSecurity.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Practices.ObjectBuilder2;

namespace ngSecurity.Server.Dto.v1
{
    public class DevelopmentProgramDto
    {
        public DevelopmentProgramDto()
        {

        }

        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<PhaseDto> Phases { get; set; }
    }
}