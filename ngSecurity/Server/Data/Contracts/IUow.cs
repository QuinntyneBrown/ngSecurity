using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ngSecurity.Server.Models;

namespace ngSecurity.Server.Data.Contracts
{
    public interface IUow
    {
        IRepository<User> Users { get; }
        IRepository<Group> Groups { get; }
        IRepository<Role> Roles { get; }
        IRepository<Session> Sessions { get; }
        IRepository<Tenant> Tenants { get; }
        IRepository<Account> Accounts { get; }
        IRepository<Profile> Profiles { get; } 
        void SaveChanges();
    }
}
