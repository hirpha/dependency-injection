import { Module } from '@nestjs/common';
import { DiskController } from './disk.controller';
import { DiskService } from './disk.service'; 
import { PowerModule } from 'src/power/power.module';

@Module({
  providers: [DiskService],
  controllers: [DiskController],
  exports:[DiskService],
  imports:[PowerModule]

})
export class DiskModule {}
