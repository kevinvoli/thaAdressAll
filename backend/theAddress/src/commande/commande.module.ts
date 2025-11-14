import { Module } from '@nestjs/common';
import { CommandeService } from './services/commande.service';
import { CommandeController } from './commande.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Commande } from './entities/commande.entity';
import { Categorie } from '../article/entities/categorie.entity';
import { StatusCommande } from './entities/statusCommande.entity';
import { Facture } from './entities/facturre.entity';
import { Livraison } from './entities/livraison.entity';
import { CommandePaiemant } from './entities/commandePaiement.entity';
import { Ligne } from './entities/ligne.entity';
import { LigneService } from './services/ligne.service';
import { LivraisonService } from './services/livraison.service';
import { StatusCommandeService } from './services/statusCommande.service';
import { FactureService } from './services/facture.service';
import { AddressFact } from '../user/entities/address-fact.entity';
import { AddressFactService } from '../user/services/addressFact.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt/dist';
import { Role } from '../admin/role/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    User, 
    Commande, 
    Categorie,
    StatusCommande, 
    Facture, 
    Livraison, 
    CommandePaiemant,
    Ligne,
    AddressFact,
    Role,

  ])],
  controllers: [CommandeController],
  providers: [
    CommandeService,
    LigneService,
    LivraisonService,
    StatusCommandeService,
    FactureService,
    AddressFactService,
    UserService,
    JwtService

  ]
})
export class CommandeModule {
  
}
