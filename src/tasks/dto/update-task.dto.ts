import {PartialType} from '@nestjs/mapped-types';
import {CreateTaskDto} from './create-task.dto';
import {IsBoolean, IsString} from "class-validator";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsString()
    readonly name: string;

    @IsBoolean()
    readonly done: boolean;
}
