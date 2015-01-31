using System;
using ngSecurity.Server.Data.Contracts;
using ngSecurity.Server.Models;

namespace ngSecurity.Server.Data
{
    public class Uow: IUow
    {
        protected DbContext DbContext;

        protected IRepositoryProvider RepositoryProvider { get; set; } 

        public Uow(IRepositoryProvider repositoryProvider)
        {
            CreateDbContext();

            repositoryProvider.DbContext = DbContext;

            RepositoryProvider = repositoryProvider;
        }

        protected void CreateDbContext()
        {
            DbContext = new DbContext();
            DbContext.Configuration.ProxyCreationEnabled = false;
            DbContext.Configuration.LazyLoadingEnabled = false;
            DbContext.Configuration.ValidateOnSaveEnabled = false;
        }

        public IRepository<Account> Accounts { get { return GetStandardRepo<Account>(); } }        
        public IRepository<Group> Groups { get { return GetStandardRepo<Group>(); } }
        public IRepository<Profile> Profiles { get { return GetStandardRepo<Profile>(); } }
        public IRepository<Role> Roles { get { return GetStandardRepo<Role>(); } }
        public IRepository<Session> Sessions { get { return GetStandardRepo<Session>(); } }
        public IRepository<Tenant> Tenants { get { return GetStandardRepo<Tenant>(); } }        
        public IRepository<User> Users { get { return GetStandardRepo<User>(); } }

        public void SaveChanges()
        {
            this.DbContext.SaveChanges();
        }

        private IRepository<T> GetStandardRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepositoryForEntityType<T>();
        }

        private T GetRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepository<T>();
        }

        #region IDisposable

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (DbContext != null)
                {
                    DbContext.Dispose();
                }
            }
        }

        #endregion
    }
}