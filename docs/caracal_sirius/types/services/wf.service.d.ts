import { Process } from "../model/Process.model";
export declare class WFService {
    wfChangeHandler: (action: string, process: Process) => void;
    action: string;
    process: Process;
    setNextAction(name: string): void;
    setProcess(process: Process): void;
    addActivity(type: string, create: any): void;
    parse(processDef: string): Process;
}
