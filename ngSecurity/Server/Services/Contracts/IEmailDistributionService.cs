using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace ngSecurity.Server.Services.Contracts
{
    public interface IEmailDistributionService
    {
        void SetDistributionList(ref MailMessage mailMessage);
    }
}
