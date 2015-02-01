using Microsoft.Owin;
using Microsoft.Owin.Cors;
using ngSecurity.Server.Auth;
using Owin;

[assembly: OwinStartup(typeof(ngSecurity.Server.StartUp.OwinStartUp))]
namespace ngSecurity.Server.StartUp
{
    public class OwinStartUp
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseOAuthAuthorizationServer(new OAuthOptions());
            app.UseJwtBearerAuthentication(new JwtOptions());
            app.UseCors(CorsOptions.AllowAll);
            app.MapSignalR();
        }
    }
}