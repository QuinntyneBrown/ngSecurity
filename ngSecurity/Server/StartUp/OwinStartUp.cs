using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using ngSecurity.Server.Auth;
using Owin;
using Unity.WebApi;
using Microsoft.Practices.Unity;
using ngSecurity.Server.Services.Contracts;

[assembly: OwinStartup(typeof(ngSecurity.Server.StartUp.OwinStartUp))]
namespace ngSecurity.Server.StartUp
{
    public class OwinStartUp
    {
        public void Configuration(IAppBuilder app)
        {
            var identityService = UnityConfig.GetContainer().Resolve<IIdentityService>();
            app.UseOAuthAuthorizationServer(new OAuthOptions(identityService));
            app.UseJwtBearerAuthentication(new JwtOptions());
            app.UseCors(CorsOptions.AllowAll);
            app.MapSignalR();
        }
    }
}