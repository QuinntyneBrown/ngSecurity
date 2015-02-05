using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Services.Contracts
{
    public interface ICredential
    {
        string UserName { get; }
        string Password { get; }
        string Host { get; }
    }
}