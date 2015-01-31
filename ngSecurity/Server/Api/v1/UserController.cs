using System.Data.Entity;
using ngSecurity.Server.Data.Contracts;
using ngSecurity.Server.Dto.v1;
using ngSecurity.Server.Models;
using ngSecurity.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace ngSecurity.Server.Api.v1
{
    public class UserController : BaseApiController
    {

        public UserController(ISecurityService securityService, ISessionService sessionService, IUow uow)
            : base(sessionService)
        {
            this.uow = uow;
            this.repository = uow.Users;
            this.securityService = securityService;
        }

        [Authorize]
        [HttpGet]
        public async Task<IHttpActionResult> GetCurrentUser()
        {
            var user = await sessionService.GetCurrentUser(User.Identity.Name);

            return Ok(user);
        }

        [HttpGet]
        [Authorize]
        public IHttpActionResult GetById(int id)
        {
            var result = new UserDto(this.repository.GetAll()
                .Include(x => x.Roles)
                .Include(x=>x.Groups)
                .Where(x => x.Id == id).Single());

            return Ok(result);
        }

        [HttpPost]
        [Authorize]
        public IHttpActionResult Add(UserDto dto)
        {
            securityService.TryToAddUser(dto);
            return Ok();
        }

        [HttpPut]
        [Authorize]
        public IHttpActionResult Update(UserDto dto)
        {
            securityService.TryToUpdateUser(dto);
            return Ok();
        }

        [HttpPost]
        [Authorize]
        public IHttpActionResult ChangePassword(ChangePasswordDto dto)
        {
            securityService.TryToChangePassword(dto);

            return Ok();
        }

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var userDtos = new List<UserDto>();

            foreach (var user in repository.GetAll()
                .Include(x=>x.Roles)
                .Include(x=>x.Groups)
                .Where(x => !x.IsDeleted))
            {
                userDtos.Add(new UserDto(user));
            }

            return Ok(userDtos);
        }

        [HttpDelete]
        [Authorize]
        public IHttpActionResult Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            repository.Update(entity);
            uow.SaveChanges();
            return Ok();
        }

        protected readonly IRepository<User> repository;

        protected readonly IUow uow;

        protected readonly ISecurityService securityService;
    }
}
