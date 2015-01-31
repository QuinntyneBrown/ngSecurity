using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ngSecurity.Server.Data.Contracts;
using ngSecurity.Server.Services.Contracts;
using ngSecurity.Server.Models;

namespace ngSecurity.Server.Api.v1
{
    public class TenantController : BaseApiController
    {
        public TenantController(ISessionService sessionService, IUow uow)
            : base(sessionService)
        {
            this.uow = uow;
            this.repository = uow.Tenants;
        }

        protected IRepository<Tenant> repository { get; set; }

        protected IUow uow { get; set; }

    }
}
