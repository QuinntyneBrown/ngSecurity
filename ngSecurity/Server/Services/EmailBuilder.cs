using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ngSecurity.Server.Services.Contracts;
using System.Net.Mail;
using System.Text;
using ngSecurity.Server.Models;
using System.Configuration;

namespace ngSecurity.Server.Services
{
    public class EmailBuilder: IEmailBuilder
    {

        public EmailBuilder(IEncryptionService encryptionService)
        {
            this.encryptionService = encryptionService;
        }

        public MailMessage BuildRegistrationConfirmationEmail(User user)
        {
            StringBuilder htmlBody = new StringBuilder();

            MailMessage mailMessage = new MailMessage();

            mailMessage.To.Add(new MailAddress(user.EmailAddress));

            mailMessage.Bcc.Add(new MailAddress(ConfigurationManager.AppSettings["Support-Email"]));

            mailMessage.From = new MailAddress("admin@ngSecurity.com", ConfigurationManager.AppSettings["Application-Name"]);

            mailMessage.Subject = string.Format("Welcome to {0} - Please verify your email address", ConfigurationManager.AppSettings["Application-Name"]);

            mailMessage.IsBodyHtml = true;

            htmlBody.Append(string.Format("<html><body><p>Thanks for registering with {0}.</p>", ConfigurationManager.AppSettings["Application-Name"]));

            htmlBody.Append(string.Format("<p>To activate your account, please verify your email by clicking this link:<br/>{0}/users/activation?encryptedstring={1} </p>", ConfigurationManager.AppSettings["Application-Domain"], encryptionService.EncryptUri(user.Username)));

            htmlBody.Append(string.Format("<p>If clicking on the link does not work, please open a web browser, and copy and paste the above link into your address bar. Your {0} account will be created and ready to use as soon as you verify your email.</p>", ConfigurationManager.AppSettings["Application-Name"]));

            htmlBody.Append(string.Format(@"<p>Thanks,<br/>{0}</p>", ConfigurationManager.AppSettings["Application-Name"]));

            htmlBody.Append("</body></html>");

            mailMessage.Body = htmlBody.ToString();

            return mailMessage;
        }
        private IEncryptionService encryptionService { get; set; }
    }
}