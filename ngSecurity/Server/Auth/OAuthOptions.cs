using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using ngSecurity.Server.Config;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ngSecurity.Server.Services.Contracts;

namespace ngSecurity.Server.Auth
{
    public class OAuthOptions: OAuthAuthorizationServerOptions
    {
        public OAuthOptions(IIdentityService identityService)
        {
            var config = AppConfiguration.Config;

            TokenEndpointPath = new PathString(config.TokenPath);
            AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(config.ExpirationMinutes);
            AccessTokenFormat = new JwtWriterFormat(this);
            Provider = new OAuthProvider(identityService);
            #if DEBUG
            AllowInsecureHttp = true;
            #endif            
        }

    }
}