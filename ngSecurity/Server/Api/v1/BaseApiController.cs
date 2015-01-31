using ngSecurity.Server.Services.Contracts;
using System.Web.Http;

namespace ngSecurity.Server.Api.v1
{
    public class BaseApiController : ApiController
    {
        protected readonly ISessionService sessionService;

        public BaseApiController(ISessionService sessionService)
        {
            this.sessionService = sessionService;
        }
    }
}
