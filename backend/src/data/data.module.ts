import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { TypegooseModule } from 'nestjs-typegoose'
import { Data } from '../../libs/models/data.model';

@Module({
  imports:[
    TypegooseModule.forFeature([Data])   //这边就生成了模型
  ],
  controllers: [DataController]
})
export class DataModule {}
