using ngSecurity.Server.Models;

namespace ngSecurity.Server.Dto.v1
{
    public class RoleDto
    {
        public RoleDto()
        {
            
        }

        public RoleDto(Role role)
        {
            this.Id = role.Id;
            this.Name = role.Name;
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}