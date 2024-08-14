import { Injectable } from '@nestjs/common';

@Injectable()
export class ComputerService {

    run(){
        console.log("run");
    }
}
