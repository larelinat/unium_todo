import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";


export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    done: boolean;

    @Prop()
    description: string;

    @Prop()
    color: string;


}


export const TaskSchema = SchemaFactory.createForClass(Task);
