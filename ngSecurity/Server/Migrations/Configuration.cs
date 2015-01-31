using ngSecurity.Server.Migrations;

namespace ngSecurity.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ngSecurity.Server.Data.DbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ngSecurity.Server.Data.DbContext context)
        {
            context.Database.Delete();
            context.Database.CreateIfNotExists();
            RoleConfiguration.Seed(context);
            UserConfiguration.Seed(context);
        }
    }
}
