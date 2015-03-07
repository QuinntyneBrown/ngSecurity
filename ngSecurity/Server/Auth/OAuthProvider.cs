using Microsoft.Owin.Security.OAuth;
using ngSecurity.Server.Services.Contracts;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ngSecurity.Server.Auth
{
    public class OAuthProvider : OAuthAuthorizationServerProvider
    {
        public OAuthProvider(IIdentityService identityService)
        {
            this.identityService = identityService;
        }

        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity("ngsecurity");

            var username = context.OwinContext.Get<string>("ngsecurity:username");

            foreach (var claim in this.identityService.GetClaimsForUser(username))
            {
                identity.AddClaim(claim);
            }
            
            context.Validated(identity);
            return Task.FromResult(0);
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            try
            {
                var username = context.Parameters["username"];
                var password = context.Parameters["password"];

                if (identityService.AuthenticateUser(username, password))
                {
                    context.OwinContext.Set("ngsecurity:username", username);
                    context.Validated();
                }
                else
                {
                    context.SetError("Invalid credentials");
                    context.Rejected();
                }
            }
            catch
            {
                context.SetError("Server error");
                context.Rejected();
            }
            return Task.FromResult(0);
        }

        protected IIdentityService identityService { get; set; }
    }
}