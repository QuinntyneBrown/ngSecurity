using ngSecurity.Server.Data;
using ngSecurity.Server.Models;
using ngSecurity.Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Migrations
{
    public class RoleConfiguration
    {
        public static void Seed(DbContext context)
        {
            if (context.Roles.Count() < 1)
            {
                context.Roles.Add(new Role() { Name = "System" });

                context.SaveChanges();
            }
        }
    }
}