import { Controller,
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  Logger, 
  UseGuards, 
  Request, 
  UseInterceptors, 
  ClassSerializerInterceptor, 
  HttpStatus, 
  Req, 
  Res, 
  Options 
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from 'src/user/dto/ligin-user.dto';
import { ApiBadRequestResponse, 
  ApiBody, 
  ApiConflictResponse, 
  ApiCreatedResponse, 
  ApiTags, 
  ApiUnauthorizedResponse 
} from '@nestjs/swagger';
import { User } from '../user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { PickType } from '@nestjs/mapped-types';
import { Response } from 'express';
import { Token } from './entities/token.entity';

@ApiTags('auth')
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}



  @Get('register')
  @ApiCreatedResponse({type:User, description:'enregitrement du user'})
  @ApiBadRequestResponse({description:'les data sont invalide'})
  @ApiConflictResponse({description:'address email existe deja'})
  async getcreateUser(){
    return 
  }



  @Post('register')
  @ApiCreatedResponse({type:User, description:'enregistrement du user'})
  @ApiBadRequestResponse({description:'les data sont invalide'})
  @ApiConflictResponse({description:'address email existe deja'})
  async register(@Body() createAuthDto: CreateUserDto, idRole:number) {
    const users= await this.authService.create(createAuthDto, idRole);
    return users
  }

  // @UseGuards(AuthGuard)
  @Post('login')
  @ApiBody({type:LoginUserDto})
  @ApiCreatedResponse({type:PickType(User,['id','email','roles']),description:'utilisateur concter'})
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  async login(@Body() loginUserDto: LoginUserDto , 
  @Request() req, 
  @Res({passthrough:true})response: Response) {
    const token= await this.authService.login(loginUserDto)
    response.cookie('jwt',token,{httpOnly:true})

    return {
      message: 'success'
    }
    
  }




  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    console.log("req facebook simple:");

    return HttpStatus.OK;
  }

  @Get("/facebook/redirect")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req): Promise<any> {
    console.log("req facebook:",req);
    
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  googleAuth(@Req()req) {

    console.log('google',req);
    
    // return this.usersService.findAll();
  }

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req()req) {

    return this.authService.googleLogin(req);
  }


  @Post('logout')
  async logout(@Res({passthrough:true}) respons:Response){
    respons.clearCookie('jwt')

  }

  @Get('confirmation/:token')
  async  mailconfirmation(@Param('token')token:string){
    console.log(token
      );
    
    const confirmation = await this.authService.mailConfirmation(token)

    console.log(confirmation);
    
  }

}
