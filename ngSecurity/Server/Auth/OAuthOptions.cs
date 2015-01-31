using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using ngSecurity.Server.Config;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Auth
{
    public class OAuthOptions: OAuthAuthorizationServerOptions
    {
        public OAuthOptions()
        {
            var config = AppConfiguration.Config;

            TokenEndpointPath = new PathString(config.TokenPath);
            AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(config.ExpirationMinutes);
            AccessTokenFormat = new JwtWriterFormat(this);
            Provider = new OAuthProvider();
            #if DEBUG
            AllowInsecureHttp = true;
            #endif            
        }

    }
}