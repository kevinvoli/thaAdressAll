import { ValidationPipe } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as dotenv from "dotenv";

dotenv.config();


import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:'*',
    credentials:true
  })
  // app.useGlobalPipes(new ValidationPipe({transform:false}))


  app.setGlobalPrefix('api')
  const config = new DocumentBuilder()
      .setTitle('theAddress')
      .setDescription('la documentation de l API')
      .setVersion('1.0')
      .addTag('theaddress')
      .build();
  
  const document = SwaggerModule.createDocument(app, config,{
    operationIdFactory:(controllerKey:string,methodkey:string)=>methodkey,
  });
  await SwaggerModule.setup('api/doc', app, document)  
  // await RedocModule.setup('docs', app, document, {});  
  

  
  await app.listen(3000);
}
bootstrap();