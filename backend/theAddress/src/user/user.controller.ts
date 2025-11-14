import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards, ClassSerializerInterceptor, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LoginUserDto } from './dto/ligin-user.dto';
import { ApiForbiddenResponse, ApiOkResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';



@ApiTags('user')
@ApiUnauthorizedResponse({description:'utilisateur non connecté'})
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    type:[User],
    description:'liste de tous les utilisateur'
  })
  @ApiForbiddenResponse({ description: 'User is not admin' })
  @Get()
  async findAll(@Request()req) {
    console.log('user profilez',req.user);
    return this.userService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({
    type:[User],
    description:'liste de tous les utilisateur'
  })
  @ApiForbiddenResponse({ description: 'User is not admin' })
  @Get('profile')
  async profile(@Request()req) {
    console.log(req.user);
    return this.userService.getprofile(req.user.id);
  }




  
  

  @Get(':id')
  @ApiOkResponse({
    type:User,
    description:'utilisateur avec sont id'
  })
  @ApiForbiddenResponse({description:'user is not admin'})
  findOne(@Param('id') id: number) {
    console.log('je suis la :id',id);
    return this.userService.findOne(15);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}