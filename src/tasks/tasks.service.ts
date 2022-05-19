import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {Task, TaskDocument} from "../schemas/task.schema";

@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {

  }


  async create(createTaskDto: CreateTaskDto) {
    const newTask = await new this.taskModel(createTaskDto);
    return newTask.save();
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel
        .find()
        .exec();
  }

  async findOne(id: string) {
    return await this.taskModel
        .findById(id)
        .exec();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return await this.taskModel
        .updateOne({_id: id}, updateTaskDto)
        .exec();
  }

  async remove(id: string) {
    return await this.taskModel
        .findByIdAndRemove(id)
        .exec();
  }
}
