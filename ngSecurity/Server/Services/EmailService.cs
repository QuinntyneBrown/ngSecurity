using ngSecurity.Server.Services.Contracts;
using System;
using System.Net.Mail;


namespace ngSecurity.Server.Services
{
    public class EmailService: IEmailService
    {

        public EmailService(IEmailBuilder emailBuilder, IEmailDistributionService emailDistributionService, IEmailDeliveryService emailDeliveryService)
        {
            this.emailBuilder = emailBuilder;
            this.emailDistributionService = emailDistributionService;
            this.emailDeliveryService = emailDeliveryService;
        }

        public void SendRegistrationConfirmationEmail(Models.User user)
        {
            MailMessage mailMessage = emailBuilder.BuildRegistrationConfirmationEmail(user);
            emailDistributionService.SetDistributionList(ref mailMessage);
            emailDeliveryService.Send(mailMessage);
        }

        protected IEmailBuilder emailBuilder { get; set; }

        protected IEmailDistributionService emailDistributionService { get; set; }

        protected IEmailDeliveryService emailDeliveryService { get; set; }
    }
}