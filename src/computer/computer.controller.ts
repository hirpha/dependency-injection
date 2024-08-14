import { Controller, Get } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
    constructor(
    private cpuService :CpuService,
    private diskService :DiskService

    ){}
    @Get()
    run(){
        return [this.cpuService.compute(2, 10), this.diskService.getData()]
    }
}
