import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { RoleModule } from './role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role/entities/role.entity';
import { Permition } from './role/entities/permition.entity';
import { Log } from './role/entities/log.entity';
import { RoleService } from './role/role.service';
import { RoleController } from './role/role.controller';

@Module({
  controllers: [
    RoleController
  ],
  providers: [
    AdminService,
    RoleService],
  imports: [
    TypeOrmModule.forFeature([
      Role,
      Permition,
      Log,
    ]),
    RoleModule,
    
    ]
})
export class AdminModule {}
