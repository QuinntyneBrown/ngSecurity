using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using ngSecurity.Server.Models;

namespace ngSecurity.Server.Data
{
    public class DbContext : System.Data.Entity.DbContext
    {
        public DbContext()
            : base(nameOrConnectionString: "ngSecurity")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Profile> Profiles { get; set; }

        public override int SaveChanges()
        {
            foreach (var entry in this.ChangeTracker.Entries()
            .Where(e => e.Entity is ILoggable &&
                ((e.State == EntityState.Added || (e.State == EntityState.Modified)))))
            {

                if (((ILoggable)entry.Entity).CreatedDate == null)
                {
                    ((ILoggable)entry.Entity).CreatedDate = DateTime.UtcNow;
                }

                ((ILoggable)entry.Entity).LastModifiedDate = DateTime.UtcNow;

            }

            return base.SaveChanges();
        }

        public int SaveChanges(User user)
        {
            foreach (var entry in this.ChangeTracker.Entries()
                        .Where(e => e.Entity is ILoggable &&
                            ((e.State == EntityState.Added || (e.State == EntityState.Modified)))))
            {

                if (((ILoggable)entry.Entity).CreatedDate == null)
                {
                    ((ILoggable)entry.Entity).CreatedDate = DateTime.UtcNow;
                }

                ((ILoggable)entry.Entity).LastModifiedDate = DateTime.UtcNow;

                if (user != null)
                {
                    ((ILoggable)entry.Entity).LastModifiedByUserId = user.Id;
                    ((ILoggable)entry.Entity).LastModifiedByUserName = user.Username;
                }
            }


            return base.SaveChanges();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().

                HasMany(u => u.Roles).
                WithMany(r => r.Users).

                Map(
                    m =>
                    {
                        m.MapLeftKey("User_Id");
                        m.MapRightKey("Role_Id");
                        m.ToTable("UserRoles");
                    });

            modelBuilder.Entity<User>().

                HasMany(u => u.Groups).
                WithMany(g => g.Users).

                Map(
                    m =>
                    {
                        m.MapLeftKey("User_Id");
                        m.MapRightKey("Group_Id");
                        m.ToTable("UserGroups");
                    });

            modelBuilder.Entity<Account>().
                HasMany(u => u.Profiles).
                WithOptional(p => p.Account);

            modelBuilder.Entity<User>().
                HasMany(u => u.Accounts).
                WithOptional(a => a.User);

        


        }
    }
}