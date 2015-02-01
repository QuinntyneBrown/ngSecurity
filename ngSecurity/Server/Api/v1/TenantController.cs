using ngSecurity.Server.Data.Contracts;
using ngSecurity.Server.Dto.v1;
using ngSecurity.Server.Models;
using ngSecurity.Server.Services.Contracts;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

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
