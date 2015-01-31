using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ngSecurity.Server.Services.Contracts
{
    public interface ICache
    {
        T Get<T>(string key);

        object Get(string key);

        void Add(object objectToCache, string key);

        void Add<T>(object objectToCache, string key);

        void Add<T>(object objectToCache, string key, double cacheDuration);

        void Remove(string key);

        void ClearAll();

        bool Exists(string key);
    }
}
