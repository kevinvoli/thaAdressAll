import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import * as sendgridMail from '@sendgrid/mail'
import { ConfigService } from '@nestjs/config';


@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService
    
    ) {
    }
  async sendMail(email: string, name: string) {
      console.log("ici le mail gogo",email)
      const mail =  await this.mailerService.sendMail({
        to: email,
        from: this.configService.get('NOTIFICATION_EAMIL_FROM'),
        subject: 'un simple texte',
        text: 'bienvenue ici'
       })

      console.log("reponse du mail",mail);
      return mail
  }

  async confirmationMail(token:string, user:any ){

    console.log( token );
    
    const mail = await this.mailerService.sendMail({
      to:user.email,
      from:  this.configService.get('NOTIFICATION_EAMIL_FROM'),
      subject: "mail de confirmation ",
      text:`bienvenue Mr: ${user.name} veuille clique sur le lien ci après pour confirmé votre inscription  < a href="${this.configService.get('CONFIRMATION_URL')}${token} " > confirmé mon inscription < /a >.   `

    })
    return mail 
  }

  async 
}
