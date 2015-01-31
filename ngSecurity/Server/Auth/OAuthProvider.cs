using Microsoft.Owin.Security.OAuth;
using ngSecurity.Server.Dto.v1;
using ngSecurity.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Practices.Unity;

namespace ngSecurity.Server.Auth
{
    public class OAuthProvider : OAuthAuthorizationServerProvider
    {
        public OAuthProvider()
        {
            this.identityService = UnityConfig.GetContainer().Resolve<IIdentityService>();
        }

        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity("ngsecurity");
            var username = context.OwinContext.Get<string>("ngsecurity:username");
            identity.AddClaim(new Claim("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name", username));
            identity.AddClaim(new Claim("http://schemas.microsoft.com/ws/2008/06/identity/claims/role", "user"));
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