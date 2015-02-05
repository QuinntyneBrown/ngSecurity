using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Config
{
    public class SmtpConfiguration : ConfigurationSection
    {
        [ConfigurationProperty("username", IsRequired = true)]
        public string Username
        {
            get { return (string)this["username"]; }
            set { this["username"] = value; }
        }

        [ConfigurationProperty("password", IsRequired = true)]
        public string Password
        {
            get { return (string)this["password"]; }
            set { this["password"] = value; }
        }

        [ConfigurationProperty("host", IsRequired = true)]
        public string Host
        {
            get { return (string)this["host"]; }
            set { this["host"] = value; }
        }

        public static SmtpConfiguration Config
        {
            get { return ConfigurationManager.GetSection("smtpConfiguration") as SmtpConfiguration; }
        }
    }
}