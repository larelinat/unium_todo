import {IsBoolean, IsString} from "class-validator";

export class CreateTaskDto {
    @IsString()
    readonly name: string;

    @IsBoolean()
    readonly done: boolean;

    readonly color: string;
    readonly description: string;
}
