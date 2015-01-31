using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ngSecurity.Server.Services.Contracts
{
    public interface ICacheProvider
    {
        ICache GetCache();
    }
}
