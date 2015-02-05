using System.Data.Entity;
using System.Linq;
using ngSecurity.Server.Data.Contracts;
using ngSecurity.Server.Dto.v1;
using ngSecurity.Server.Services.Contracts;
using ngSecurity.Server.Models;


namespace ngSecurity.Server.Services
{
    public class SecurityService : BaseService, ISecurityService
    {
        protected readonly IUow uow;
        protected readonly IEncryptionService encryptionService;
        protected readonly ICache cache;

        public SecurityService(IEncryptionService encryptionService, IUow uow, ICacheProvider cacheProvider)
            :base(cacheProvider)
        {
            this.uow = uow;
            this.encryptionService = encryptionService;
        }

        public void TryToUpdateUser(UserDto dto)
        {
            var user = uow.Users.GetAll()
                .Include(x => x.Roles)
                .Include(x => x.Groups)
                .Where(x => x.Id == dto.Id)
                .Single();

            Map(user, dto);

            uow.Users.Update(user);
            uow.SaveChanges();
        }

        public void TryToAddUser(UserDto dto)
        {
            var user = Map(new User(), dto);
            user.Password = encryptionService.TransformPassword(dto.Password);
            uow.Users.Add(user);
            uow.SaveChanges();
           
        }

        public void TryToChangePassword(ChangePasswordDto dto)
        {
            var user = uow.Users.GetById(dto.Id);

            if (user.Password == this.encryptionService.TransformPassword(dto.OldPassword))
            {
                user.Password = this.encryptionService.TransformPassword(dto.NewPassword);
            }

            uow.SaveChanges();
        }

        private User Map(User user, UserDto dto)
        {
            user.Username = dto.Username;
            user.Firstname = dto.Firstname;
            user.Lastname = dto.Lastname;
            user.EmailAddress = dto.EmailAddress;

            user.Roles.Clear();
            user.Groups.Clear();

            // TODO: Implementation Activation workflow
            user.IsActive = true;

            foreach (var role in dto.Roles)
            {
                user.Roles.Add(uow.Roles.GetById(role.Id));
            }

            foreach (var group in dto.Groups)
            {
                user.Groups.Add(uow.Groups.GetById(group.Id));
            }

            return user;
        }
    }
}