import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorie } from './entities/categorie.entity';
import { Product } from './entities/product.entity';
import { MulterModule } from '@nestjs/platform-express';
import { MediaModule } from '../media/media.module';
import { MediaService } from '../media/media.service';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { CategorieController } from './controller/categorie.controller';
import { CategorieService } from './service/categorie.service';
import { Colors } from './entities/colors.entity';
import { Createur } from './entities/createur.entity';
import { Formataille } from './entities/formataille.entity';
import { Matiere } from './entities/matieres.entity';
import { Media } from './entities/media.entitys';
import { ImageProduit } from './entities/produitImage.entity';
import { Tailles } from './entities/tailles.entity';
import { Tva } from './entities/tva.entity';
import { ProduitController } from './controller/produit.controller';
import { ColorsController } from './controller/colors.controller';
import { CreateurCrontroller } from './controller/createur.controller';
import { FormatailleCrontoller } from './controller/formataille.controller';
import { MatiereController } from './controller/matiere.controller';
import { MediaController } from '../media/media.controller';
import { ImageProduitController } from './controller/imageProduit.controller';
import { TvaController } from './controller/tva.controller';
import { ProduitService } from './service/produit.service';
import { ColorsService } from './service/colors.service';
import { CreateurService } from './service/createur.service';
import { TvaService } from './service/tva.service';
import { FormatailleService } from './service/formataille.service';
import { MatiereService } from './service/matiere.service';
import { ImageProduitService } from './service/imageProduit.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ 
      Categorie, 
      Product,
      Colors,
      Createur,
      Formataille,
      Matiere,
      Media,
      ImageProduit,
      Tva
     ]),
    MulterModule.register({
      dest:`./uploads/files`
    }),
    MediaModule,
],
  controllers: [
    CategorieController,
    ProduitController,
    ColorsController,
    CreateurCrontroller,
    FormatailleCrontoller,
    MatiereController,
    MediaController,
    ImageProduitController,
    TvaController
  ],
  providers: [MediaService,
     ConfigService,
     CategorieService,
     ProduitService,
     ColorsService,
     CreateurService,
     FormatailleService,
     MatiereService,
     MediaService,
     ImageProduitService,
     TvaService
    ]
})
export class ArticleModule {}
