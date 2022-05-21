import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import {ExpressAdapter} from '@nestjs/platform-express';

const express = require("express");

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./cert/private.key'),
    cert: fs.readFileSync('./cert/certificate.crt'),
  };

  /*const app = await NestFactory.create(AppModule, {
    httpsOptions
  });
  //app.use(logger())
  app.enableCors();
  await app.listen(80);
}*/
  const server = express();
  const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
  );
  await app.init();

  http.createServer(server).listen(3000);
  https.createServer(httpsOptions, server).listen(443);

}
bootstrap();
