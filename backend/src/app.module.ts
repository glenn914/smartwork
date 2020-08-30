import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from 'libs/common/common.module';
import { UserinfoModule } from './userinfo/userinfo.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost/smartwork", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    CommonModule,
    DataModule,
    UserinfoModule,
    AuthModule,
   ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
