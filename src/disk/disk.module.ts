import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { DiskController } from './disk.controller';
import { DiskService } from './disk.service';
import { DiskService } from './disk.service';
import { DiskService } from './disk.service';

@Module({
  providers: [DiskService],
  controllers: [DiskController]
})
export class DiskModule {}
