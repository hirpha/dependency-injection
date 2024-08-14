import { Injectable } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';

@Injectable()
export class ComputerService {
constructor(private cpuService:CpuService){}
    run(){
       this.cpuService.compute(12, 12);
    }
}
