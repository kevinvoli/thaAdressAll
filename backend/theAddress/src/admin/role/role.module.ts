import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permition } from './entities/permition.entity';
import { Log } from './entities/log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ 
    Role,
    Permition,
    Log
  ])],
  controllers: [RoleController],
  providers: [RoleService]
})
export class RoleModule {}
