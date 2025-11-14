import { Injectable, ConflictException, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from '../admin/role/entities/role.entity';
import { NotFoundError } from 'rxjs';
import { LoginUserDto } from './dto/ligin-user.dto';
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private jwtService: JwtService,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>
  ){}

  async create(createUserDto: CreateUserDto ,nameRole="client" ) {
    try {
      const role = await this.roleRepository.findOne({
        where: {name:nameRole}
      })
    Logger.log('create userd :', createUserDto)
    

      const newUser = new  User()
  
      newUser.password= createUserDto.password;
      newUser.nom = createUserDto.nom;
      newUser.prenoms= createUserDto.prenoms;
      newUser.contacts= createUserDto.contacts;
      newUser.photo= createUserDto.photo; 
      newUser.civilite= createUserDto.civilite;
      newUser.email = createUserDto.email
      newUser.roles= role

      newUser.salt= await bcrypt.genSalt()

      const user = await this.usersRepository.save(newUser)


      console.log(user);
      return user


    } catch (error) {
      console.log(error);

      throw new ConflictException(error)
    }
  }


  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    let users:User
    try {
      users= await this.usersRepository.findOne({
      where: {email:email},
      })
      if(users && await users.validatePassword(password, users.password)){
        const payload = { email: users.email, username: users.nom, id:users.id }   
        return payload
      }
      throw new NotFoundException('echec')
    } catch (error) {
      throw new NotFoundException(error.message)  
    }
  }

  async auth(mail:string){
    return this.usersRepository.findOne({
      where: {email: mail}
    })
  }


  async findAll() {
    const users = await this.usersRepository.find({
      relations:{
        roles:true
      }
    })
    return users;
  }

  async findOne(id: number) {
   console.log( id);
    try {
      const user = await this.usersRepository.findOne({
        where:{
          id:id
        },
        relations: {
          roles:true
        }
      })
      console.log('un autre cote',user);
      return user;
    } catch (error) {
      console.log('erroeur est ici:',error);
      throw new ConflictException(error)
    }
  }


  async getprofile(id: number) {
    console.log( id);
     try {
       const user = await this.usersRepository.findOne({
         where:{
           id:id
         },
         relations: {
           roles:true
         }
       })
       console.log('un autre cote',user);
       return user;
     } catch (error) {
       console.log('erroeur est ici:',error);
       throw new ConflictException(error)
     }
   }



  

  async findByemail(id){

  }

  async findUserToLogin(email: string): Promise<User | null> {
    return await this.usersRepository.findOne({
      where: { email },
      select: { password: true, email: true, id: true, },
    });
  }

  async findUserToSession(id: number): Promise<User | null> {
    return await this.usersRepository.findOne({
      where: { id },
      select: { email: true, id: true },
    });
  }

  async findOneByEmail(email: string) {
     try {
       const user = await this.usersRepository.findOne({
         where:{
           email:email
         },
         relations: {
           roles:true
         }
       })
       return user;
     } catch (error) { 
       throw new ConflictException(error)
     }
    }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({
      where: {
        id
      }
    })
    if(!user){
      throw new NotFoundException()
    }
    Object.assign(user, updateUserDto);
    await this.usersRepository.save(user)

    return user;
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne({
      where: {id}
    });
    if(!user) throw new NotFoundException('user' );

    await this.usersRepository.delete({id});
    return true
  }
}
