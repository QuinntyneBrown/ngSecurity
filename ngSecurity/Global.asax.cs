using ngSecurity.Server.Services.Contracts;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Practices.Unity;
using System.Security.Principal;
using System.Threading;
using Newtonsoft.Json.Serialization;
using System.Data.SqlClient;
using System.Configuration;
using Microsoft.AspNet.SignalR;
using ngSecurity.Server.Data.Contracts;
using ngSecurity.Server.Data;


namespace ngSecurity
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            UnityConfig.RegisterComponents();
            GlobalConfiguration.Configure(WebApiStartup.Configure);            
        }

    }
}