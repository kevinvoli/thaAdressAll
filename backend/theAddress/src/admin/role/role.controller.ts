import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {CreatePermitionDto } from './dto/create-permition.dto';
import { Permition } from './entities/permition.entity';
import { CreateLogDto } from './dto/create-log.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';


@ApiTags('admin')
@ApiUnauthorizedResponse({description:'utilisateur non connecté'})
@Controller('admin')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}


  @UsePipes( new ValidationPipe({transform:true}) )
  @Post('roles')
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    const roles= this.roleService.createRole(createRoleDto, 1);
    return roles
  }

  @Post('permition')
  async createPermition(@Body() createPermitionDto: CreatePermitionDto) {
    console.log(createPermitionDto);
    
    const roles= this.roleService.createPermition(createPermitionDto);
    return roles
  }

  async create(@Body() createLogDto: CreateLogDto) {
    const roles= this.roleService.createLog(createLogDto);
    return roles
  }

  @Get('roles')
  async findAllRoles() {
    return this.roleService.findAllRoles();
  }

  @Get('permition')
  async findAllPermitons() {
    return this.roleService.findAllPermition();
  }

  @Get('log')
  async findAllLog() {
    return this.roleService.findAllLog();
  }

  @Get('role/:id')
  async findOneRole(@Param('id') id: string) {
    return this.roleService.findOneRole(+id);
  }

  @Get('permition/:id')
  async findOnePermiton(@Param('id') id: string) {
    return this.roleService.findOnePermition(+id);
  }
   @Get('log/:id')
  async findOneLog(@Param('id') id: string) {
    return this.roleService.findOneLog(+id);
  }

  @Patch('role/:id')
  async updateRole(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.updateRole(+id, updateRoleDto);
  }

  @Patch('permition/:id')
  async updatePermition(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.updatePermition(+id, updateRoleDto);
  }

  @Patch('log/:id')
  async updateLog(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.updateLog(+id, updateRoleDto);
  }

  @Delete('role/:id')
  async removeRole(@Param('id') id: string) {
    return this.roleService.removeRole(+id);
  }

  @Delete('permition/:id')
  async removePermiton(@Param('id') id: string) {
    return this.roleService.removePermiton(+id);
  }

  @Delete('log/:id')
  async removeLog(@Param('id') id: string) {
    return this.roleService.removeLog(+id);
  }
}
