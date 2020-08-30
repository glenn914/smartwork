import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiProperty,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { UserInfo } from  'libs/models/userinfo.model';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from '../../libs/dto/login.dto'
import { RegisterDto } from '../../libs/dto/register.dto'
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
@ApiTags('登录注册')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @InjectModel(UserInfo) private userModel: ReturnModelType<typeof UserInfo>,
  ) {}

  @Post('register')
  @ApiOperation({ summary: '注册' })
  async register(@Body() dto: RegisterDto) {
    const { username, password, usertype } = dto;
    const user = await this.userModel.create({
      username,
      password,
      usertype,
    });
    return user;
  }

  @Post('login')
  @ApiOperation({ summary: '登录' })
  @UseGuards(AuthGuard('local'))
  async login(@Body() dto: LoginDto, @CurrentUser() user: DocumentType<UserInfo>) {
    return {
      token: this.jwtService.sign(String(user._id)),
    };
  }

  @Get('user')
  @ApiOperation({ summary: '获取个人信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async user(@CurrentUser() user: DocumentType<UserInfo>) {
    return user;
  }
}
