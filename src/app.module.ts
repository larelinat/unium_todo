import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TasksModule} from './tasks/tasks.module';
import {LoggerMiddleware} from "./middlewares/logger/logger.middleware";
import {TasksController} from "./tasks/tasks.controller";
import {MongooseModule} from '@nestjs/mongoose';
import {WellKnownController} from './well-known/well-known.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/unium-tasks', {useNewUrlParser: true}),
    TasksModule],
  controllers: [AppController, WellKnownController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(LoggerMiddleware)
        .forRoutes(TasksController)
  }
}
