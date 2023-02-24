<%@ page language="C#" %>
<%@ Import Namespace="System.Net.Mail" %>
<%@ Import Namespace="System.Net" %>
<%@ Import Namespace="System.Text" %>

<%
MailMessage objEmail = new MailMessage();
objEmail.From = new MailAddress("geral@familyvet.pt");
objEmail.To.Add("familyvet2016@gmail.com");
objEmail.Priority = MailPriority.Normal;
objEmail.IsBodyHtml = true;
objEmail.Subject = "Contacto Website";
objEmail.Body += "<br/> Email: " + HttpContext.Current.Request["email"];
objEmail.Body += "<br/> Mensagem: " + HttpContext.Current.Request["message"];
SmtpClient objSmtp = new SmtpClient();
objSmtp.Host = "localhost";
objSmtp.Credentials = new NetworkCredential("geral@familyvet.pt", "pwdFamilyVet1");
objSmtp.Send(objEmail);
%>