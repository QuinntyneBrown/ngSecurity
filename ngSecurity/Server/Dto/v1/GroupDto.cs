using ngSecurity.Server.Models;

namespace ngSecurity.Server.Dto.v1
{
    public class GroupDto
    {
        public GroupDto()
        {
            
        }

        public GroupDto(Group group)
        {
            this.Id = group.Id;
            this.Name = group.Name;
        }

        public int Id { get; set; }

        public string Name { get; set; }
    }
}