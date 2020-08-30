import { Controller, Get, Post,  Body, Param, Put, Delete,   UseGuards } from '@nestjs/common';
import { UserInfo } from 'libs/models/userinfo.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { RegisterDto } from '../../libs/dto/register.dto'
import { AuthGuard } from '@nestjs/passport';

@Controller('userinfo')
@ApiTags('用户管理')
export class UserinfoController {
  constructor(
    @InjectModel(UserInfo) private readonly userInfoModel: ModelType<UserInfo>
  ) { }

  @Get()
  @ApiOperation({ summary: '获取用户列表' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getList() {
    return await this.userInfoModel.find()
  }

  @Post()
  @ApiOperation({ summary: '新增用户' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async create(@Body() dto: RegisterDto) {
    await this.userInfoModel.create(dto)
  }

  @Get(':id')
  @ApiOperation({ summary: '获取具体用户' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async detail(@Param('id') id: string) {
    return await this.userInfoModel.findById(id)
  }

  @Put(':id')
  @ApiOperation({ summary: '修改具体用户' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() dto: RegisterDto) {
    return await this.userInfoModel.findByIdAndUpdate(id, dto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除具体用户' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    await this.userInfoModel.findByIdAndDelete(id)
  }
}
