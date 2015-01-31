using System.Web.Http;
using ngSecurity.Server.Config;

namespace ngSecurity.Server.Api.v1
{
    public class AppConfigurationController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(AppConfiguration.Config);
        }
    }
}
