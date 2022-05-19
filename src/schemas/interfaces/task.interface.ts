import {Document} from "mongoose";


export interface Post extends Document {
    readonly name: string;
    readonly done: boolean;
}
