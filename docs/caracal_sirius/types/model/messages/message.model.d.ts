import { MessageType } from "./message-type.model";
export declare class Message {
    messageType: MessageType;
    description?: string;
    stack?: string;
    constructor(messageType: MessageType, description?: string, stack?: string);
}
