import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as fs from "fs";

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./cert/private.key.pem'),
    cert: fs.readFileSync('./cert/certificate.crt.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions
  });
  //app.use(logger())
  app.enableCors();
  await app.listen(80);
}

bootstrap();
