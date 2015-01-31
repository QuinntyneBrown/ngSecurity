using ngSecurity.Server.Data.Contracts;
using ngSecurity.Server.Dto.v1;
using ngSecurity.Server.Services.Contracts;
using System.Web.Http;

namespace ngSecurity.Server.Api.v1
{
    public class IdentityController : BaseApiController
    {
        protected readonly IIdentityService identityService;

        public IdentityController(ISessionService sessionService, IUow uow, IIdentityService identityService)
            :base(sessionService) 
        {
            this.identityService = identityService;
        }

        [HttpPost]
        public IHttpActionResult SignIn(SignInDto signInDto)
        {
            return Ok(identityService.SignIn(signInDto));
        }

        [HttpPost]
        public IHttpActionResult Register(RegistrationRequestDto dto)
        {
            return Ok(identityService.TryToRegister(dto));
        }
    }
}
