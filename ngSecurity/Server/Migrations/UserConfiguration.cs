using ngSecurity.Server.Data;
using ngSecurity.Server.Models;
using ngSecurity.Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Migrations
{
    public class UserConfiguration
    {
        public static void Seed(DbContext context)
        {
            if (context.Users.Count() < 1)
            {
                var encryptionService = new EncryptionService();

                var password = encryptionService.TransformPassword("password");

                context.Users.Add(new User() { Firstname = "System", Lastname = "System", Username = "System", Password = password, IsActive = true, Roles = context.Roles.Where(x => x.Name == "System").ToList() });

                context.SaveChanges();
            }
        }
    }
}