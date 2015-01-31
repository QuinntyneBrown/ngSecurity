using ngSecurity.Server.Dto.v1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngSecurity.Server.Services.Contracts
{
    public interface IIdentityService
    {
        TokenDto SignIn(SignInDto signInDto);

        TokenDto TryToRegister(RegistrationRequestDto registrationRequestDto);

        bool AuthenticateUser(string username, string password);
    }
}