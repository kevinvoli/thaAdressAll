import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { Token } from './entities/token.entity';
import { JwtService } from '@nestjs/jwt';
import { PayloadInterface } from './interface/payload.interface';
import * as bcrypt from 'bcrypt';
import { TokenExpiredError } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService{
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
    // private jwtService:JwtService,
    // private configService: ConfigService,

  ){}
  
    
  async confirmationToken(data){
    const confirmation = await this.jwtService.sign(data, {
      secret: this.configService.get('SECRET'),
      expiresIn: 360
  })
  
  return confirmation
  }

  async getAccessToken(payload: PayloadInterface) {
    const accessToken = await this.jwtService.sign(payload, {
        secret: this.configService.get('SECRET'),
        expiresIn: 360
    })
    return accessToken
  }

  async getRefreshToken(payload: PayloadInterface) {
    const refreshToken = await this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: 3600
    })
    return refreshToken
  }

  async updateRefreshTokenInUser(refreshToken: Partial<Token>, userId) {

    
    const refresh= await this.tokenRepository.findOne({
      where:{userId:userId}
    })
    console.log("szzi lelelell:0",refresh.accessToken);

    if (refresh) {
        refreshToken.refreshToken = await bcrypt.hash(refreshToken.refreshToken, 10)
        const up= await this.tokenRepository.update(refresh.id,refreshToken)
    return  refresh.accessToken
    }
    return false
    
  }

  async getNewAccessAndRefreshToken(payload: PayloadInterface) {
    const refreshToken = await this.getRefreshToken(payload)
    let data = {
      refreshToken:refreshToken
    }
    await this.updateRefreshTokenInUser(data, payload.id)
    return {
        accessToken: await this.getAccessToken(payload),
        refreshToken: refreshToken
    }
  }

  async verifyToken(token){
    try {
      const confirmation= await this.jwtService.verify(token,{
        secret: this.configService.get('SECRET'),
      })
      console.log("la confirmation:"+ confirmation );
      return confirmation
    } catch (error) {
      throw  new Error(error)
    }
  }

 
}