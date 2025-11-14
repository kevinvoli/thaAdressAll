import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommandeModule } from './commande/commande.module';
import { ArticleModule } from './article/article.module';
import { ModelModule } from './model/model.module';
import { AdminModule } from './admin/admin.module';
import * as Joi from '@hapi/joi'
import { MediaModule } from './media/media.module';
import { MediaService } from './media/media.service';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MYSQL_HOST:Joi.string().required(),
        MYSQL_PORT:Joi.number().required(),
        MYSQL_USER:Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_DATABASE:Joi.string().required(),
        UPLOADED_FILES_DESTINATION: Joi.string().required(),
      })
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    CommandeModule,
    ArticleModule,
    ModelModule,
    AdminModule,
    MediaModule,
    MailModule,
    
  ],
  controllers: [AppController],
  providers: [AppService,MediaService],
})
export class AppModule {}
