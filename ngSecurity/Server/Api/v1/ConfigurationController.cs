using ngSecurity.Server.Config;
using System.Web.Http;

namespace ngSecurity.Server.Api.v1
{
    public class ConfigurationController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(AppConfiguration.Config);
        }
    }
}
