import { ConflictException, Injectable, Logger, NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../user/dto/ligin-user.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Token } from './entities/token.entity';
import { PayloadInterface } from './interface/payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenExpiredError } from 'jsonwebtoken';
import { TokenService } from './jwt.service';
import { MailService } from '../mail/mail.service';
import { PanierController } from '../user/controllers/panier.controller';
import { PanierService } from '../user/services/panier.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService : TokenService,
    private mailService: MailService,
    private panier : PanierService

  ) {}


  async googleLogin(req){
    if(!req.user){
      return 'No user from google'
    }
    return {
      message: 'user info form Google ',
      user:req.user
    }
  }



  async create(createUserDto: CreateUserDto, idRole:number) {
    try {
    const token = await this.tokenService.confirmationToken(createUserDto)

      const user = await this.mailService.confirmationMail(token, {email:createUserDto.email, user:createUserDto.nom})
      console.log("le email",user);   
      return 'success'
    } catch (error) {
      throw new NotFoundException(error)
    }
   
  }

  async validateUser(authDto: CreateAuthDto) {
    try {
      console.log("ici le user0:",authDto);

      const user = await this.userService.auth(authDto.mail)
      console.log("ici le user1:",user);

    if (user && user.validatePassword(authDto.password,user.password)) {
      console.log("ici le user2:",user);
      
      return user
    }
    return null
    } catch (error) {
      throw new NotAcceptableException(error)
    }
    
  }

  async login(loginUserDto: LoginUserDto) {
    const payload = await this.userService.login(loginUserDto)
    
    if (!payload) {
        throw new UnauthorizedException('Invalid credentials')
    }
    const newToken = new Token()
    const accessToken =await this.tokenService.getAccessToken(payload)
    const refreshToken = await this.tokenService.getRefreshToken(payload)
    newToken.accessToken= accessToken
    newToken.refreshToken= refreshToken
    newToken.userId = payload.id
   const refresh= await this.tokenService.updateRefreshTokenInUser(newToken, payload.id)

    return refresh
  }
 

 

  async getUserIfRefreshTokenMatches(refreshToken: string, username: string) {
    const user = await this.userService.findByemail(username)
 
    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,"11"
      // user.hashedRefreshToken
    );
 
    if (isRefreshTokenMatching) {
        await this.tokenService.updateRefreshTokenInUser(null, username)
      return user;
    } else {
        throw new UnauthorizedException()
    }
}

async mailConfirmation(token:string){
  const user =  await this.tokenService.verifyToken(token)
  console.log("voici mon user : "+ user);
  await this.userService.create(user)
  console.log(Number.NEGATIVE_INFINITY);
  
  
  return user
}

 
}
