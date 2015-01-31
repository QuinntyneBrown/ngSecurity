using ngSecurity.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Services
{
    public class BaseService
    {
        private readonly ICache cache;
        public BaseService(ICacheProvider cacheProvider)
        {
            this.cache = cacheProvider.GetCache();
        }

        protected TResp FromCacheOrService<TResp>(Func<TResp> action, string key)
        {
            var cached = cache.Get(key);

            if (cached == null)
            {
                cached = action();
                cache.Add(cached, key);
            }

            return (TResp)cached;
        }
    }
}