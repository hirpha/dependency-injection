import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuController } from './cpu.controller';
import { PowerModule } from 'src/power/power.module';
import { PowerService } from 'src/power/power.service';

@Module({
  providers: [CpuService],
  controllers: [CpuController],
  imports:[PowerModule],
  exports:[CpuService]
})

export class CpuModule {}
