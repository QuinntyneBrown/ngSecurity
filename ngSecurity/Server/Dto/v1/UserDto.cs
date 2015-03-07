using ngSecurity.Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace ngSecurity.Server.Dto.v1
{
    public class UserDto
    {
        public UserDto()
        {
            this.Roles = new HashSet<RoleDto>();
            this.Groups = new HashSet<GroupDto>();
        }

        public UserDto(User user)
        {
            if (user != null)
            {
                this.Id = user.Id;
                this.Username = user.Username;
                this.Firstname = user.Firstname;
                this.Lastname = user.Lastname;
                this.EmailAddress = user.EmailAddress;
                this.Roles = user.Roles.Where(x=> !x.IsDeleted).Select(x => new RoleDto(x)).ToList();
                this.Groups = user.Groups.Where(x => !x.IsDeleted).Select(x => new GroupDto(x)).ToList();
            }
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public ICollection<RoleDto> Roles { get; set; }
        public ICollection<GroupDto> Groups { get; set; }
    }
}