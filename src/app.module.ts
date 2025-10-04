import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { validation } from '@/utils/validation';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'prod'
          ? './env/.env.prod'
          : process.env.NODE_ENV === 'dev'
            ? './env/.env.dev'
            : '.env',
      isGlobal: true,
      validationSchema: validation as Joi.ObjectSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
