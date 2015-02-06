using System.Diagnostics;
using System.Net;
using Microsoft.AspNet.SignalR;
using Microsoft.Practices.Unity;
using System.Web.Http;
using ngSecurity.Server.Data;
using ngSecurity.Server.Data.Contracts;
using ngSecurity.Server.Hubs;
using Unity.WebApi;
using ngSecurity.Server.Services.Contracts;
using ngSecurity.Server.Services;
using Microsoft.AspNet.SignalR.Hubs;

namespace ngSecurity
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = GetContainer();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);

        }

        public static UnityContainer GetContainer()
        {
            var container = new UnityContainer();
            container.RegisterType<IUow, Uow>();
            container.RegisterType<IRepositoryProvider, RepositoryProvider>();
            container.RegisterType<ISessionService, SessionService>();
            container.RegisterType<IIdentityService, IdentityService>();
            container.RegisterType<IEncryptionService, EncryptionService>();
            container.RegisterType<ICacheProvider, CacheProvider>();
            container.RegisterType<ISecurityService, SecurityService>();
            container.RegisterType<IEmailBuilder, EmailBuilder>();
            container.RegisterType<IEmailService, EmailService>();
            container.RegisterType<ICredential, Credential>();
            container.RegisterType<IEmailDeliveryService, EmailDeliveryService>();
            container.RegisterType<IEmailDistributionService, EmailDistributionService>();

            return container;
        }
    }
}