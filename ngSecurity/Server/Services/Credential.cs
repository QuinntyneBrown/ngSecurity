using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ngSecurity.Server.Services.Contracts;
using ngSecurity.Server.Config;

namespace ngSecurity.Server.Services
{
    public class Credential : ICredential
    {
        public string UserName
        {
            get { return SmtpConfiguration.Config.Username; }
        }

        public string Password
        {
            get { return SmtpConfiguration.Config.Password; }
        }

        public string Host
        {
            get { return SmtpConfiguration.Config.Host; }
        }
    }
}