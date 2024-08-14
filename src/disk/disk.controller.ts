import { Controller } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { PowerService } from 'src/power/power.service';

@Controller('disk')
export class DiskController {
    constructor(private powerService: PowerService){}

    get(){
        this.powerService.supplyPower(10);
    }
}
