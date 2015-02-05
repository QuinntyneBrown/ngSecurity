using ngSecurity.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace ngSecurity.Server.Services.Contracts
{
    public interface IEmailBuilder
    {
        MailMessage BuildRegistrationConfirmationEmail(User user);
    }
}