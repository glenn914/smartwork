import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { InjectModel } from 'nestjs-typegoose';
import { UserInfo } from  'libs/models/userinfo.model';
import { ReturnModelType } from '@typegoose/typegoose';


export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(UserInfo) private userModel: ReturnModelType<typeof UserInfo>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET
    } as StrategyOptions);
  }

  async validate(id) {
    return await this.userModel.findById(id)
  }
}
