import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { Permition } from './entities/permition.entity';
import { Log } from './entities/log.entity';
import { CreatePermitionDto } from './dto/create-permition.dto';
import { CreateLogDto } from './dto/create-log.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private  roleRepositoty: Repository<Role>,
    @InjectRepository(Permition)
    private PermitionRepository: Repository<Permition>,
    @InjectRepository(Log)
    private logRepository: Repository<Log>

  ){}


  async createRole(createRoleDto: CreateRoleDto, idpermition:number) {
    const permition = await this.PermitionRepository.findOne({
      where:{id: idpermition}
    })
    const newRole= new Role()
    newRole.name =  createRoleDto.name;
    newRole.description = createRoleDto.description;
    newRole.permition=[permition]
    const role = await this.roleRepositoty.save(newRole)
    return  role;
  }

  async createPermition(createPermitionDto: CreatePermitionDto) {
    let newPermiton= new Permition();
    newPermiton.created=createPermitionDto.created;
    newPermiton.deleted= createPermitionDto.deleted;
    newPermiton.updated= createPermitionDto.updated;
    newPermiton.read= createPermitionDto.read;

    const permition= await this.PermitionRepository.save(newPermiton)

    console.log("premition",permition);

    return permition;
  }

  async createLog(createLogDto: CreateLogDto) {

    const newLog = new Log()
    newLog.action= createLogDto.action;
    newLog.content= createLogDto.content;
    newLog.userId=createLogDto.userId;
    newLog.icon= createLogDto.icon;
    const logs = await this.logRepository.save(newLog)
    return newLog
  }

  async findAllRoles() {

    const roles= await this.roleRepositoty.find({
      relations:{
        permition:true
      }
    })
    return roles;
  }

  async findAllPermition() {
    const permition = await this.PermitionRepository.find({
      relations:{}
    })
    return permition
  }

  async findAllLog() {
    const Logs =await this.logRepository.find()
    return Logs
  }



  async findOneRole(id: number) {
    const role = await this.roleRepositoty.findOne({
      where:{id: id}
    })
    return role
  }

  async findOnePermition(id: number) {
    const permition = await this.PermitionRepository.findOne({
      where:{id: id}
    })
    return permition
  }

  async findOneLog(id: number) {
    const log = await this.logRepository.findOne({
      where:{id: id}
    })
    return log
  }



  async updateRole(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  async updatePermition(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  async updateLog(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }
  

  async removeRole(id: number) {
    return `This action removes a #${id} role`;
  }

  async removePermiton(id: number) {
    return `This action removes a #${id} role`;
  }

  async removeLog(id: number) {
    return `This action removes a #${id} role`;
  }
}
