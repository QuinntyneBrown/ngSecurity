using ngSecurity.Server.Data.Contracts;
using ngSecurity.Server.Dto.v1;
using ngSecurity.Server.Models;
using ngSecurity.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace ngSecurity.Server.Services
{
    public class SessionService : BaseService, ISessionService
    {
        protected readonly IUow uow;
        protected readonly IEncryptionService encryptionService;
        protected readonly ICache cache;

        public SessionService(IEncryptionService encryptionService, IUow uow, ICacheProvider cacheProvider)
            :base(cacheProvider)
        {
            this.uow = uow;
            this.encryptionService = encryptionService;
        }

        public TokenDto StartSession(int id)
        {
            var session = new Session()
            {
                Start = DateTime.Now,
                Expires = DateTime.Now.AddMinutes(30),
                UserId = id
            };

            uow.Sessions.Add(session);

            uow.SaveChanges();

            return new TokenDto()
                {
                    Token = encryptionService.EncryptString(session.Id.ToString())
                };
        }

        public TokenDto StartSession(User user)
        {
            return StartSession(user.Id);
        }

        public void EndSession(int sessionId)
        {
            var session = uow.Sessions.GetById(sessionId);
            session.IsExpired = true;
            uow.SaveChanges();
        }

        public Session GetSession(int sessionId)
        {
            return FromCacheOrService<Session>(() => uow.Sessions.GetById(sessionId), string.Format("Session Id: {0}", sessionId));
        }

        public Session GetSession(User user)
        {
            return uow.Sessions.GetAll().Where(x => x.UserId == user.Id).FirstOrDefault();
        }


        public UserDto GetCurrentUser(int sessionId)
        {
            var session = GetSession(sessionId);

            var userId = (int)session.UserId;

            var result =  new UserDto(FromCacheOrService<User>(() => uow.Users.GetAll().Where(x => x.Id == userId).Include(x => x.Roles).FirstOrDefault(), string.Format("User By Id: {0}", userId)));

            return result;
        }

        public async Task<UserDto> GetCurrentUser(string username)
        {
            var result = new UserDto();

            await System.Threading.Tasks.Task.Factory.StartNew(() =>
            {
                result = new UserDto(FromCacheOrService<User>(() => uow.Users.GetAll().Where(x => x.Username == username).Include(x => x.Roles).FirstOrDefault(), string.Format("User: {0}", username)));

            });

            return result;
        }

        public void UpdateSession(Session session)
        {
            throw new NotImplementedException();
        }
    }
}