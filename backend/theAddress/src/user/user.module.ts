import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from '../admin/role/entities/role.entity';
import { AddressFact } from './entities/address-fact.entity';
import { Panier } from './entities/panier.entity';
import { LignePanier } from './entities/lignePanier.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { Pays } from 'src/user/entities/pays.entity';
import { Ville } from './entities/ville.entity';
import { RoleController } from '../admin/role/role.controller';
import { LignePanierController } from './controllers/lignePanier.controller';
import { PanierController } from './controllers/panier.controller';
import { AddressFactController } from './controllers/addressFact.controller';
import { PaysController } from './controllers/pays.controller';
import { VilleController } from './controllers/ville.controller';
import { RoleService } from '../admin/role/role.service';
import { LignePanierService } from './services/lignePanier.service';
import { AddressFactService } from './services/addressFact.service';
import { PaysService } from './services/pays.service';
import { VilleService } from './services/ville.service';
import { Permition } from '../admin/role/entities/permition.entity';
import { Log } from '../admin/role/entities/log.entity';
import { PanierService } from './services/panier.service';
import { Product } from '../article/entities/product.entity';
import { ProduitService } from '../article/service/produit.service';
import { Categorie } from '../article/entities/categorie.entity';

dotenv.config();

@Module({
  imports: 
  [
    TypeOrmModule.forFeature([
      User, 
      Role,
      LignePanier,
      Panier,
      AddressFact,
      Pays,
      Ville,
      Permition,
      Log,
      Product,
      Categorie
      
    ]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: 3600
      }
    })
],
  controllers: [
    UserController,
    RoleController,
    LignePanierController,
    PanierController,
    AddressFactController,
    PaysController,
    VilleController
  ],
  providers: [
    UserService,
    RoleService,
    LignePanierService,
    AddressFactService,
    PaysService,
    VilleService,
    PanierService,
    ProduitService,
    
  ]
})
export class UserModule {}
