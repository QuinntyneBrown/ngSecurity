using ngSecurity.Server.Data.Contracts;
using ngSecurity.Server.Models;
using ngSecurity.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ngSecurity.Server.Api.v1
{
    public class RoleController : BaseApiController
    {
        public RoleController(ISessionService sessionService, IUow uow)
            : base(sessionService)
        {
            this.uow = uow;
            this.repository = uow.Roles;
        }

        [HttpPost]
        [Authorize]
        public IHttpActionResult Add(Role entity)
        {
            this.repository.Add(entity);
            this.uow.SaveChanges();
            return Ok(entity);
        }

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            return Ok(repository.GetAll().Where(x=> !x.IsDeleted));
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

        protected readonly IRepository<Role> repository;

        protected readonly IUow uow;
    }
}
