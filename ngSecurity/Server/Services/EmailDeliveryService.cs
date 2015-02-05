using System.Net;
using ngSecurity.Server.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace ngSecurity.Server.Services
{
    public class EmailDeliveryService : IEmailDeliveryService
    {

        public EmailDeliveryService(ICredential credential)
        {
            this.credential = credential;
            this.credentialsByHost = new CredentialsByHost(credential.UserName, credential.Password);
            this.smtpClient = new SmtpClient(credential.Host);
            this.smtpClient.Credentials = credentialsByHost;
        }

        public void Send(MailMessage mailMessage)
        {
            throw new NotImplementedException();
        }

        public class CredentialsByHost : ICredentialsByHost
        {
            private string _username;
            private string _password;

            public CredentialsByHost(string username, string password)
            {
                this._username = username;
                this._password = password;
            }

            public NetworkCredential GetCredential(string host, int port, string authenticationType)
            {
                if (string.IsNullOrEmpty(_username) || string.IsNullOrEmpty(_password))
                {
                    return CredentialCache.DefaultNetworkCredentials;
                }
                else
                {
                    return new NetworkCredential(_username, _password);
                }
            }
        }

        private ICredential credential { get; set; }
        
        private SmtpClient smtpClient { get; set; }
        
        private ICredentialsByHost credentialsByHost { get; set; }


    }
}