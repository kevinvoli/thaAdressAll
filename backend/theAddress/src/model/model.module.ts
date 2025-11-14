import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parametre } from './entities/parametre.entity';
import { Approvisionnement } from '../article/entities/approvisionnement.entity';
import { Notification } from './entities/notification.entity';
import { Devises } from './entities/devises.entity';
import { DemandeRetoure } from './entities/demandeRetoure.entity';
import { ContactezNous } from './entities/contactezNous.entity';
import { Commentairs } from './entities/commentairs.entity';
import { Product } from '../article/entities/product.entity';
import { CarteCadeau } from './entities/carteCadeau.entiy';
import { Matiere } from '../article/entities/matieres.entity';
import { Colors } from '../article/entities/colors.entity';
import { Createur } from '../article/entities/createur.entity';
import { DemandeAnnulation } from './entities/demandeAnnulation.entity';
import { Atribut } from './entities/Atribut.entity';
import { Tailles } from '../article/entities/tailles.entity';
import { Media } from '../article/entities/media.entitys';
import { Formataille } from '../article/entities/formataille.entity';
import { Tva } from '../article/entities/tva.entity';
import { Ville } from '../user/entities/ville.entity';
import { ImageProduit } from '../article/entities/produitImage.entity';
import { Pays } from 'src/user/entities/pays.entity';
import { Reduction } from './entities/reduction.entity';
import { AccueilleSladeController } from './controller/accuelleSlide.controller';
import { AttributCoOntroller } from './controller/atribut.controller';
import { CarteCadeauController } from './controller/carteCadeau.controller';
import { CommentaireController } from './controller/commentairs.controller';
import { ContacteNousController } from './controller/contacteNouz.controller';
import { DemandeAnnulationController } from './controller/demandeAnnulation.controller';
import { DemandeRetourController } from './controller/demandeRetour.controller';
import { DeviseController } from './controller/devises.controller';
import { ModuleController } from './controller/module.controller';
import { NotificationController } from './controller/notification.controller';
import { ParametreController } from './controller/parametre.controller';
import { ReductionController } from './controller/reduction.controller';
import { TagsController } from './controller/tags.controller';
import { AccueillSlideService } from './service/accueilleSlide.service';
import { AttributService } from './service/atribut.service';
import { CarteCadeauService } from './service/carteCadeau.service';
import { CommentaireService } from './service/commentaire.service';
import { ContacteNousService } from './service/contactezNous.service';
import { DemandeAnnulationService } from './service/demandeAnnulation.service';
import { DemandeRetourService } from './service/demandeRetoure.service';
import { DeviseService } from './service/devises.service';
import { ModuleService } from './service/module.service';
import { NotificationService } from './service/notification.service';
import { ParametreService } from './service/parametre.service';
import { ReductionService } from './service/reduction.service';
import { TagsService } from './service/tag.service';
import { AccueilleSlade } from './entities/accueilleSlide.entity';
import { Modules } from './entities/module.entity';
import { Tags } from './entities/tags.entity';


@Module({
  imports: [TypeOrmModule.forFeature([
    Parametre, 
    Approvisionnement,
    Notification,
    Devises, 
    DemandeRetoure,
    ContactezNous,
    Commentairs,
    Product,
    CarteCadeau,
    Matiere,
    Colors,
    Createur,
    DemandeRetoure,
    DemandeAnnulation,
    Atribut,
    Tailles,
    Media,
    Formataille,
    Tva,
    Pays,
    Ville,
    Reduction,
    ImageProduit,
    AccueilleSlade,
    Modules,
    Tags
  ])],
  controllers: [
    AccueilleSladeController,
    AttributCoOntroller,
    CarteCadeauController,
    CommentaireController,
    ContacteNousController,
    DemandeAnnulationController,
    DemandeRetourController,
    DeviseController,
    ModuleController,
    NotificationController,
    ParametreController,
    ReductionController,
    TagsController
  ] ,

  providers:[
    AccueillSlideService,
    AttributService,
    CarteCadeauService,
    CommentaireService,
    ContacteNousService,
    DemandeAnnulationService,
    DemandeRetourService,
    DeviseService,
    ModuleService,
    NotificationService,
    ParametreService,
    ReductionService,
    TagsService
  ]
})
export class ModelModule {}
