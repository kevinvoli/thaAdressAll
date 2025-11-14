import { Injectable, mixin, NestInterceptor, Type } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { diskStorage } from "multer";
import { editFileName, imageFileFilter } from '../utils/file-uploading.utils';
 
interface LocalFilesInterceptorOptions {
  fieldName: string;
  path?: string;
  file?:any
}
function LocalFilesInterceptor (options:  LocalFilesInterceptorOptions,): Type<NestInterceptor> {

  @Injectable()

  class Interceptor implements NestInterceptor {
    fileInterceptor: NestInterceptor;
    constructor(configService: ConfigService) {

      const filesDestination = configService.get('UPLOADED_FILES_DESTINATION');
      console.log({options});
      


      const destination = `${filesDestination}${options.path}`


      const multerOptions: MulterOptions = {
        storage: diskStorage({
          destination: destination,
          filename: editFileName,
        }),
        fileFilter:imageFileFilter,
      }
      this.fileInterceptor = new (FileInterceptor(options.fieldName, multerOptions));
    }

    async intercept(...args: Parameters<NestInterceptor['intercept']>) {
      console.log("cocAAAAAocococococ" , args);

      const coco=  await this.fileInterceptor.intercept(...args);
      console.log(coco);
      
      return coco
    }
  }
  return mixin(Interceptor);

}

export default LocalFilesInterceptor;