import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UpdateNotificationDto } from '../dto/update-notification.dto';
import { NotificationService } from '../service/notification.service';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('notification')
@ApiUnauthorizedResponse({description:'notification'})
@Controller('notification')
export class NotificationController {
  constructor(private readonly votificationService: NotificationService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.votificationService.create(createNotificationDto);
  }

  @Get()
  findAll() {
    return this.votificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votificationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return this.votificationService.update(+id, updateNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votificationService.remove(+id);
  }
}
