﻿namespace ngSecurity.Server.Dto.v1
{
    public class ChangePasswordDto
    {
        public ChangePasswordDto()
        {
                
        }

        public int Id { get; set; }

        public string OldPassword { get; set; }

        public string NewPassword { get; set; }

        public string ConfirmPassword { get; set; }
    }
}