import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import {  } from '@nestjs-modules/mailer'
import { Module } from '@nestjs/common';
import { dirname, join } from 'path';
import { MailService } from './mail.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailController } from './mail.controller';

@Module({
  imports:[
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory:async (config: ConfigService) => ({
        transport: {
          host: config.get('EMAIL_HOST'),
          auth: {
            user: config.get('EMAIL_USER'),
            pass: config.get('EMAIL_PASSWORD'),
          },
        },
      }),
      inject: [ConfigService]
    }), ConfigModule.forRoot(),
    
],
controllers:[MailController],
  providers: [MailService, ConfigService]
})
export class MailModule {}
