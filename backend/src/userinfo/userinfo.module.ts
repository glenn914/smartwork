import { Module } from '@nestjs/common';
import { UserinfoController } from './userinfo.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserInfo } from 'libs/models/userinfo.model';

@Module({
  imports:[
    TypegooseModule.forFeature([UserInfo])
  ],
  controllers: [UserinfoController]
})
export class UserinfoModule {}
