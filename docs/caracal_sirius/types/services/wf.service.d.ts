import { Process } from "../model/Process.model";
export declare class WFService {
    wfChangeHandler: (action: string, process: Process, source: any) => void;
    action: string;
    process: Process;
    setNextAction(name: string, source: any): void;
    setProcess(process: Process): void;
    getProcess(): Process;
    addActivity(type: string, create: any): void;
    parse(processDef: string): Process;
}
