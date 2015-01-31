using ngSecurity.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Web;

namespace ngSecurity.Server.Services
{
    public class MemoryCache : ICache
    {
        private static volatile MemoryCache current = null;
        ObjectCache cache = System.Runtime.Caching.MemoryCache.Default;

        public static MemoryCache Current
        {
            get
            {
                if (current == null)
                    current = new MemoryCache();
                return current;
            }
        }

        public T Get<T>(string key)
        {
            return (T)Get(key);
        }

        public object Get(string key)
        {
            return cache[key];
        }

        public void Add(object objectToCache, string key)
        {
            if (objectToCache == null)
            {
                cache.Remove(key);
            }
            else
            {
                cache[key] = objectToCache;
            }
        }

        public void Add<T>(object objectToCache, string key)
        {
            if (objectToCache == null)
            {
                cache.Remove(key);
            }
            else
            {
                cache[key] = objectToCache;
            }
        }

        public void Add<T>(object objectToCache, string key, double cacheDuration)
        {
            throw new NotImplementedException();
        }

        public void Remove(string key)
        {
            cache.Remove(key);
        }

        public void ClearAll()
        {
            throw new NotImplementedException();
        }

        public bool Exists(string key)
        {
            throw new NotImplementedException();
        }
    }
}